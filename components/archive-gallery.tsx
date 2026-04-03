"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Lightbox } from "@/components/lightbox";
import type { ArchiveCategory, ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";

type ArchiveItem = ProjectImage & {
  key: string;
  projectSlug: string;
  projectTitle: string;
};

const filters: Array<ArchiveCategory | "All"> = ["All", "Combat", "Vehicles", "Environment"];

export function ArchiveGallery({ items }: { items: ArchiveItem[] }) {
  const [selectedFilter, setSelectedFilter] = useState<ArchiveCategory | "All">("All");
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const filteredItems = useMemo(
    () => items.filter((item) => selectedFilter === "All" || item.category === selectedFilter),
    [items, selectedFilter]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelectedFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 font-display text-xs uppercase tracking-[0.24em] transition",
              selectedFilter === filter
                ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="archive-masonry">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.key}
            className="archive-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index * 0.02 }}
          >
            <div className="glass-panel project-image-card neon-outline overflow-hidden rounded-[26px] border border-white/8">
              <button type="button" onClick={() => setSelectedImage(item)} className="group block w-full text-left">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    unoptimized={item.src.endsWith(".svg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <p className="section-kicker text-[10px]">{item.category}</p>
                    <p className="mt-2 text-base text-white">{item.alt}</p>
                  </div>
                </div>
              </button>
              <div className="px-4 pb-4">
                <Link href={`/projects/${item.projectSlug}`} className="text-sm text-cyan-100">
                  {item.projectTitle}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
