import { ArchiveGallery } from "@/components/archive-gallery";
import { GlowButton } from "@/components/glow-button";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import { archiveItems } from "@/data/projects";

export default function VisualArchivePage() {
  return (
    <PageTransition>
      <main>
        <section className="shell py-16 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="section-kicker mb-4 text-xs">Developer Art Gallery</p>
            <h1 className="font-display text-4xl uppercase tracking-[0.08em] text-white md:text-6xl">Visual Archive</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              A unified gallery of combat captures, vehicle work, and environment studies across the portfolio. Use the filters to switch between disciplines and open any frame in the lightbox for a cleaner review.
            </p>
            <div className="mt-8">
              <GlowButton href="/" variant="ghost">
                Back to Portfolio
              </GlowButton>
            </div>
          </Reveal>
        </section>

        <SectionWrapper eyebrow="Archive Feed" title="All Screenshots">
          <ArchiveGallery items={archiveItems} />
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

