"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransforms = {
    up: "translate3d(0, 48px, -40px) rotateX(14deg)",
    left: "translate3d(-48px, 0, -40px) rotateY(14deg)",
    right: "translate3d(48px, 0, -40px) rotateY(-14deg)",
  };

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal-3d", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)"
          : hiddenTransforms[direction],
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
