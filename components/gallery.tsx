"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import { Lightbox } from "@/components/lightbox";
import type { ProjectImage } from "@/data/projects";

type GalleryProps = {
  images: ProjectImage[];
};

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`group glass-panel neon-outline relative overflow-hidden rounded-[28px] border border-white/8 text-left ${
              index % 4 === 0 ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            whileHover={{ y: -4 }}
          >
            <div className="project-image-card relative aspect-[16/10]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={image.src.endsWith(".svg")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 p-2 text-slate-100">
                <Search className="size-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-slate-200">{image.alt}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

