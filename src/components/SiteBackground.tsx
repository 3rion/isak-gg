export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 h-[750px] w-[1800px] -translate-x-1/2"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -top-40 left-1/2 h-[750px] w-[1800px] -translate-x-1/2"
        style={{
          backgroundImage:
            "radial-gradient(rgba(5,216,251,0.18) 0%, rgba(5,216,251,0.08) 30%, rgba(5,216,251,0.03) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
