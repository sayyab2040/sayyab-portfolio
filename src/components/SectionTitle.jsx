import { motion } from "framer-motion";

function splitHeading(title) {
  const text = title.trim();
  if (text.length <= 44) return [text];

  const words = text.split(/\s+/);
  if (words.length < 5) return [text];

  const target = text.length / 2;
  let bestIndex = 1;
  let bestScore = Number.POSITIVE_INFINITY;

  for (let index = 2; index < words.length - 1; index += 1) {
    const left = words.slice(0, index).join(" ");
    const right = words.slice(index).join(" ");
    const commaBreak = /[,;:]$/.test(words[index - 1]) ? -5 : 0;
    const balancePenalty = Math.abs(left.length - target) + Math.abs(right.length - target);
    const score = balancePenalty + commaBreak;

    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }

  return [words.slice(0, bestIndex).join(" "), words.slice(bestIndex).join(" ")];
}

export default function SectionTitle({
  label = "",
  title = "",
  highlightWord = "",
  subtitle = "",
  centered = true,
}) {
  const titleLines = title ? splitHeading(title) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${centered ? "text-center" : ""} mb-8`}
    >
      {label && (
        <div className="mb-4 inline-block">
          <div className="section-label-yellow md:text-sm">
            {label}
          </div>
        </div>
      )}

      <h2 className={`section-title section-title-lines max-w-4xl font-display font-black ${centered ? "mx-auto items-center" : "items-start"}`}>
        {titleLines.map((line) => (
          <span className="section-title-highlight" key={line}>
            {line}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p className={`mb-4 mt-4 max-w-[680px] text-[0.94rem] font-medium leading-[1.65] text-[#D7D7E0] ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}

      {title && (
        <div className={`flex ${centered ? "justify-center" : ""} mt-4`}>
          <div
            style={{
              width: "100px",
              height: "3px",
              background:
                "linear-gradient(90deg, #FACC15 0%, #A855F7 50%, #22D3EE 100%)",
              borderRadius: "2px",
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
