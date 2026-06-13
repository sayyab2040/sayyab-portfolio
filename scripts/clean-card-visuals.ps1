param(
  [string]$SourceDirectory = "tmp/card-visuals-source",
  [string]$OutputDirectory = "public/assets/card-visuals"
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase
Add-Type -AssemblyName System.Xaml

$sourceRoot = (Resolve-Path $SourceDirectory).Path
$outputRoot = Join-Path (Resolve-Path ".").Path $OutputDirectory
New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null

$imageProcessor = @'
using System;
using System.Collections.Generic;
using System.IO;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;

public static class CardVisualCleaner
{
    public static void Clean(string inputPath, string outputPath)
    {
        BitmapFrame frame;
        using (FileStream stream = File.OpenRead(inputPath))
        {
            PngBitmapDecoder decoder = new PngBitmapDecoder(
                stream,
                BitmapCreateOptions.PreservePixelFormat,
                BitmapCacheOption.OnLoad
            );
            frame = decoder.Frames[0];
        }

        FormatConvertedBitmap converted = new FormatConvertedBitmap(
            frame,
            PixelFormats.Bgra32,
            null,
            0
        );

        int width = converted.PixelWidth;
        int height = converted.PixelHeight;
        int stride = width * 4;
        byte[] pixels = new byte[stride * height];
        converted.CopyPixels(pixels, stride, 0);

        bool[] background = FindBackground(pixels, width, height);

        int minX = width;
        int minY = height;
        int maxX = -1;
        int maxY = -1;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int pixelIndex = y * width + x;
                int byteIndex = pixelIndex * 4;

                if (background[pixelIndex])
                {
                    pixels[byteIndex + 3] = 0;
                    continue;
                }

                pixels[byteIndex + 3] = 255;
                minX = Math.Min(minX, x);
                minY = Math.Min(minY, y);
                maxX = Math.Max(maxX, x);
                maxY = Math.Max(maxY, y);
            }
        }

        if (maxX < minX || maxY < minY)
        {
            throw new InvalidOperationException("No illustration pixels remained after background removal.");
        }

        const int padding = 24;
        minX = Math.Max(0, minX - padding);
        minY = Math.Max(0, minY - padding);
        maxX = Math.Min(width - 1, maxX + padding);
        maxY = Math.Min(height - 1, maxY + padding);

        int cropWidth = maxX - minX + 1;
        int cropHeight = maxY - minY + 1;
        WritePng(pixels, width, height, minX, minY, cropWidth, cropHeight, outputPath);
    }

    private static bool[] FindBackground(byte[] pixels, int width, int height)
    {
        bool[] background = new bool[width * height];
        Queue<int> queue = new Queue<int>(width * 4 + height * 4);

        Action<int, int> enqueue = (x, y) =>
        {
            int index = y * width + x;
            if (!background[index] && IsCheckerboardPixel(pixels, index * 4))
            {
                background[index] = true;
                queue.Enqueue(index);
            }
        };

        for (int x = 0; x < width; x++)
        {
            enqueue(x, 0);
            enqueue(x, height - 1);
        }

        for (int y = 1; y < height - 1; y++)
        {
            enqueue(0, y);
            enqueue(width - 1, y);
        }

        while (queue.Count > 0)
        {
            int index = queue.Dequeue();
            int x = index % width;
            int y = index / width;

            if (x > 0) enqueue(x - 1, y);
            if (x + 1 < width) enqueue(x + 1, y);
            if (y > 0) enqueue(x, y - 1);
            if (y + 1 < height) enqueue(x, y + 1);
        }

        return background;
    }

    private static bool IsCheckerboardPixel(byte[] pixels, int index)
    {
        int blue = pixels[index];
        int green = pixels[index + 1];
        int red = pixels[index + 2];
        int max = Math.Max(red, Math.Max(green, blue));
        int min = Math.Min(red, Math.Min(green, blue));
        int average = (red + green + blue) / 3;

        return average >= 222 && max - min <= 18;
    }

    private static void WritePng(
        byte[] source,
        int sourceWidth,
        int sourceHeight,
        int left,
        int top,
        int cropWidth,
        int cropHeight,
        string outputPath
    )
    {
        int sourceStride = sourceWidth * 4;
        int cropStride = cropWidth * 4;
        byte[] cropped = new byte[cropStride * cropHeight];

        for (int y = 0; y < cropHeight; y++)
        {
            Buffer.BlockCopy(
                source,
                (top + y) * sourceStride + left * 4,
                cropped,
                y * cropStride,
                cropStride
            );
        }

        BitmapSource bitmap = BitmapSource.Create(
            cropWidth,
            cropHeight,
            96,
            96,
            PixelFormats.Bgra32,
            null,
            cropped,
            cropStride
        );

        PngBitmapEncoder encoder = new PngBitmapEncoder();
        encoder.Frames.Add(BitmapFrame.Create(bitmap));

        using (FileStream stream = File.Create(outputPath))
        {
            encoder.Save(stream);
        }
    }
}
'@

Add-Type -TypeDefinition $imageProcessor -ReferencedAssemblies PresentationCore, WindowsBase, System.Xaml

$assets = [ordered]@{
  "core-source.png"      = "core-software-visual.png"
  "frontend-source.png"  = "frontend-app-visual.png"
  "backend-source.png"   = "backend-api-visual.png"
  "qa-source.png"        = "qa-testing-visual.png"
  "devops-source.png"    = "devops-cloud-visual.png"
  "ecommerce-source.png" = "ecommerce-ops-visual.png"
}

foreach ($asset in $assets.GetEnumerator()) {
  $inputPath = Join-Path $sourceRoot $asset.Key
  $outputPath = Join-Path $outputRoot $asset.Value

  if (-not (Test-Path -LiteralPath $inputPath)) {
    throw "Missing source image: $inputPath"
  }

  [CardVisualCleaner]::Clean($inputPath, $outputPath)
  Write-Output "Created $outputPath"
}
