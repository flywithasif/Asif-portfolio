import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const profileDetails = [
  {
    label: "ROLE",
    value: "Full-Stack Developer",
  },
  {
    label: "FOCUS",
    value: "Backend Engineering",
  },
  {
    label: "LOCATION",
    value: "Gurgaon, India",
  },
  {
    label: "EDUCATION",
    value: "BCA · 2024 — 2027",
  },
];

const experience = [
  {
    year: "2024 — NOW",
    role: "Center Manager",
    company: "Professional Experience",
    description:
      "Managing day-to-day operations, customer interactions, sales workflows, team coordination and business responsibilities in a professional environment.",
  },
  {
    year: "2025 — NOW",
    role: "Full-Stack Developer",
    company: "Independent Development",
    description:
      "Building full-stack applications with React, Node.js, Express and MongoDB while developing stronger skills in APIs, authentication, databases and production workflows.",
  },
];

const technicalSkills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC",
      "Middleware",
      "CRUD",
      "Validation",
      "Error Handling",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Schemas",
      "Models",
      "Queries",
      "Filtering",
      "Sorting",
    ],
  },
  {
    title: "Security",
    items: [
      "JWT",
      "bcrypt",
      "Authentication",
      "Authorization",
      "Protected Routes",
      "OTP",
      "Rate Limiting",
      "Environment Variables",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Vercel",
      "Netlify",
      "DNS",
    ],
  },
  {
    title: "Additional",
    items: [
      "Multer",
      "Cloudinary",
      "API Integration",
      "Responsive Design",
      "Deployment",
      "Debugging",
      "Testing",
      "JSON",
    ],
  },
];

const selectedProjects = [
  {
    number: "01",
    title: "WebQenzo",
    type: "FULL-STACK BUSINESS PLATFORM",
    description:
      "A full-stack digital agency platform with public-facing pages, lead management, quotations, contacts, authentication and protected administration.",
  },
  {
    number: "02",
    title: "Resume Builder",
    type: "SAAS · FULL-STACK",
    description:
      "A resume creation product combining a React builder interface with reusable templates, persistent data and backend authentication.",
  },
  {
    number: "03",
    title: "Job Portal",
    type: "JOB PLATFORM · FULL-STACK",
    description:
      "A full-stack job platform focused on candidates, opportunities, application workflows, authentication and structured data.",
  },
  {
    number: "04",
    title: "Sales CRM",
    type: "CRM · IN DEVELOPMENT",
    description:
      "A workflow-driven CRM currently being developed around leads, assignment, follow-ups, statuses and sales operations.",
  },
];

export default function Resume() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="07"
          label="RESUME"
          title="A concise view"
          highlight="of the work."
          description="A structured overview of my professional experience, education, technical skills and selected projects."
        />

        {/* =====================================================
            RESUME HERO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="relative overflow-hidden border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[380px] w-[380px] rounded-full border border-[#c9a15a]/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-end">
              <div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
                  ASIF · FULL-STACK DEVELOPER
                </span>

                <h2 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#e8e3db] md:text-8xl">
                  Building
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    useful systems.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-[13px] leading-7 text-[#77726b]">
                  Full-stack developer focused on building practical digital
                  products with React, Node.js, Express and MongoDB — with a
                  growing focus on backend engineering, authentication, APIs
                  and production-ready application structure.
                </p>
              </div>

              <div className="lg:text-right">
                <div className="flex items-center gap-3 lg:justify-end">
                  <MapPin size={15} className="text-[#c9a15a]" />

                  <span className="font-mono text-[8px] tracking-[0.14em] text-[#5c5751]">
                    GURGAON · INDIA
                  </span>
                </div>

                <a
                  href="mailto:your@email.com"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[8px] tracking-[0.1em] text-[#77726b] transition hover:text-[#c9a15a]"
                >
                  <Mail size={14} />

                  your@email.com
                </a>

                <button
                  type="button"
                  className="group mt-7 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-6 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
                >
                  Download Resume

                  <Download
                    size={14}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFILE DETAILS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-12">
          <div className="grid grid-cols-2 gap-px bg-white/[0.08] md:grid-cols-4">
            {profileDetails.map((item) => (
              <div
                key={item.label}
                className="bg-[#080807] px-5 py-7 md:px-7"
              >
                <span className="font-mono text-[7px] tracking-[0.15em] text-[#4e4a45]">
                  {item.label}
                </span>

                <p className="mt-4 text-[11px] leading-5 text-[#88827a]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                01 — EXPERIENCE
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Work that
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  shaped me.
                </span>
              </h2>
            </div>

            <div className="border-t border-white/[0.08]">
              {experience.map((item, index) => (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="grid gap-6 border-b border-white/[0.08] py-8 md:grid-cols-[150px_1fr]"
                >
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.1em] text-[#c9a15a]">
                      {item.year}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                          {item.role}
                        </h3>

                        <p className="mt-2 font-mono text-[8px] tracking-[0.1em] text-[#514d47]">
                          {item.company}
                        </p>
                      </div>

                      <BriefcaseBusiness
                        size={17}
                        strokeWidth={1.2}
                        className="shrink-0 text-[#c9a15a]"
                      />
                    </div>

                    <p className="mt-5 max-w-2xl text-[12px] leading-7 text-[#68635d]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — EDUCATION
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Building the
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  foundation.
                </span>
              </h2>
            </div>

            <div className="border border-white/[0.08] bg-[#090908] p-7 md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-[#c9a15a]">
                    2024 — 2027
                  </span>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#ddd8d0]">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="mt-3 font-mono text-[8px] tracking-[0.12em] text-[#514d47]">
                    SHOOLINI UNIVERSITY
                  </p>
                </div>

                <GraduationCap
                  size={22}
                  strokeWidth={1.2}
                  className="shrink-0 text-[#c9a15a]"
                />
              </div>

              <p className="mt-7 max-w-2xl text-[12px] leading-7 text-[#68635d]">
                Formal computer applications education combined with practical
                project development, backend learning and continuous
                experimentation with modern web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL SKILLS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — TECHNICAL SKILLS
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              Tools I use to
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                build products.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill) => (
              <div
                key={skill.title}
                className="border-b border-r border-white/[0.08] p-7 md:p-8"
              >
                <div className="flex items-center gap-3">
                  <Code2
                    size={15}
                    strokeWidth={1.2}
                    className="text-[#c9a15a]"
                  />

                  <h3 className="font-mono text-[9px] font-bold tracking-[0.14em] text-[#77726b]">
                    {skill.title.toUpperCase()}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/[0.08] px-2.5 py-1.5 font-mono text-[7px] text-[#625d56]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            SELECTED PROJECTS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                04 — SELECTED PROJECTS
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Where the skills
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  become systems.
                </span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.13em] text-[#77726b] transition hover:text-[#c9a15a]"
            >
              View All Projects

              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="border-t border-white/[0.08]">
            {selectedProjects.map((project) => (
              <div
                key={project.number}
                className="grid gap-6 border-b border-white/[0.08] py-8 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
              >
                <span className="font-mono text-[9px] text-[#c9a15a]">
                  {project.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#dcd7cf]">
                    {project.title}
                  </h3>

                  <span className="mt-2 block font-mono text-[7px] tracking-[0.12em] text-[#4f4b46]">
                    {project.type}
                  </span>
                </div>

                <p className="max-w-xl text-[11px] leading-6 text-[#68635d]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CORE STACK
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                  CORE STACK
                </span>

                <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db]">
                  My current
                  <br />
                  <span className="font-serif italic text-[#c9a15a]">
                    engineering stack.
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Mongoose",
                  "JWT",
                  "bcrypt",
                  "REST API",
                  "Postman",
                  "Git",
                  "GitHub",
                  "Vercel",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/[0.09] px-4 py-2.5 font-mono text-[8px] text-[#706b64] transition hover:border-[#c9a15a]/35 hover:text-[#c9a15a]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DOWNLOAD / CONTACT CTA
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-28 text-center lg:py-40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            05 — LET'S CONNECT
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            Looking for
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              the next challenge.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[12px] leading-7 text-[#68635d]">
            Interested in backend development, full-stack products and
            opportunities where I can continue growing through real
            engineering work.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-[#c9a15a]/40 px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#top"
              className="inline-flex items-center gap-3 border border-white/[0.1] px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#6c6760] transition hover:border-white/[0.25] hover:text-white"
            >
              <ArrowDownToLine size={15} />

              Resume PDF
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
