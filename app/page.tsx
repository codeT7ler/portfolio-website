import { GlowButton } from "@/components/glow-button";
import { HeroShowcase } from "@/components/hero-showcase";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { SocialLinks } from "@/components/social-links";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <section id="hero" className="shell grid min-h-[calc(100vh-72px)] items-center gap-10 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-24">
          <Reveal className="max-w-3xl">
            <p className="section-kicker mb-5 text-xs">Technical Designer // Unreal Engine Gameplay Systems</p>
            <h1 className="font-display text-5xl uppercase tracking-[0.08em] text-white md:text-7xl">Yash Menat</h1>
            <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.12em] text-slate-200 md:text-3xl">Technical Designer</h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">
              Hello there! I&apos;m excited to share the projects I&apos;ve been working on, feel free to get in touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GlowButton href="/#projects" arrow>
                View Projects
              </GlowButton>
              <GlowButton href="/#contact" variant="ghost">
                Open Contact
              </GlowButton>
            </div>
          </Reveal>

          <Reveal className="relative">
            <HeroShowcase />
          </Reveal>
        </section>

        <SectionWrapper id="projects" eyebrow="Selected Work" title="Mission Chapters">
          <div className="grid gap-6">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="contact"
          eyebrow="Transmission Channel"
          title="Contact Me"
          description="You can find me on Instagram, Behance, LinkedIn, and GitHub. For any inquiries, collaborations, or even a friendly hello, my email is always open."
        >
          <Reveal>
            <div className="glass-panel neon-outline rounded-[30px] border border-white/8 p-6 md:p-8">
              <SocialLinks />
            </div>
          </Reveal>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}
