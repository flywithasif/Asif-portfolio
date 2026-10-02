import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const principles = [
  {
    number: "01",
    title: "CURIOUS BY DEFAULT",
    description:
      "I like understanding what happens underneath the interface — APIs, data, authentication, architecture and the decisions connecting everything together.",
  },
  {
    number: "02",
    title: "BUILD FOR REAL USE",
    description:
      "A feature is not finished because it works once. I care about clarity, validation, predictable behaviour and the experience around the feature.",
  },
  {
    number: "03",
    title: "ALWAYS REFINING",
    description:
      "Every project gives me another opportunity to improve how I structure code, solve problems and communicate technical decisions.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started BCA",
    description:
      "Began formal computer science education while simultaneously developing practical skills through hands-on projects.",
  },
  {
    year: "2024",
    title: "Entered Professional Work",
    description:
      "Started working in an operational, customer-facing environment — gaining practical exposure to people, processes and business problems.",
  },
  {
    year: "2025",
    title: "Full-Stack Development",
    description:
      "Moved deeper into modern web development, building applications with React, Node.js, Express and MongoDB.",
  },
  {
    year: "NOW",
    title: "Engineering With Purpose",
    description:
      "Focused on becoming a stronger full-stack engineer by building increasingly complete products and understanding the systems behind them.",
  },
];

export default function About() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <PageHeader
          number="01"
          label="ABOUT"
          title="More than"
          highlight="a developer."
          description="I build software with a product mindset — thinking beyond the interface to understand the systems, users and decisions that make a product useful."
        />

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                THE PERSON BEHIND THE CODE
              </span>

              <div className="mt-10 hidden aspect-[4/5] max-w-[330px] border border-white/[0.08] bg-[#0b0b0a] lg:block">
                <div className="relative flex h-full flex-col justify-between p-7">
                  <div className="flex justify-between">
                    <span className="font-mono text-[8px] tracking-[0.15em] text-[#56514b]">
                      ASIF
                    </span>

                    <span className="font-mono text-[8px] text-[#c9a15a]">
                      01
                    </span>
                  </div>

                  <div>
                    <div className="mb-6 h-px w-14 bg-[#c9a15a]" />

                    <p className="font-serif text-4xl italic leading-none text-[#dcd7cf]">
                      Build with
                      <br />
                      intention.
                    </p>

                    <p className="mt-6 max-w-[220px] font-mono text-[8px] leading-5 tracking-[0.08em] text-[#5b5751]">
                      PRODUCT · ENGINEERING · CONTINUOUS LEARNING
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <span className="font-mono text-[7px] tracking-[0.15em] text-[#4e4a45]">
                      FULL-STACK
                    </span>

                    <span className="font-serif text-5xl italic text-[#c9a15a]/20">
                      A
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
                I'm interested in what happens
                <span className="font-serif font-medium italic text-[#c9a15a]">
                  {" "}
                  behind the screen.
                </span>
              </h2>

              <div className="mt-10 space-y-6 text-[14px] leading-8 text-[#77736d]">
                <p>
                  A polished interface is only the visible part of a product.
                  What interests me is everything underneath it — how data
                  moves, how APIs communicate, how authentication protects
                  users, how the database is structured and how individual
                  pieces come together into one reliable system.
                </p>

                <p>
                  My development journey has therefore been intentionally
                  broader than learning a collection of frameworks. I want to
                  understand the reasoning behind the technology and become
                  better at turning an idea into something people can actually
                  use.
                </p>

                <p>
                  I work primarily with React, Node.js, Express and MongoDB,
                  while continuously improving my understanding of
                  authentication, API design, application architecture and
                  production-oriented development.
                </p>
              </div>

              <Link
                to="/engineering"
                className="group mt-10 inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a]"
              >
                Explore My Engineering Approach

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIFFERENTIATOR
        ====================================================== */}
        <section className="border-y border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — DIFFERENT PERSPECTIVE
              </p>
            </div>

            <div>
              <blockquote className="max-w-5xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] text-[#dcd7cf] md:text-6xl">
                “Technology taught me how to build.
                <br />
                <span className="italic text-[#c9a15a]">
                  Real-world work taught me why it needs to work.
                </span>
                ”
              </blockquote>

              <p className="mt-10 max-w-2xl text-[13px] leading-7 text-[#6f6b65]">
                Working in a customer-facing operational environment has given
                me exposure to something code alone cannot teach: real people,
                real expectations and real constraints. That perspective
                influences how I think about software today.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}
        <section className="py-24 lg:py-32">
          <div className="mb-14">
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — PRINCIPLES
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
              How I think about
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                building software.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/[0.08] md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-white/[0.08] py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-sm font-semibold tracking-[0.03em] text-[#ddd8d0]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-[13px] leading-7 text-[#6e6a64]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* =====================================================
            JOURNEY
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                04 — THE JOURNEY
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Still learning.
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  Still building.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-[13px] leading-7 text-[#6e6a64]">
                My career is still being written. Each project, role and
                technical challenge is another opportunity to become a better
                engineer.
              </p>
            </div>

            <div className="border-t border-white/[0.08]">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[90px_1fr] md:gap-8"
                >
                  <span className="font-mono text-[9px] tracking-[0.12em] text-[#c9a15a]">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#dcd7cf]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-[13px] leading-7 text-[#6e6a64]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION / WORK
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-px bg-white/[0.08] md:grid-cols-2">
            <div className="bg-[#080807] p-8 md:p-12">
              <GraduationCap
                size={22}
                strokeWidth={1.2}
                className="text-[#c9a15a]"
              />

              <span className="mt-8 block font-mono text-[8px] tracking-[0.16em] text-[#55514b]">
                EDUCATION
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                Bachelor of Computer Applications
              </h3>

              <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-[#68635d]">
                SHOOLINI UNIVERSITY · 2024 — 2027
              </p>

              <p className="mt-6 max-w-md text-[13px] leading-7 text-[#6e6a64]">
                Building a formal foundation in computer applications while
                developing practical full-stack engineering skills through
                independent projects.
              </p>
            </div>

            <div className="bg-[#0b0a09] p-8 md:p-12">
              <BriefcaseBusiness
                size={22}
                strokeWidth={1.2}
                className="text-[#c9a15a]"
              />

              <span className="mt-8 block font-mono text-[8px] tracking-[0.16em] text-[#55514b]">
                PROFESSIONAL EXPERIENCE
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                Operations Management
              </h3>

              <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-[#68635d]">
                OPERATIONS · CUSTOMER EXPERIENCE · MANAGEMENT
              </p>

              <p className="mt-6 max-w-md text-[13px] leading-7 text-[#6e6a64]">
                Managing day-to-day operations and customer experience has
                strengthened my communication, ownership and problem-solving
                skills — qualities I now bring into engineering work.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-24 text-center lg:py-36">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            05 — NEXT
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            The best way to know
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              how I build is to see it.
            </span>
          </h2>

          <Link
            to="/projects"
            className="group mt-10 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            Explore My Work

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