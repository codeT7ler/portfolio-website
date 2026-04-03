"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,rgba(81,168,255,0.9),rgba(139,92,246,0.82))] text-white shadow-[0_0_0_1px_rgba(129,196,255,0.16),0_16px_44px_rgba(43,97,255,0.32)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(129,196,255,0.3),0_24px_54px_rgba(43,97,255,0.4)]",
        ghost:
          "border border-white/12 bg-white/5 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-cyan-300/40 hover:bg-white/8 hover:text-white",
        outline:
          "border border-cyan-300/20 bg-transparent text-cyan-100 hover:border-cyan-300/45 hover:bg-cyan-300/8"
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-7",
        sm: "h-9 px-4 text-xs"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
