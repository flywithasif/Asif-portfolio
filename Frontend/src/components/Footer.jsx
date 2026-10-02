import { GitBranch, Mail, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-24">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="section-label">AVAILABLE FOR OPPORTUNITIES</p>

            <h2 className="mt-6 max-w-3xl font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Let's build something
              <br />
              <span className="font-serif font-medium text-[#c9a15a]">
                worth remembering.
              </span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#c9a15a]/50 text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            <MoveUpRight size={26} />
          </Link>
        </div>

        <div className="my-16 h-px bg-white/[0.08]" />

        <div className="flex flex-col gap-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#57534d] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Asif</span>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#c9a15a]"
            >
              <GitBranch size={17} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#c9a15a]"
            >
              <MoveUpRight size={17} />
            </a>

            <a
              href="mailto:hello@example.com"
              className="transition hover:text-[#c9a15a]"
            >
              <Mail size={17} />
            </a>
          </div>

          <span>Designed & built with intention.</span>
        </div>
      </div>
    </footer>
  );
}