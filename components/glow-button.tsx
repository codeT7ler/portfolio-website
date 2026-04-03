import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "ghost" | "outline";
  className?: string;
  arrow?: boolean;
};

export function GlowButton({ href, children, variant = "default", className, arrow = false }: GlowButtonProps) {
  return (
    <Button asChild variant={variant} size="lg" className={cn("group", className)}>
      <Link href={href} data-cursor="interactive">
        {children}
        {arrow ? <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /> : null}
      </Link>
    </Button>
  );
}
