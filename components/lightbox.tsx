"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { ProjectImage } from "@/data/projects";

type LightboxProps = {
  image: ProjectImage | null;
  onClose: () => void;
};

export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/80 p-3 text-slate-100 transition hover:border-cyan-300/40 hover:text-white"
            aria-label="Close image viewer"
          >
            <X className="size-5" />
          </button>
          <motion.div
            className="glass-panel relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 p-2"
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
              <Image src={image.src} alt={image.alt} fill className="object-contain bg-slate-950" sizes="100vw" />
            </div>
            <p className="px-3 py-4 text-sm text-slate-300">{image.alt}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

