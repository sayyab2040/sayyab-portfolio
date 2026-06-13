export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.14), transparent 32%), linear-gradient(135deg, #0A0014, #0B0018, #030014)"
        }}
      />
      <div className="absolute inset-0 dark-grid opacity-[0.34]" />
      <div className="absolute inset-0 dot-matrix opacity-[0.055]" />
      <div className="absolute inset-0 wave-lines opacity-[0.10]" />

      <div
        className="absolute -left-40 -top-32 h-[36rem] w-[36rem] rounded-full opacity-60 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22), transparent 68%)" }}
      />
      <div
        className="absolute right-[-12rem] top-28 h-[32rem] w-[32rem] rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.16), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10rem] left-[28%] h-[30rem] w-[30rem] rounded-full opacity-45 blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(147,51,234,0.14), transparent 70%)" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,13,0.06),rgba(5,0,13,0.72))]" />
    </div>
  );
}
