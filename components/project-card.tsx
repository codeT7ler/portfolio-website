import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectData } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="interactive"
      className="group glass-panel neon-outline relative grid overflow-hidden rounded-[30px] border border-white/8 p-5 transition duration-300 hover:-translate-y-1 md:grid-cols-[0.95fr_1.05fr] md:p-7"
    >
      <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 font-display text-[11px] uppercase tracking-[0.26em] text-cyan-100">
        Project {project.chapter}
      </div>
      <div className="project-image-card relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/8 bg-slate-950/60">
        {project.heroImage ? (
          <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
      </div>

      <div className="flex flex-col justify-between gap-6 px-0 pt-6 md:px-8 md:pt-0">
        <div className="space-y-4">
          <p className="section-kicker text-xs">{project.category}</p>
          <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white md:text-3xl">{project.cardTitle}</h3>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{project.homepageDescription}</p>
        </div>

        <div className="flex items-center gap-3 font-display text-sm uppercase tracking-[0.22em] text-cyan-100">
          View Project
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
