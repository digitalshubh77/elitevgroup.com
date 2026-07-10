"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  innerClassName,
  maxTilt = 10,
  scale = 1.02,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const inner = innerRef.current;
    const glareEl = glareRef.current;
    if (!el || !inner) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

    if (glareEl) {
      const gx = (x / rect.width) * 100;
      const gy = (y / rect.height) * 100;
      glareEl.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), transparent 55%)`;
      glareEl.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    const inner = innerRef.current;
    const glareEl = glareRef.current;
    if (inner) {
      inner.style.transform =
        "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    if (glareEl) glareEl.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("tilt-card-wrapper", className)}
    >
      <div ref={innerRef} className={cn("tilt-card-inner", innerClassName)}>
        {glare && (
          <div
            ref={glareRef}
            className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit] z-20 opacity-0 transition-opacity duration-300"
          />
        )}
        {children}
      </div>
    </div>
  );
}
