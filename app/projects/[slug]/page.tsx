import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Gallery } from "@/components/gallery";
import { GlowButton } from "@/components/glow-button";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Yash Menat"
    };
  }

  return {
    title: `${project.title} | Yash Menat`,
    description: project.heroIntro
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="pb-20">
        <section className="shell grid gap-10 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
          <Reveal className="max-w-3xl">
            <Link
              href="/"
              data-cursor="interactive"
              className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
            >
              ← Back to Portfolio
            </Link>
            <p className="section-kicker mb-4 text-xs">Project Case Study // {project.category}</p>
            <h1 className="font-display text-4xl uppercase tracking-[0.08em] text-white md:text-6xl">{project.title}</h1>
            <h2 className="mt-4 text-balance font-display text-xl uppercase tracking-[0.12em] text-slate-200 md:text-2xl">{project.heroSubtitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{project.heroIntro}</p>
          </Reveal>

          <Reveal>
            {project.heroImage ? (
              <div className="glass-panel neon-outline project-image-card overflow-hidden rounded-[32px] border border-white/8">
                <div className="relative aspect-[4/3] min-h-[420px]">
                  <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 45vw" />
                </div>
              </div>
            ) : null}
          </Reveal>
        </section>

        <SectionWrapper eyebrow="System Overview" title="Project Overview">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            {project.overviewImage ? (
              <Reveal>
                <div className="glass-panel neon-outline project-image-card overflow-hidden rounded-[28px] border border-white/8">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.overviewImage.src}
                      alt={project.overviewImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </SectionWrapper>

        <SectionWrapper eyebrow="Visual Archive" title={project.galleryTitle}>
          <Gallery images={project.gallery} />
        </SectionWrapper>

        {project.sections.map((section, index) => (
          <SectionWrapper key={section.id} id={section.id} eyebrow={section.eyebrow} title={section.title}>
            <div className={`grid items-center gap-8 md:grid-cols-2 ${section.reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
              {section.image ? (
                <Reveal delay={index * 0.04}>
                  <div className="glass-panel neon-outline project-image-card overflow-hidden rounded-[28px] border border-white/8">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </Reveal>
              ) : null}

              <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300" delay={index * 0.08}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            </div>
          </SectionWrapper>
        ))}

        <SectionWrapper eyebrow="Project Breakdown" title="Key Highlights">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 0.04}>
                <article className="glass-panel neon-outline h-full rounded-[26px] border border-white/8 p-6">
                  <h3 className="font-display text-lg uppercase tracking-[0.12em] text-white">{highlight.title}</h3>
                  <p className="mt-3 text-slate-300">{highlight.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper eyebrow="Toolchain" title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <span className="glass-panel neon-outline inline-flex rounded-full border border-white/8 px-4 py-3 font-display text-xs uppercase tracking-[0.22em] text-slate-100">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper eyebrow="Playback" title="Project Showcase">
          <Reveal className="video-frame glass-panel neon-outline overflow-hidden rounded-[30px] border border-white/8 p-3">
            <iframe
              src={project.videoEmbed}
              title={`${project.title} project showcase`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Reveal>
        </SectionWrapper>

        <section className="shell py-10">
          <Reveal className="glass-panel neon-outline rounded-[30px] border border-white/8 p-8">
            <p className="section-kicker mb-4 text-xs">Next Destination</p>
            <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-white">Continue Exploring</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Return to the main portfolio to explore the rest of the work, the full visual archive, and the contact section.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GlowButton href="/" arrow>
                Back to Portfolio
              </GlowButton>
              <GlowButton href="/visual-archive" variant="ghost">
                Open Visual Archive
              </GlowButton>
            </div>
          </Reveal>
        </section>
      </main>
    </PageTransition>
  );
}
