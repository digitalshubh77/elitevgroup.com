"use client";

import { Sun, Zap, Battery, Home } from "lucide-react";

const orbitIcons = [
  { Icon: Zap, color: "text-accent-light", delay: "0s" },
  { Icon: Battery, color: "text-solar-green", delay: "-5s" },
  { Icon: Home, color: "text-white/80", delay: "-10s" },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md xl:max-w-lg mx-auto aspect-square">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl animate-pulse-glow" />

      {/* Rotating dashed rings */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-spin-slow" />
      <div
        className="absolute inset-6 rounded-full border border-accent/20 animate-spin-slow-reverse"
      />
      <div
        className="absolute inset-12 rounded-full border border-white/5 animate-spin-slow"
        style={{ animationDuration: "35s" }}
      />

      {/* Animated beam lines */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={deg}
          className="absolute inset-0 flex items-center justify-center animate-beam"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <div
            className="w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
            style={{ transform: `rotate(${deg}deg)` }}
          />
        </div>
      ))}

      {/* Orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {orbitIcons.map(({ Icon, color, delay }, i) => (
          <div
            key={i}
            className="absolute animate-spin-slow"
            style={{ animationDuration: "20s", animationDelay: delay }}
          >
            <div
              className="glass-card-strong rounded-xl p-2.5"
              style={{ transform: `translateX(${120 + i * 15}px)` }}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Central sun */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Sun rays */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="sun-ray"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.2}s`,
                height: `${28 + (i % 3) * 8}px`,
              }}
            />
          ))}

          {/* Sun core */}
          <div className="relative w-28 h-28 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-accent via-accent-light to-amber-300 shadow-2xl shadow-accent/50 flex items-center justify-center animate-pulse-glow">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200/40 to-transparent" />
            <Sun className="w-14 h-14 xl:w-16 xl:h-16 text-primary-dark relative z-10" />
          </div>

          {/* Inner glow ring */}
          <div className="absolute -inset-4 rounded-full border-2 border-accent/30 animate-spin-slow" style={{ animationDuration: "30s" }} />
        </div>
      </div>

      {/* Floating stat badges */}
      <div className="absolute -top-2 -right-4 animate-float">
        <div className="glass-card-strong rounded-2xl px-4 py-3 text-center min-w-[110px]">
          <p className="text-2xl font-bold text-accent-light">100+</p>
          <p className="text-white/60 text-xs">Projects Done</p>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-4 animate-float-reverse">
        <div className="glass-card-strong rounded-2xl px-4 py-3 text-center min-w-[110px]">
          <p className="text-2xl font-bold text-solar-green">₹78K</p>
          <p className="text-white/60 text-xs">Max Subsidy</p>
        </div>
      </div>

      <div className="absolute top-1/2 -left-8 -translate-y-1/2 animate-float hidden xl:block" style={{ animationDelay: "2s" }}>
        <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-solar-green animate-pulse-glow" />
          <span className="text-white/80 text-xs font-medium">Live Solar</span>
        </div>
      </div>
    </div>
  );
}
