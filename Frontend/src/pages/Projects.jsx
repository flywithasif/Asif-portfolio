import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  ExternalLink,
  Github,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const projects = [
  {
    number: "01",
    status: "FLAGSHIP PROJECT",
    category: "BUSINESS PLATFORM · FULL-STACK",
    title: "WebQenzo",
    subtitle: "A digital agency platform built around real business workflows.",
    description:
      "WebQenzo is a full-stack digital agency platform I have built to bring together the public website, lead management, contact handling, quotations, team access and operational workflows into one connected system.",
    details:
      "The project goes beyond a marketing website. It includes a dedicated backend, authentication, protected administration, CRM-style workflows, role-aware access and structured API communication.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    icon: Building2,
    featured: true,
    live: "https://webqenzo.com/",
    github: "https://github.com/",
  },
  {
    number: "02",
    status: "COMPLETED",
    category: "SAAS · PRODUCT · FULL-STACK",
    title: "Resume Builder",
    subtitle: "A structured resume creation experience for modern job seekers.",
    description:
      "A full-stack resume builder designed to turn the process of creating a professional resume into a guided digital product rather than a static document editor.",
    details:
      "The platform combines a React-based builder interface with reusable templates, persistent data, authentication and backend APIs for managing resume information.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    icon: Sparkles,
    featured: true,
    live: "https://resume-builder-frontend-neon.vercel.app/",
    github: "https://github.com/",
  },
  {
    number: "03",
    status: "COMPLETED",
    category: "JOB PLATFORM · FULL-STACK",
    title: "Job Portal",
    subtitle: "Connecting candidates, opportunities and application workflows.",
    description:
      "A full-stack job portal built around the core flow between candidates and job opportunities, with structured data, APIs and user-facing workflows.",
    details:
      "The project gave me practical experience with authentication, CRUD operations, data relationships, filtering and the design of workflows around different types of users.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    icon: BriefcaseBusiness,
    live: "#",
    github: "https://github.com/",
  },
  {
    number: "04",
    status: "COMPLETED",
    category: "COMMERCE · FULL-STACK",
    title: "E-commerce Platform",
    subtitle: "A commerce experience connecting products, customers and operations.",
    description:
      "A full-stack e-commerce project focused on product management, customer-facing experiences and the backend workflows required to support an online store.",
    details:
      "The project involved working with product data, CRUD operations, API-driven interfaces, database models and the practical considerations of building commerce functionality.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Tailwind CSS",
    ],
    icon: ShoppingBag,
    live: "#",
    github: "https://github.com/",
  },
  {
    number: "05",
    status: "IN DEVELOPMENT",
    category: "HR · BUSINESS SYSTEM",
    title: "HR Portal",
    subtitle: "An internal platform for structured people and workforce operations.",
    description:
      "A work-in-progress HR platform focused on bringing employee information, operational workflows and administrative functionality into a structured web application.",
    details:
      "The project is currently under active development, with the architecture and core application workflows being built incrementally.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    icon: UsersRound,
    live: "#",
    github: "https://github.com/",
    wip: true,
  },
  {
    number: "06",
    status: "IN DEVELOPMENT",
    category: "CRM · SALES OPERATIONS",
    title: "Sales CRM",
    subtitle: "A workflow-driven system for managing leads and sales activity.",
    description:
      "A CRM system currently being developed around lead management, assignment, follow-ups, team workflows and operational visibility.",
    details:
      "The system is designed around real sales workflows rather than a simple contact list, with an emphasis on lead ownership, status progression, follow-up scheduling and team-level operations.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    icon: Code2,
    live: "#",
    github: "https://github.com/",
    wip: true,
  },
];

const engineeringAreas = [
  {
    title: "Frontend",
    description:
      "Responsive interfaces, reusable components, routing, forms and interaction design.",
  },
  {
    title: "Backend",
    description:
      "REST APIs, controllers, middleware, validation, business logic and error handling.",
  },
  {
    title: "Authentication",
    description:
      "Registration, login, JWT, protected routes, authorization and password recovery flows.",
  },
  {
    title: "Data",
    description:
      "MongoDB schemas, Mongoose models, relationships, queries and persistent application data.",
  },
];

export default function Projects() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="03"
          label="SELECTED WORK"
          title="Projects that"
          highlight="show the process."
          description="A collection of products and systems I've built while developing my full-stack engineering skills — from business platforms and SaaS products to commerce and workflow applications."
        />

        {/* =====================================================
            INTRO STATS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-14">
          <div className="grid grid-cols-2 gap-px bg-white/[0.08] md:grid-cols-4">
            {[
              ["06", "PROJECTS"],
              ["04", "COMPLETED"],
              ["02", "IN DEVELOPMENT"],
              ["FULL", "STACK"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-[#080807] px-5 py-7 md:px-8"
              >
                <span className="font-serif text-3xl italic text-[#c9a15a] md:text-4xl">
                  {value}
                </span>

                <span className="mt-3 block font-mono text-[8px] tracking-[0.15em] text-[#55514b]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROJECT LIST
        ====================================================== */}
        <section className="border-t border-white/[0.08]">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                className={`group border-b border-white/[0.08] py-16 lg:py-24 ${
                  project.featured ? "bg-white/[0.012]" : ""
                }`}
              >
                <div className="grid gap-12 lg:grid-cols-[90px_1fr] lg:gap-16">
                  {/* Number */}
                  <div className="flex items-start justify-between lg:block">
                    <span className="font-mono text-[10px] text-[#c9a15a]">
                      {project.number}
                    </span>

                    <span className="font-mono text-[8px] tracking-[0.12em] text-[#4f4b46] lg:mt-4 lg:block">
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
                      <div>
                        <div className="flex items-center gap-4">
                          <Icon
                            size={20}
                            strokeWidth={1.2}
                            className="text-[#c9a15a]"
                          />

                          <span className="font-mono text-[8px] tracking-[0.17em] text-[#5c5751]">
                            {project.category}
                          </span>
                        </div>

                        <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
                          {project.title}
                        </h2>

                        <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-[#a29d95]">
                          {project.subtitle}
                        </p>

                        <p className="mt-8 max-w-2xl text-[13px] leading-7 text-[#77726b]">
                          {project.description}
                        </p>

                        <div className="mt-7 max-w-2xl border-l border-[#c9a15a]/30 pl-5">
                          <p className="text-[12px] leading-7 text-[#625e58]">
                            {project.details}
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-[8px] tracking-[0.16em] text-[#55514b]">
                          TECHNOLOGY
                        </span>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((technology) => (
                            <span
                              key={technology}
                              className="border border-white/[0.08] px-3 py-2 font-mono text-[8px] text-[#77726b] transition duration-300 hover:border-[#c9a15a]/40 hover:text-[#c9a15a]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                          {project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="group/link inline-flex items-center gap-2 border border-[#c9a15a]/40 px-5 py-3 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#c9a15a] transition hover:bg-[#c9a15a] hover:text-black"
                            >
                              Live Project

                              <ExternalLink
                                size={13}
                                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                              />
                            </a>
                          )}

                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 border border-white/[0.1] px-5 py-3 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#77726b] transition hover:border-white/[0.25] hover:text-white"
                            >
                              GitHub

                              <Github size={13} />
                            </a>
                          )}

                          {project.wip && (
                            <span className="inline-flex items-center gap-2 border border-[#c9a15a]/15 bg-[#c9a15a]/[0.03] px-5 py-3 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#806b4a]">
                              Currently Building
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project footer */}
                    <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <span className="font-mono text-[8px] tracking-[0.14em] text-[#4f4b46]">
                        {project.wip
                          ? "ACTIVE DEVELOPMENT"
                          : "BUILT · TESTED · REFINED"}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-[#514c46] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* =====================================================
            ENGINEERING SCOPE
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                04 — WHAT THESE PROJECTS REPRESENT
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Not just
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  portfolio pieces.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#6e6a64]">
                Each project has been a way to move from theory into practical
                engineering — understanding how different layers of a product
                depend on one another.
              </p>
            </div>

            <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
              {engineeringAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="border-b border-white/[0.08] py-8 sm:px-7 sm:[&:nth-child(odd)]:pl-0"
                >
                  <span className="font-mono text-[8px] text-[#c9a15a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#dcd7cf]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#69645e]">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRENT BUILD
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="relative overflow-hidden border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[350px] w-[350px] rounded-full border border-[#c9a15a]/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <span className="font-mono text-[8px] tracking-[0.18em] text-[#c9a15a]">
                  CURRENTLY BUILDING
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
                  HR Portal
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    + Sales CRM
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#6e6a64]">
                  Two workflow-heavy systems currently in development, focused
                  on understanding how real business operations translate into
                  software — from employee management to lead ownership,
                  follow-ups and sales workflows.
                </p>
              </div>

              <div className="lg:text-right">
                <span className="font-mono text-[8px] tracking-[0.15em] text-[#4f4b46]">
                  NEXT ITERATION
                </span>

                <p className="mt-3 font-serif text-2xl italic text-[#aaa49b]">
                  More systems.
                  <br />
                  Better engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="py-28 text-center lg:py-40">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            05 — KEEP EXPLORING
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            See how the
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              systems are built.
            </span>
          </h2>

          <Link
            to="/engineering"
            className="group mt-10 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            Explore Engineering

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