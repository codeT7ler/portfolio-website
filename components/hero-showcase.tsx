"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 130, damping: 18, mass: 0.8 });
  const springRotateY = useSpring(rotateY, { stiffness: 130, damping: 18, mass: 0.8 });

  const glowX = useTransform(springRotateY, [-10, 10], ["46%", "54%"]);
  const glowY = useTransform(springRotateX, [-10, 10], ["52%", "48%"]);

  useEffect(() => {
    const node = frameRef.current;
    if (!node || shouldReduceMotion) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      rotateY.set(offsetX * 12);
      rotateX.set(offsetY * -10);
    };

    const onLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [rotateX, rotateY, shouldReduceMotion]);

  return (
    <motion.div
      ref={frameRef}
      className="glass-panel hero-stage neon-outline relative"
      style={shouldReduceMotion ? undefined : { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1600 }}
    >
      <div className="hero-grid" />
      <motion.div
        className="hero-light"
        style={shouldReduceMotion ? undefined : { left: glowX, top: glowY }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="ring ring-one" animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      <motion.div className="ring ring-two" animate={shouldReduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} />
      <motion.div className="ring ring-three" animate={shouldReduceMotion ? undefined : { scale: [0.98, 1.03, 0.98], opacity: [0.6, 1, 0.6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div
        className="hero-platform"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-model"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotateZ: [0, 1.25, 0, -1.25, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hero-model-core" />
        <div className="hero-model-head" />
        <div className="hero-model-shoulder hero-model-shoulder-left" />
        <div className="hero-model-shoulder hero-model-shoulder-right" />
        <div className="hero-model-leg hero-model-leg-left" />
        <div className="hero-model-leg hero-model-leg-right" />
      </motion.div>

      <motion.div
        className="hero-hud hero-hud-left"
        animate={shouldReduceMotion ? undefined : { x: [0, 10, 0], opacity: [0.62, 1, 0.62] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Unreal System</span>
        <strong>Gameplay Online</strong>
      </motion.div>
      <motion.div
        className="hero-hud hero-hud-right"
        animate={shouldReduceMotion ? undefined : { x: [0, -10, 0], opacity: [0.52, 0.92, 0.52] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Runtime Status</span>
        <strong>Stable 120 FPS</strong>
      </motion.div>
      <div className="scanline-overlay" />
      <div className="absolute left-6 top-6 rounded-full border border-cyan-300/18 bg-slate-950/70 px-3 py-2 font-display text-[11px] uppercase tracking-[0.26em] text-cyan-100">
        Live Showcase
      </div>
      <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-slate-950/65 px-3 py-2 font-display text-[11px] uppercase tracking-[0.26em] text-slate-200">
        System Online
      </div>
    </motion.div>
  );
}

