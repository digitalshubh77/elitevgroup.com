"use client";

interface ParticleFieldProps {
  count?: number;
  variant?: "hero" | "light";
}

export default function ParticleField({
  count = 20,
  variant = "hero",
}: ParticleFieldProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 13) % 100}%`,
    size: 2 + (i % 4),
    delay: `${(i * 0.7) % 12}s`,
    duration: `${8 + (i % 10)}s`,
    type: i % 3 === 0 ? "gold" : "white",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.type === "gold" ? "particle-gold" : "particle-white"}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: variant === "hero" ? 0.6 : 0.3,
          }}
        />
      ))}
    </div>
  );
}
