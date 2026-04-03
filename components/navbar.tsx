"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Visual Archive", href: "/visual-archive" },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-blur sticky top-0 z-40 border-b border-white/8">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" data-cursor="interactive" className="flex items-center gap-3">
          <span className="size-3 rounded-full bg-[linear-gradient(135deg,#72f0ff,#8b5cf6)] shadow-[0_0_18px_rgba(114,240,255,0.65)]" />
          <span className="font-display text-sm uppercase tracking-[0.26em] text-slate-100">Yash Menat</span>
        </Link>

        <button
          type="button"
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav
          className={cn(
            "absolute left-3 right-3 top-[calc(100%+0.75rem)] rounded-[28px] border border-white/10 bg-slate-950/92 p-4 shadow-2xl md:static md:flex md:w-auto md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            open ? "block" : "hidden md:flex"
          )}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="interactive"
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-3 font-display text-sm uppercase tracking-[0.22em] text-slate-300 transition hover:text-white md:py-0",
                  active && "text-cyan-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
