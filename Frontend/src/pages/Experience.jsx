import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const timeline = [
  {
    year: "2024",
    period: "ACADEMIC FOUNDATION",
    title: "Started BCA",
    organization: "Shoolini University",
    icon: GraduationCap,
    description:
      "Started my Bachelor of Computer Applications journey while building a stronger foundation in programming, software development and computer science.",
    points: [
      "Started formal computer applications education",
      "Built programming fundamentals",
      "Started exploring web development",
    ],
  },
  {
    year: "2024",
    period: "PROFESSIONAL WORK",
    title: "Entered Professional Work",
    organization: "Center Management",
    icon: BriefcaseBusiness,
    description:
      "Started working in a professional environment, gaining practical experience in operations, customer communication, sales, team coordination and day-to-day business workflows.",
    points: [
      "Customer-facing communication",
      "Sales and operational responsibility",
      "Team and daily workflow coordination",
    ],
  },
  {
    year: "2025",
    period: "DEVELOPMENT JOURNEY",
    title: "Full-Stack Development",
    organization: "Self-Directed Engineering",
    icon: Code2,
    description:
      "Moved deeper into software development, building practical applications with React, Node.js, Express and MongoDB while learning how frontend and backend systems connect.",
    points: [
      "Built REST APIs and CRUD systems",
      "Implemented authentication workflows",
      "Worked with MongoDB and Mongoose",
      "Deployed real applications",
    ],
  },
  {
    year: "NOW",
    period: "CURRENT FOCUS",
    title: "Engineering With Purpose",
    organization: "Building Real Systems",
    icon: Sparkles,
    description:
      "Currently focused on becoming a stronger full-stack engineer by building larger, workflow-driven applications and improving architecture, authentication, API design and production practices.",
    points: [
      "HR Portal — in development",
      "Sales CRM — in development",
      "Advanced backend engineering",
      "Production-focused application design",
    ],
  },
];

const professionalStrengths = [
  {
    number: "01",
    title: "Business Perspective",
    description:
      "Professional work has helped me understand that software exists to solve real business and customer problems — not just technical ones.",
  },
  {
    number: "02",
    title: "Technical Growth",
    description:
      "I continuously move from smaller CRUD applications toward authentication, APIs, databases, workflow systems and production-oriented architecture.",
  },
  {
    number: "03",
    title: "Learning Through Building",
    description:
      "Most of my development learning happens by building complete applications, debugging real problems and improving the implementation through iteration.",
  },
  {
    number: "04",
    title: "Ownership",
    description:
      "I enjoy taking a feature from the initial idea through implementation, testing, debugging and deployment rather than focusing on only one layer.",
  },
];

export default function Experience() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="05"
          label="EXPERIENCE"
          title="The journey"
          highlight="behind the code."
          description="A combination of formal education, professional work and hands-on software development that continues to shape how I approach building products."
        />

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                THE PATH
              </span>

              <div className="mt-7 h-px w-20 bg-[#c9a15a]/40" />
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
                Learning software
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  through real work.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-[13px] leading-8 text-[#77726b]">
                My development journey has not been limited to tutorials or
                isolated coding exercises. Alongside my BCA studies, I have
                worked in a professional environment and used that experience
                to understand how technology, customers, operations and
                business workflows connect.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            TIMELINE
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              01 — TIMELINE
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              From foundation
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                to application.
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[21px] top-5 hidden h-[calc(100%-40px)] w-px bg-white/[0.08] md:block" />

            <div className="space-y-5">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="group relative border border-white/[0.08] bg-[#090908] p-7 transition duration-300 hover:border-[#c9a15a]/25 md:p-9 lg:p-10"
                  >
                    <div className="grid gap-8 md:grid-cols-[110px_1fr] lg:grid-cols-[150px_1fr]">
                      {/* Year */}
                      <div>
                        <span className="font-serif text-3xl italic text-[#c9a15a] md:text-4xl">
                          {item.year}
                        </span>

                        <span className="mt-3 block font-mono text-[7px] tracking-[0.13em] text-[#4f4b46]">
                          {item.period}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <div className="flex items-center gap-3">
                              <Icon
                                size={17}
                                strokeWidth={1.3}
                                className="text-[#c9a15a]"
                              />

                              <span className="font-mono text-[8px] tracking-[0.12em] text-[#514d47]">
                                {item.organization}
                              </span>
                            </div>

                            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#ddd8d0] md:text-4xl">
                              {item.title}
                            </h3>
                          </div>

                          <ArrowUpRight
                            size={17}
                            className="mt-1 shrink-0 text-[#403c37] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                          />
                        </div>

                        <p className="mt-6 max-w-3xl text-[12px] leading-7 text-[#6e6962]">
                          {item.description}
                        </p>

                        <div className="mt-7 grid gap-2 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
                          {item.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#c9a15a]" />

                              <span className="font-mono text-[8px] leading-5 text-[#66615b]">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFESSIONAL EXPERIENCE
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — PROFESSIONAL EXPERIENCE
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Experience
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  beyond code.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[12px] leading-7 text-[#68635d]">
                Working professionally has given me a practical understanding
                of communication, responsibility, customers, sales and
                operations — perspectives that influence how I think about
                software products.
              </p>
            </div>

            <div className="border border-white/[0.08] bg-[#090908] p-7 md:p-10">
              <div className="flex items-start justify-between gap-5 border-b border-white/[0.08] pb-7">
                <div>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-[#c9a15a]">
                    PROFESSIONAL ROLE
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#ddd8d0]">
                    Operations Management
                  </h3>

                  <p className="mt-2 font-mono text-[8px] tracking-[0.1em] text-[#514d47]">
                    Technical · OPERATIONS · CUSTOMER EXPERIENCE
                  </p>
                </div>

                <BriefcaseBusiness
                  size={20}
                  strokeWidth={1.2}
                  className="text-[#c9a15a]"
                />
              </div>

              <p className="mt-7 text-[12px] leading-7 text-[#6b665f]">
                My professional role involves managing day-to-day operations,
                coordinating workflows, working with customers and supporting
                business goals. This experience has helped me develop
                communication, ownership, problem-solving and operational
                thinking alongside my technical development.
              </p>

              <div className="mt-8 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {[
                  ["01", "OPERATIONS"],
                  ["02", "CUSTOMERS"],
                  ["03", "OWNERSHIP"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="bg-[#090908] px-5 py-5"
                  >
                    <span className="font-mono text-[8px] text-[#c9a15a]">
                      {number}
                    </span>

                    <span className="mt-3 block font-mono text-[7px] tracking-[0.12em] text-[#514d47]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STRENGTHS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — WHAT I BRING
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              Technical growth with
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                practical perspective.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2">
            {professionalStrengths.map((strength) => (
              <div
                key={strength.number}
                className="group border-b border-r border-white/[0.08] p-7 transition duration-300 hover:bg-white/[0.015] md:p-10"
              >
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  {strength.number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                  {strength.title}
                </h3>

                <p className="mt-4 max-w-md text-[12px] leading-7 text-[#68635d]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                  EDUCATION
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                  Bachelor of
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    Computer Applications.
                  </span>
                </h2>

                <p className="mt-7 font-mono text-[9px] tracking-[0.12em] text-[#625d56]">
                  SHOOLINI UNIVERSITY · 2024 — 2027
                </p>
              </div>

              <div className="lg:text-right">
                <GraduationCap
                  size={28}
                  strokeWidth={1}
                  className="text-[#c9a15a] lg:ml-auto"
                />

                <p className="mt-5 text-[11px] leading-6 text-[#625e58]">
                  Formal education combined with continuous practical
                  development and project-based learning.
                </p>
              </div>
            </div>
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
            Explore what
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              I'm building.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[12px] leading-7 text-[#68635d]">
            See the products and systems where my technical learning is being
            turned into practical software.
          </p>

          <Link
            to="/projects"
            className="group mt-10 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            View Projects

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
