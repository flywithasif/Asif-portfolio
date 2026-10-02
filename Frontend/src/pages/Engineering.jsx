import {
  ArrowDown,
  ArrowUpRight,
  Database,
  GitBranch,
  Globe,
  KeyRound,
  Layers3,
  LockKeyhole,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const architectureLayers = [
  {
    number: "01",
    title: "Client",
    subtitle: "Frontend Experience",
    icon: Globe,
    description:
      "Responsive React interfaces built around reusable components, clear routing, forms and user interactions.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
    ],
  },
  {
    number: "02",
    title: "API",
    subtitle: "Request Layer",
    icon: Workflow,
    description:
      "REST APIs connect the frontend with application logic through structured HTTP requests and responses.",
    technologies: [
      "REST",
      "HTTP",
      "JSON",
      "Postman",
      "Validation",
    ],
  },
  {
    number: "03",
    title: "Server",
    subtitle: "Application Logic",
    icon: Server,
    description:
      "Node.js and Express handle routes, middleware, controllers, authentication, validation and business logic.",
    technologies: [
      "Node.js",
      "Express.js",
      "Middleware",
      "Controllers",
      "Async/Await",
    ],
  },
  {
    number: "04",
    title: "Data",
    subtitle: "Persistence Layer",
    icon: Database,
    description:
      "MongoDB and Mongoose provide structured data models, validation, queries and persistent application storage.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Schemas",
      "Models",
      "Queries",
    ],
  },
];

const engineeringPrinciples = [
  {
    number: "01",
    title: "Structure Before Scale",
    description:
      "I prefer clear project structures and separated responsibilities so features remain understandable as the application grows.",
  },
  {
    number: "02",
    title: "API-First Thinking",
    description:
      "The frontend is treated as one consumer of the system. Business logic and data operations belong behind well-defined APIs.",
  },
  {
    number: "03",
    title: "Security by Default",
    description:
      "Authentication, password hashing, protected routes, environment variables, validation and authorization are treated as core application concerns.",
  },
  {
    number: "04",
    title: "Build · Test · Refine",
    description:
      "I build incrementally, test endpoints with Postman, debug real errors and refine the implementation instead of trying to build everything at once.",
  },
];

const backendCapabilities = [
  "REST API Design",
  "CRUD Operations",
  "MVC Architecture",
  "Middleware",
  "Request Validation",
  "Error Handling",
  "JWT Authentication",
  "Password Hashing",
  "Protected Routes",
  "Role-Based Access",
  "OTP Verification",
  "Rate Limiting",
  "MongoDB Queries",
  "Mongoose Models",
  "Pagination",
  "Filtering",
  "Sorting",
];

const securityItems = [
  {
    icon: LockKeyhole,
    title: "Authentication",
    text: "JWT-based login, protected routes and session-aware application flows.",
  },
  {
    icon: KeyRound,
    title: "Credentials",
    text: "Private credentials and API secrets are kept on the server through environment configuration.",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    text: "Incoming data is validated before reaching application logic or database operations.",
  },
];

export default function Engineering() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="04"
          label="ENGINEERING"
          title="Behind the"
          highlight="interface."
          description="The technical layer behind the products I build — from component architecture and REST APIs to authentication, databases, security and deployment."
        />

        {/* =====================================================
            ENGINEERING STATEMENT
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                HOW I THINK
              </span>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-12 bg-[#c9a15a]/40" />

                <span className="font-mono text-[8px] tracking-[0.15em] text-[#55514b]">
                  SYSTEM OVER SCREEN
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
                A product is more than
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  what users can see.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-[13px] leading-8 text-[#77726b]">
                I approach development as a connected system. The interface,
                API, business logic, authentication and database all need to
                work together reliably. My projects are built to understand
                that complete flow rather than treating the frontend as the
                entire product.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            ARCHITECTURE
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                01 — APPLICATION ARCHITECTURE
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                From interface
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  to database.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-[12px] leading-6 text-[#625e58] md:text-right">
              A simplified view of how the layers in my full-stack projects
              communicate with one another.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-[#c9a15a]/40 via-white/[0.08] to-transparent lg:block" />

            <div className="space-y-4">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <motion.div
                    key={layer.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative border border-white/[0.08] bg-[#090908] p-6 transition duration-300 hover:border-[#c9a15a]/25 md:p-8"
                  >
                    <div className="grid gap-7 lg:grid-cols-[70px_0.75fr_1fr] lg:items-center lg:gap-10">
                      <div className="flex items-center gap-4 lg:block">
                        <span className="font-mono text-[9px] text-[#c9a15a]">
                          {layer.number}
                        </span>

                        <div className="mt-0 flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#c9a15a] lg:mt-5">
                          <Icon size={17} strokeWidth={1.3} />
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-[8px] tracking-[0.15em] text-[#514d47]">
                          {layer.subtitle}
                        </span>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                          {layer.title}
                        </h3>
                      </div>

                      <div>
                        <p className="text-[12px] leading-6 text-[#6e6962]">
                          {layer.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {layer.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border border-white/[0.07] px-2.5 py-1.5 font-mono text-[7px] text-[#65615b] transition hover:border-[#c9a15a]/30 hover:text-[#c9a15a]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <ArrowDown
              size={15}
              className="text-[#c9a15a]"
            />

            <span className="font-mono text-[8px] tracking-[0.15em] text-[#514d47]">
              REQUEST → VALIDATE → PROCESS → STORE → RESPOND
            </span>
          </div>
        </section>

        {/* =====================================================
            BACKEND
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — BACKEND ENGINEERING
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                The logic
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  behind the API.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[12px] leading-7 text-[#68635d]">
                My backend work focuses on creating APIs that connect
                application interfaces with business logic and persistent
                data.
              </p>

              <div className="mt-10 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <Server size={15} className="text-[#c9a15a]" />

                <span className="font-mono text-[8px] tracking-[0.12em] text-[#514d47]">
                  NODE.JS · EXPRESS · MONGODB
                </span>
              </div>
            </div>

            <div className="grid border-t border-l border-white/[0.08] sm:grid-cols-2">
              {backendCapabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="group border-b border-r border-white/[0.08] px-5 py-5 transition hover:bg-white/[0.015]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] text-[#77726b] transition group-hover:text-[#c9a15a]">
                      {capability}
                    </span>

                    <span className="font-mono text-[7px] text-[#3f3b37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SECURITY
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="border border-[#c9a15a]/15 bg-[#0a0908] p-7 md:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                  03 — SECURITY
                </span>

                <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db]">
                  Security is
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    part of the build.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-[12px] leading-7 text-[#68635d]">
                  Authentication and data protection are not features added at
                  the end. They are considered while the system is being
                  designed.
                </p>
              </div>

              <div className="space-y-0 border-t border-white/[0.08]">
                {securityItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="grid gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[45px_0.5fr_1fr] md:items-center"
                    >
                      <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] text-[#c9a15a]">
                        <Icon size={15} strokeWidth={1.3} />
                      </div>

                      <div>
                        <span className="font-mono text-[7px] text-[#4d4943]">
                          0{index + 1}
                        </span>

                        <h3 className="mt-1 text-sm font-semibold text-[#d6d1c9]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[11px] leading-6 text-[#68635d]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              04 — ENGINEERING PRINCIPLES
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              How I approach
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                building software.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-l border-white/[0.08] md:grid-cols-2">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="group border-b border-r border-white/[0.08] p-7 transition duration-300 hover:bg-white/[0.015] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] text-[#c9a15a]">
                    {principle.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#403c37] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                  />
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-md text-[12px] leading-7 text-[#68635d]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            TOOLCHAIN
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="border border-white/[0.08] p-8 md:p-10">
              <GitBranch
                size={20}
                strokeWidth={1.2}
                className="text-[#c9a15a]"
              />

              <span className="mt-8 block font-mono text-[8px] tracking-[0.17em] text-[#514d47]">
                DEVELOPMENT WORKFLOW
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                Build with feedback.
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-[#68635d]">
                Git, GitHub, VS Code and Postman form part of my everyday
                development workflow — from writing code and testing APIs to
                committing changes and deploying applications.
              </p>
            </div>

            <div className="border border-white/[0.08] p-8 md:p-10">
              <Layers3
                size={20}
                strokeWidth={1.2}
                className="text-[#c9a15a]"
              />

              <span className="mt-8 block font-mono text-[8px] tracking-[0.17em] text-[#514d47]">
                DELIVERY
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#ddd8d0]">
                From local to live.
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-[#68635d]">
                I work with deployment platforms, environment configuration,
                domains and production debugging to understand what happens
                after development leaves the local machine.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-28 text-center lg:py-40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            05 — NEXT
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            See the
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              work in context.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[12px] leading-7 text-[#68635d]">
            Explore the projects where these engineering concepts come
            together in real applications.
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