import {
  ArrowUpRight,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Layers3,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const repositoryGroups = [
  {
    number: "01",
    title: "Full-Stack Applications",
    description:
      "Repositories where frontend interfaces, backend APIs, authentication and databases come together as complete applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "Backend Systems",
    description:
      "API-focused projects built around CRUD operations, authentication, validation, middleware, database operations and structured server architecture.",
    technologies: ["Node.js", "Express", "JWT", "Mongoose"],
  },
  {
    number: "03",
    title: "Frontend Products",
    description:
      "React-based interfaces focused on reusable components, responsive layouts, routing, forms and product-oriented user experiences.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    number: "04",
    title: "Experiments & Learning",
    description:
      "Smaller projects and experiments used to understand new concepts, test implementations and improve development skills.",
    technologies: ["JavaScript", "APIs", "Git", "Postman"],
  },
];

const workflow = [
  {
    icon: Terminal,
    title: "Build",
    description:
      "Turn an idea or requirement into a working implementation.",
  },
  {
    icon: GitCommit,
    title: "Commit",
    description:
      "Keep changes structured and track the evolution of the project.",
  },
  {
    icon: GitPullRequest,
    title: "Refine",
    description:
      "Review, debug and improve the implementation through iteration.",
  },
  {
    icon: GitBranch,
    title: "Ship",
    description:
      "Move the application from local development toward deployment.",
  },
];

const githubPrinciples = [
  {
    number: "01",
    title: "Visible Progress",
    text: "Git history provides a practical record of how projects evolve rather than presenting only the final interface.",
  },
  {
    number: "02",
    title: "Small Iterations",
    text: "Features are easier to debug and improve when development happens through manageable changes.",
  },
  {
    number: "03",
    title: "Real Projects",
    text: "My repositories are primarily built around applications and systems rather than isolated code snippets.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    text: "New repositories and experiments are part of the process of expanding my technical range.",
  },
];

export default function GitHub() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="06"
          label="GITHUB"
          title="Code is where"
          highlight="the work lives."
          description="A look at how I use Git and GitHub to build, track, refine and ship software projects."
        />

        {/* =====================================================
            PROFILE HERO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="relative overflow-hidden border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full border border-[#c9a15a]/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#c9a15a]/25 text-[#c9a15a]">
                    <GitBranch size={19} strokeWidth={1.3} />
                  </div>

                  <span className="font-mono text-[8px] tracking-[0.18em] text-[#5a554f]">
                    VERSION CONTROL · DEVELOPMENT
                  </span>
                </div>

                <h2 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
                  Building in
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    public repositories.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-[13px] leading-7 text-[#706b64]">
                  GitHub is part of my development workflow — from creating
                  repositories and committing features to maintaining project
                  structure and preparing applications for deployment.
                </p>
              </div>

              <div className="lg:text-right">
                <span className="font-mono text-[8px] tracking-[0.15em] text-[#514d47]">
                  DEVELOPER PROFILE
                </span>

                <p className="mt-4 font-serif text-3xl italic text-[#b3ada4]">
                  Asif
                </p>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 border border-[#c9a15a]/35 px-5 py-3 font-mono text-[8px] font-bold uppercase tracking-[0.13em] text-[#c9a15a] transition hover:bg-[#c9a15a] hover:text-black"
                >
                  Visit GitHub

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFILE NOTE
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-12">
          <div className="flex gap-5 border-l border-[#c9a15a]/30 pl-5">
            <div>
              <span className="font-mono text-[8px] tracking-[0.15em] text-[#c9a15a]">
                PROFILE NOTE
              </span>

              <p className="mt-3 max-w-3xl text-[11px] leading-6 text-[#625e58]">
                Repository counts, contribution graphs and activity metrics
                change over time. This portfolio intentionally focuses on the
                engineering work and workflow rather than displaying static
                numbers that can quickly become outdated.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            REPOSITORY GROUPS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              01 — REPOSITORY TYPES
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              Different repositories.
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                One engineering journey.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2">
            {repositoryGroups.map((group) => (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5 }}
                className="group border-b border-r border-white/[0.08] p-7 transition duration-300 hover:bg-white/[0.015] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] text-[#c9a15a]">
                    {group.number}
                  </span>

                  <Layers3
                    size={16}
                    strokeWidth={1.2}
                    className="text-[#403c37] transition group-hover:text-[#c9a15a]"
                  />
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-md text-[12px] leading-7 text-[#68635d]">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/[0.08] px-2.5 py-1.5 font-mono text-[7px] text-[#5d5953]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — DEVELOPMENT WORKFLOW
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                From first
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  commit to deployment.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[12px] leading-7 text-[#68635d]">
                GitHub is not just where I store code. It is part of the
                workflow I use to manage development and keep track of
                changes.
              </p>
            </div>

            <div className="border-t border-white/[0.08]">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group grid gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[45px_0.45fr_1fr] md:items-center"
                  >
                    <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] text-[#c9a15a]">
                      <Icon size={15} strokeWidth={1.3} />
                    </div>

                    <div>
                      <span className="font-mono text-[7px] text-[#45413c]">
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-lg font-semibold text-[#d7d2ca]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[11px] leading-6 text-[#66615b]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            GITHUB PRINCIPLES
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — HOW I USE GIT
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              Version control as
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                part of engineering.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2">
            {githubPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="group border-b border-r border-white/[0.08] p-7 transition duration-300 hover:bg-white/[0.015] md:p-10"
              >
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  {principle.number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-md text-[12px] leading-7 text-[#68635d]">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            TECHNICAL STACK
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Version Control",
                icon: GitBranch,
                items: [
                  "Git",
                  "GitHub",
                  "Branches",
                  "Commits",
                  "Push / Pull",
                ],
              },
              {
                title: "Development",
                icon: Terminal,
                items: [
                  "VS Code",
                  "Node.js",
                  "React",
                  "Postman",
                  "npm",
                ],
              },
              {
                title: "Delivery",
                icon: GitPullRequest,
                items: [
                  "Vercel",
                  "Netlify",
                  "Environment Config",
                  "Deployment",
                  "DNS",
                ],
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-white/[0.08] p-7 md:p-8"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.2}
                    className="text-[#c9a15a]"
                  />

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-[#dcd7cf]">
                    {item.title}
                  </h3>

                  <div className="mt-6 space-y-3">
                    {item.items.map((technology) => (
                      <div
                        key={technology}
                        className="flex items-center gap-3"
                      >
                        <span className="h-px w-3 bg-[#c9a15a]/40" />

                        <span className="font-mono text-[8px] text-[#625d56]">
                          {technology}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-28 text-center lg:py-40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            04 — NEXT
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            The code is only
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              part of the story.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[12px] leading-7 text-[#68635d]">
            Explore the resume for a concise view of my skills, projects,
            education and professional journey.
          </p>

          <Link
            to="/resume"
            className="group mt-10 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            View Resume

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </section>
      </div>
    </main>
  );
}
