import { ArrowUpRight, GitBranch, Globe } from "lucide-react";

export default function ProjectCard({
  number,
  category,
  title,
  description,
  stack,
  featured = false,
}) {
  return (
    <article
      className={[
        "group relative border-b border-white/[0.08] py-10 transition duration-500",
        featured ? "bg-white/[0.015]" : "",
      ].join(" ")}
    >
      <div className="grid gap-8 lg:grid-cols-[70px_1fr_140px] lg:items-center">
        <span className="font-mono text-[10px] text-[#c9a15a]">
          {number}
        </span>

        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#68645e]">
            {category}
          </span>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#77736d]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="border border-white/[0.09] px-2.5 py-1.5 font-mono text-[8px] text-[#77736d]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:justify-end">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#77736d] transition hover:border-[#c9a15a]/50 hover:text-[#c9a15a]"
            aria-label={`${title} live demo`}
          >
            <Globe size={16} />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#77736d] transition hover:border-[#c9a15a]/50 hover:text-[#c9a15a]"
            aria-label={`${title} GitHub`}
          >
            <GitBranch size={16} />
          </a>

          <span className="ml-2 hidden h-11 w-11 items-center justify-center border border-[#c9a15a]/40 text-[#c9a15a] transition duration-300 group-hover:bg-[#c9a15a] group-hover:text-black sm:flex">
            <ArrowUpRight size={19} />
          </span>
        </div>
      </div>
    </article>
  );
}