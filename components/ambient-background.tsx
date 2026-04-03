"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.4 });

  const driftX = useTransform(smoothX, [0, 1], shouldReduceMotion ? [0, 0] : [-50, 50]);
  const driftY = useTransform(smoothY, [0, 1], shouldReduceMotion ? [0, 0] : [-36, 36]);
  const driftXSlow = useTransform(smoothX, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);
  const driftYSlow = useTransform(smoothY, [0, 1], shouldReduceMotion ? [0, 0] : [28, -28]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="ambient-orb ambient-orb-cyan"
        style={{ x: driftX, y: driftY }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.72, 0.92, 0.72] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-purple"
        style={{ x: driftXSlow, y: driftYSlow }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.72, 0.55] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-orange"
        style={{ x: driftX, y: driftYSlow }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.32, 0.44, 0.32] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-vignette" />
      <div className="ambient-noise" />
    </div>
  );
}

