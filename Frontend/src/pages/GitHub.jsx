import { ArrowUpRight, GitBranch, Star } from "lucide-react";

import PageHeader from "../components/PageHeader";

const repositories = [
  {
    title: "Resume Builder SaaS",
    description:
      "Full-stack resume builder with React and Node.js.",
    stack: "React · Node · MongoDB",
  },
  {
    title: "WebQenzo CRM",
    description:
      "Lead, contact, quote and team management platform.",
    stack: "React · Express · MongoDB",
  },
  {
    title: "Job Portal",
    description:
      "Job discovery and application workflow.",
    stack: "React · REST API · JWT",
  },
  {
    title: "Backend API",
    description:
      "Production-style REST API patterns and authentication.",
    stack: "Node · Express · MongoDB",
  },
];

export default function GitHubPage() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <PageHeader
          number="06"
          label="OPEN SOURCE / CODE"
          title="The code behind"
          highlight="the portfolio."
          description="Selected repositories and engineering work. Replace the placeholders with your actual GitHub repositories before publishing."
        />

        <div className="flex flex-col gap-5 border border-white/[0.08] p-6 md:flex-row md:items-center md:p-7">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#c9a15a]/40 text-[#c9a15a]">
            <GitBranch size={30} />
          </div>

          <div className="flex-1">
            <p className="section-label">GITHUB PROFILE</p>

            <h2 className="mt-2 text-lg font-semibold">
              github.com/yourusername
            </h2>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 bg-[#c9a15a] px-5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black"
          >
            Visit GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-px grid border-x border-b border-white/[0.08] md:grid-cols-3">
          {[
            [GitBranch, "Repositories", "Growing"],
            [Star, "Projects", "Selected work"],
            [GitBranch, "Code", "Public work"],
          ].map(([Icon, title, value]) => (
            <div
              key={title}
              className="flex gap-4 border-b border-white/[0.08] p-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <Icon size={18} className="text-[#c9a15a]" />

              <div>
                <strong className="block text-xs">{title}</strong>

                <span className="mt-1 block font-mono text-[8px] text-[#68645e]">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid border border-white/[0.08] md:grid-cols-2">
          {repositories.map((repo) => (
            <a
              key={repo.title}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group min-h-[220px] border-b border-white/[0.08] p-7 transition hover:bg-white/[0.015] md:[&:nth-child(odd)]:border-r"
            >
              <div className="flex justify-between text-[#68645e]">
                <GitBranch size={18} />
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:text-[#c9a15a]"
                />
              </div>

              <h3 className="mt-14 text-xl font-semibold">
                {repo.title}
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#77736d]">
                {repo.description}
              </p>

              <span className="mt-5 block font-mono text-[8px] text-[#c9a15a]">
                {repo.stack}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
