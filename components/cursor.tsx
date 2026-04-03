"use client";

import { useEffect, useRef, useState } from "react";

function isInteractive(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(
    target.closest(
      'a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"], [data-lightbox-trigger]'
    )
  );
}

export function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapability = () => {
      const active = media.matches;
      setEnabled(active);
      document.documentElement.classList.toggle("has-custom-cursor", active);
    };

    updateCapability();

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;

      const x = currentRef.current.x;
      const y = currentRef.current.y;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (innerRef.current) {
        const innerX = reducedMotion.matches ? targetRef.current.x : x + (targetRef.current.x - x) * 0.5;
        const innerY = reducedMotion.matches ? targetRef.current.y : y + (targetRef.current.y - y) * 0.5;
        innerRef.current.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!rafRef.current) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        rafRef.current = window.requestAnimationFrame(animate);
      }
    };

    const onOver = (event: Event) => {
      const interactive = isInteractive(event.target);
      outerRef.current?.classList.toggle("cursor-outer-active", interactive);
      innerRef.current?.classList.toggle("cursor-inner-active", interactive);
    };

    const onDown = () => {
      outerRef.current?.classList.add("cursor-outer-pressed");
      innerRef.current?.classList.add("cursor-inner-pressed");
    };

    const onUp = () => {
      outerRef.current?.classList.remove("cursor-outer-pressed");
      innerRef.current?.classList.remove("cursor-inner-pressed");
    };

    media.addEventListener("change", updateCapability);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      media.removeEventListener("change", updateCapability);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseover", onOver);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={outerRef} className="cursor-outer" aria-hidden="true" />
      <div ref={innerRef} className="cursor-inner" aria-hidden="true" />
    </>
  );
}

