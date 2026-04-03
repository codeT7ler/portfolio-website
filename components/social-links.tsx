import { Mail} from "lucide-react";
import { FiGithub ,FiInstagram } from "react-icons/fi";
import { BsBehance } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { contactLinks } from "@/data/projects";
import { cn } from "@/lib/utils";

const iconMap = {
  Instagram: FiInstagram,
  Behance: BsBehance,
  LinkedIn: FaLinkedin,
  GitHub: FiGithub,
  Email: Mail
} as const;

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {contactLinks.map((link) => {
        const Icon = iconMap[link.label];

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"             
            rel="noopener noreferrer"    
            data-cursor="interactive"
            className="group glass-panel hover-panel flex items-center justify-between rounded-[22px] border border-white/8 px-5 py-4 transition duration-[var(--duration-fast)]"
          >
            <span className="flex items-center gap-3 text-lg text-slate-200">
              <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 p-2 text-cyan-200 transition duration-[var(--duration-fast)] group-hover:border-cyan-300/38 group-hover:bg-cyan-300/14">
                <Icon className="size-4" />
              </span>
              {link.label === "Email" ? "yashmenat27@gmail.com" : link.label}
            </span>
            <span className="font-display text-xs uppercase tracking-[0.24em] text-slate-400 transition duration-[var(--duration-fast)] group-hover:text-cyan-100">
              Open
            </span>
          </a>
        );
      })}
    </div>
  );
}
