
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
}

export function ScrollReveal({ 
  children, 
  className, 
  direction = "up", 
  delay = 0 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directions = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
    none: "scale-95",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : cn("opacity-0", directions[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
