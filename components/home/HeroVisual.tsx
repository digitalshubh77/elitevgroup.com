"use client";

import { Sun, Zap, Battery, Home } from "lucide-react";

const orbitIcons = [
  { Icon: Zap, color: "text-accent-light", delay: "0s" },
  { Icon: Battery, color: "text-solar-green", delay: "-5s" },
  { Icon: Home, color: "text-white/80", delay: "-10s" },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto aspect-square perspective-1200">
      <div className="solar-3d-scene absolute inset-0 flex items-center justify-center">
        <div className="solar-3d-stage w-full h-full">
          <div className="solar-panel-3d solar-panel-3d-1" />
          <div className="solar-panel-3d solar-panel-3d-2" />
          <div className="solar-panel-3d solar-panel-3d-3" />
        </div>
      </div>

      <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl animate-pulse-glow" />
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-spin-slow preserve-3d" />
      <div className="absolute inset-6 rounded-full border border-accent/20 animate-spin-slow-reverse preserve-3d" />

      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={deg}
          className="absolute inset-0 flex items-center justify-center animate-beam preserve-3d"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <div
            className="w-px h-full bg-gradient-to-b from-transparent via-accent/25 to-transparent"
            style={{ transform: `rotate(${deg}deg)` }}
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center preserve-3d">
        {orbitIcons.map(({ Icon, color, delay }, i) => (
          <div
            key={i}
            className="absolute animate-spin-slow preserve-3d"
            style={{ animationDuration: "20s", animationDelay: delay }}
          >
            <div
              className="glass-card-strong rounded-xl p-2.5 shadow-lg"
              style={{ transform: `translateX(${100 + i * 12}px) translateZ(20px)` }}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center preserve-3d">
        <div className="relative animate-depth-pulse">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="sun-ray"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.2}s`,
                height: `${22 + (i % 3) * 6}px`,
              }}
            />
          ))}

          <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-gradient-to-br from-accent via-accent-light to-amber-300 shadow-2xl shadow-accent/50 flex items-center justify-center animate-pulse-glow preserve-3d">
            <Sun className="w-14 h-14 xl:w-16 xl:h-16 text-primary-dark relative z-10" />
          </div>
        </div>
      </div>

      <div className="absolute -top-2 -right-4 animate-float hidden sm:block preserve-3d">
        <TiltBadge value="100+" label="Projects Done" accent />
      </div>

      <div className="absolute -bottom-2 -left-4 animate-float-reverse hidden sm:block preserve-3d">
        <TiltBadge value="₹78K" label="Max Subsidy" green />
      </div>
    </div>
  );
}

function TiltBadge({
  value,
  label,
  accent,
  green,
}: {
  value: string;
  label: string;
  accent?: boolean;
  green?: boolean;
}) {
  return (
    <div className="glass-card-strong rounded-2xl px-4 py-3 text-center min-w-[100px] card-3d">
      <p
        className={`text-2xl font-bold ${accent ? "text-accent-light" : green ? "text-solar-green" : "text-white"}`}
      >
        {value}
      </p>
      <p className="text-white/60 text-xs">{label}</p>
    </div>
  );
}
