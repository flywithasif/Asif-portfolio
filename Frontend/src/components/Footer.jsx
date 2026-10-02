import { GitBranch, Mail, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-black py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* CTA */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="max-w-4xl">
            <p className="section-label">AVAILABLE FOR OPPORTUNITIES</p>

            <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#f5f1e8] sm:text-6xl md:text-7xl lg:text-[82px]">
              Let's build something
              <br />
              <span className="font-serif font-medium italic text-[#c9a15a]">
                worth remembering.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#8a857d] md:text-base">
              Have an idea, project, or opportunity in mind? Let's turn it
              into something thoughtful, functional, and built to last.
            </p>
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            aria-label="Go to contact page"
            className="group flex h-16 w-16 shrink-0 items-center justify-center border border-[#c9a15a]/50 text-[#c9a15a] transition-all duration-300 hover:border-[#c9a15a] hover:bg-[#c9a15a] hover:text-black"
          >
            <MoveUpRight
              size={25}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/[0.08] md:my-16" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-7 text-[9px] font-mono uppercase tracking-[0.14em] text-[#57534d] md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <span className="order-3 md:order-1">
            © {currentYear} Asif. All rights reserved.
          </span>

          {/* Social Links */}
          <div className="order-1 flex items-center gap-3 md:order-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#77716a] transition-all duration-300 hover:border-[#c9a15a]/50 hover:bg-[#c9a15a]/5 hover:text-[#c9a15a]"
            >
              <GitBranch size={16} strokeWidth={1.6} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#77716a] transition-all duration-300 hover:border-[#c9a15a]/50 hover:bg-[#c9a15a]/5 hover:text-[#c9a15a]"
            >
              <MoveUpRight size={16} strokeWidth={1.6} />
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#77716a] transition-all duration-300 hover:border-[#c9a15a]/50 hover:bg-[#c9a15a]/5 hover:text-[#c9a15a]"
            >
              <Mail size={16} strokeWidth={1.6} />
            </a>
          </div>

          {/* Signature */}
          <span className="order-2 text-[#57534d] md:order-3">
            Designed & built with intention.
          </span>
        </div>
      </div>
    </footer>
  );
}