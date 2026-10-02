import { ArrowDown, ArrowUpRight, Code2, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const technologies = [
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "MONGODB",
  "MONGOOSE",
  "JAVASCRIPT",
  "REST API",
  "JWT",
  "GIT",
];

const principles = [
  {
    number: "01",
    title: "PRODUCT THINKING",
    description:
      "I start with the problem, the user and the outcome — not with a framework.",
  },
  {
    number: "02",
    title: "SYSTEM DESIGN",
    description:
      "Interfaces are only one layer. I care about APIs, data flow, authentication and maintainable architecture.",
  },
  {
    number: "03",
    title: "ENGINEERING DETAIL",
    description:
      "Small decisions matter — validation, error handling, reusable components and predictable behaviour.",
  },
];

const capabilities = [
  {
    icon: Code2,
    label: "FRONTEND",
    title: "Interfaces with intention.",
    description:
      "Responsive React interfaces designed around clarity, hierarchy and a polished user experience.",
  },
  {
    icon: Server,
    label: "BACKEND",
    title: "Logic behind the interface.",
    description:
      "REST APIs, authentication, middleware and application logic built to keep products structured and maintainable.",
  },
  {
    icon: Database,
    label: "DATA",
    title: "Systems that remember.",
    description:
      "MongoDB and Mongoose models designed around clean data relationships, validation and predictable queries.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center border-b border-white/[0.08]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15%] top-[8%] h-[520px] w-[520px] rounded-full border border-[#c9a15a]/10" />

          <div className="absolute right-[-8%] top-[15%] h-[380px] w-[380px] rounded-full border border-[#c9a15a]/10" />

          <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full border border-white/[0.035]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px] opacity-30" />
        </div>

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9a15a]" />

                <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-[#c9a15a]">
                  FULL-STACK DEVELOPER
                </span>
              </div>

              <h1 className="max-w-5xl font-sans text-[clamp(3.7rem,8vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#f4f1eb]">
                I build
                <br />
                <span className="font-serif font-medium italic text-[#c9a15a]">
                  digital products.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-[15px] leading-8 text-[#858079] md:text-[17px]">
                I turn ideas into thoughtfully engineered web experiences —
                combining polished interfaces, reliable backend systems and
                practical product thinking.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex h-12 items-center gap-3 bg-[#c9a15a] px-6 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-black transition duration-300 hover:bg-[#e0bd72]"
                >
                  Explore Selected Work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center border border-white/[0.12] px-6 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#b5b0a8] transition duration-300 hover:border-[#c9a15a]/50 hover:text-[#c9a15a]"
                >
                  Start a Conversation
                </Link>
              </div>

              <div className="mt-14 flex items-center gap-5">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 border border-[#c9a15a]/30 bg-[#11100e]" />
                  <span className="h-8 w-8 border border-[#c9a15a]/20 bg-[#171511]" />
                  <span className="h-8 w-8 border border-[#c9a15a]/10 bg-[#1d1a15]" />
                </div>

                <p className="max-w-xs font-mono text-[8px] leading-5 tracking-[0.08em] text-[#5f5b55]">
                  BUILDING WITH REACT · NODE.JS · EXPRESS · MONGODB
                </p>
              </div>
            </motion.div>

            {/* Engineering visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto aspect-square max-w-[470px]">
                <div className="absolute inset-[8%] rounded-full border border-[#c9a15a]/20" />

                <div className="absolute inset-[18%] rounded-full border border-white/[0.08]" />

                <div className="absolute inset-[30%] rounded-full border border-[#c9a15a]/10" />

                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 border border-[#c9a15a]/40 bg-[#0a0908] shadow-[0_0_80px_rgba(201,161,90,0.08)]">
                  <div className="flex h-full flex-col items-center justify-center">
                    <span className="font-serif text-3xl italic text-[#c9a15a]">
                      A
                    </span>

                    <span className="mt-1 font-mono text-[7px] tracking-[0.2em] text-[#66615a]">
                      ENGINEER
                    </span>
                  </div>
                </div>

                <div className="absolute left-[7%] top-[27%] border border-white/[0.08] bg-[#0b0b0a] px-4 py-3">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-[#77736d]">
                    FRONTEND
                  </span>

                  <p className="mt-1 text-xs text-[#d8d3ca]">React</p>
                </div>

                <div className="absolute right-[3%] top-[19%] border border-white/[0.08] bg-[#0b0b0a] px-4 py-3">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-[#77736d]">
                    BACKEND
                  </span>

                  <p className="mt-1 text-xs text-[#d8d3ca]">Node.js</p>
                </div>

                <div className="absolute bottom-[19%] left-[13%] border border-white/[0.08] bg-[#0b0b0a] px-4 py-3">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-[#77736d]">
                    DATA
                  </span>

                  <p className="mt-1 text-xs text-[#d8d3ca]">MongoDB</p>
                </div>

                <div className="absolute bottom-[11%] right-[12%] border border-[#c9a15a]/20 bg-[#0b0b0a] px-4 py-3">
                  <span className="font-mono text-[7px] tracking-[0.16em] text-[#c9a15a]">
                    APPROACH
                  </span>

                  <p className="mt-1 text-xs text-[#d8d3ca]">
                    Build · Refine · Ship
                  </p>
                </div>

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.035]" />

                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.035]" />
              </div>
            </motion.div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-white/[0.08] pt-6">
            <span className="font-mono text-[8px] tracking-[0.16em] text-[#4f4b46]">
              SCROLL TO EXPLORE
            </span>

            <ArrowDown
              size={15}
              className="animate-bounce text-[#c9a15a]"
            />

            <span className="font-mono text-[8px] tracking-[0.16em] text-[#4f4b46]">
              01 / 08
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY MARQUEE
      ========================================================== */}
      <section className="border-b border-white/[0.08] overflow-hidden">
        <div className="flex min-w-max animate-[marquee_25s_linear_infinite]">
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              key={`${technology}-${index}`}
              className="flex items-center gap-8 border-r border-white/[0.07] px-8 py-5"
            >
              <span className="h-1 w-1 rounded-full bg-[#c9a15a]" />

              <span className="font-mono text-[9px] tracking-[0.18em] text-[#66615a]">
                {technology}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="border-b border-white/[0.08] py-28 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                01 — THE APPROACH
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e9e5de] md:text-6xl">
                I don't just build screens.
                <br />
                <span className="font-serif font-medium italic text-[#c9a15a]">
                  I build the system behind them.
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-[14px] leading-8 text-[#77736d]">
                A great digital product is more than a polished interface.
                Behind every useful experience is a system that handles data,
                business logic, authentication, errors and the countless
                details users never see.
              </p>

              <Link
                to="/engineering"
                className="group mt-9 inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a]"
              >
                How I Engineer

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================== */}
      <section className="border-b border-white/[0.08] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — PRINCIPLES
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#e9e5de] md:text-5xl">
                How I approach the work.
              </h2>
            </div>

            <span className="hidden font-mono text-[8px] tracking-[0.14em] text-[#4f4b46] md:block">
              THINK · DESIGN · ENGINEER
            </span>
          </div>

          <div className="grid border-t border-white/[0.08] md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border-b border-white/[0.08] py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  {principle.number}
                </span>

                <h3 className="mt-7 text-sm font-semibold tracking-[0.03em] text-[#ded9d0]">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-xs text-[13px] leading-7 text-[#6f6b65]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="border-b border-white/[0.08] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mb-14">
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — CAPABILITIES
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#e9e5de] md:text-6xl">
              From interface
              <br />
              <span className="font-serif font-medium italic text-[#c9a15a]">
                to infrastructure.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/[0.08] md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group border-b border-white/[0.08] py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <Icon
                    size={21}
                    strokeWidth={1.2}
                    className="text-[#c9a15a]"
                  />

                  <span className="mt-8 block font-mono text-[8px] tracking-[0.16em] text-[#55514c]">
                    {item.label}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-[13px] leading-7 text-[#6f6b65]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED WORK
      ========================================================== */}
      <section className="border-b border-white/[0.08] py-24 lg:py-36">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                04 — SELECTED WORK
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e9e5de] md:text-6xl">
                Products I've
                <br />
                <span className="font-serif font-medium italic text-[#c9a15a]">
                  engineered.
                </span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#77736d] transition hover:text-[#c9a15a]"
            >
              View All Projects

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-white/[0.08] lg:grid-cols-2">
            <Link
              to="/projects"
              className="group relative min-h-[420px] bg-[#090908] p-8 transition duration-500 hover:bg-[#0d0c0a] md:p-12"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  01
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-[#57534d] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                />
              </div>

              <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12">
                <span className="font-mono text-[8px] tracking-[0.16em] text-[#5e5a54]">
                  SAAS · FULL-STACK
                </span>

                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e9e5de] md:text-5xl">
                  Resume
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    Builder.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-[12px] leading-6 text-[#6f6b65]">
                  A full-stack platform focused on making professional resume
                  creation structured, intuitive and fast.
                </p>
              </div>
            </Link>

            <Link
              to="/projects"
              className="group relative min-h-[420px] bg-[#0b0a09] p-8 transition duration-500 hover:bg-[#0f0e0c] md:p-12"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  02
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-[#57534d] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                />
              </div>

              <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12">
                <span className="font-mono text-[8px] tracking-[0.16em] text-[#5e5a54]">
                  CRM · BUSINESS SYSTEM
                </span>

                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e9e5de] md:text-5xl">
                  WebQenzo
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    CRM.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-[12px] leading-6 text-[#6f6b65]">
                  A business management system built around leads, contacts,
                  assignments, permissions and operational workflows.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative py-28 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,90,0.06),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1000px] px-5 text-center lg:px-8">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            05 — LET'S BUILD
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#e9e5de] md:text-7xl lg:text-8xl">
            Have an idea
            <br />
            <span className="font-serif font-medium italic text-[#c9a15a]">
              worth building?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[14px] leading-7 text-[#716d67]">
            Whether it is a product, a platform or an engineering problem,
            let's turn the idea into something useful, reliable and beautifully
            executed.
          </p>

          <Link
            to="/contact"
            className="group mt-10 inline-flex h-13 items-center gap-3 bg-[#c9a15a] px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e0bd72]"
          >
            Start a Conversation

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}