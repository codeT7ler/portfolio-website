import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionWrapper({ id, eyebrow, title, description, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("shell relative py-20 md:py-28", className)}>
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker mb-4 text-xs">{eyebrow}</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-white md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-lg text-slate-300">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

