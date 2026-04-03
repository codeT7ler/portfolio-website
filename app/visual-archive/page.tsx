import { ArchiveGallery } from "@/components/archive-gallery";
import { GlowButton } from "@/components/glow-button";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { SectionWrapper } from "@/components/section-wrapper";
import type { ArchiveCategory } from "@/data/projects";

const visualArchivePngFiles = [
  "va02.png",
  "va03.png",
  "va04.png",
  "va06.png",
  "va07.png",
  "va010.png",
  "va011.png",
  "va012.png",
  "va013.png"
] as const;

const archiveItems = visualArchivePngFiles.map((file, index) => ({
  key: `visual-archive-${index}`,
  src: `/visual-archive/${file}`,
  alt: `Visual archive image ${index + 1}`,
  category: "Environment" as ArchiveCategory
}));

export default function VisualArchivePage() {
  return (
    <PageTransition>
      <main>
        <section className="shell py-16 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="section-kicker mb-4 text-xs">Developer Art Gallery</p>
            <h1 className="font-display text-4xl uppercase tracking-[0.08em] text-white md:text-6xl">Visual Archive</h1>
            
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

