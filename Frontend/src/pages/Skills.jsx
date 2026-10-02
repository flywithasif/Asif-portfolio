import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Server,
  Settings2,
  ShieldCheck,
  Terminal,
  TestTube2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const skillGroups = [
  {
    number: "01",
    icon: Code2,
    category: "FRONTEND ENGINEERING",
    title: "Interfaces that feel intentional.",
    description:
      "Building responsive, component-driven interfaces with attention to hierarchy, usability, performance and visual consistency.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    icon: Server,
    category: "BACKEND ENGINEERING",
    title: "Logic behind the experience.",
    description:
      "Designing structured server-side applications with REST APIs, middleware, controllers, validation, authentication and reusable business logic.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Middleware",
      "Async / Await",
      "Error Handling",
      "API Validation",
      "CRUD Operations",
      "Service Logic",
    ],
  },
  {
    number: "03",
    icon: Database,
    category: "DATABASE & DATA",
    title: "Data designed around the product.",
    description:
      "Working with document-based data models, relationships, validation, querying and persistence using MongoDB and Mongoose.",
    technologies: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Schemas",
      "Models",
      "References",
      "Validation",
      "Query Operations",
      "Filtering",
      "Sorting",
      "Pagination",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    category: "AUTHENTICATION & SECURITY",
    title: "Access should be deliberate.",
    description:
      "Implementing authentication and authorization flows with protected routes, password hashing, JWT-based sessions and role-aware access control.",
    technologies: [
      "JWT",
      "bcrypt",
      "Password Hashing",
      "Login / Register",
      "Protected Routes",
      "Authorization",
      "Role-Based Access",
      "Forgot Password",
      "OTP Verification",
      "Rate Limiting",
      "Input Validation",
    ],
  },
  {
    number: "05",
    icon: Braces,
    category: "API ENGINEERING",
    title: "APIs built as product infrastructure.",
    description:
      "Designing and consuming REST endpoints that connect interfaces with application logic and persistent data.",
    technologies: [
      "REST Architecture",
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "Route Design",
      "Request Validation",
      "HTTP Status Codes",
      "JSON",
      "API Error Handling",
      "Postman",
    ],
  },
  {
    number: "06",
    icon: Cloud,
    category: "FILES & CLOUD SERVICES",
    title: "Connecting products to external services.",
    description:
      "Working with external services and server-side integrations while keeping credentials and sensitive configuration outside application code.",
    technologies: [
      "Multer",
      "Cloudinary",
      "File Uploads",
      "Multipart Form Data",
      "External APIs",
      "Environment Variables",
      "API Credentials",
      "Server-Side Secrets",
      "Cloud Storage",
    ],
  },
  {
    number: "07",
    icon: TestTube2,
    category: "TESTING & DEBUGGING",
    title: "Finding problems before users do.",
    description:
      "Testing API behaviour, debugging application errors and tracing issues across frontend, backend, database and deployment layers.",
    technologies: [
      "Postman",
      "API Testing",
      "Console Debugging",
      "Network Debugging",
      "Error Tracing",
      "Validation Testing",
      "Auth Testing",
      "CRUD Testing",
      "Edge Cases",
      "Production Debugging",
    ],
  },
  {
    number: "08",
    icon: GitBranch,
    category: "VERSION CONTROL & DELIVERY",
    title: "Code that can move from local to production.",
    description:
      "Using Git-based workflows to manage source code, changes and deployment-ready projects.",
    technologies: [
      "Git",
      "GitHub",
      "Branches",
      "Commits",
      "Pull / Push",
      "Repository Management",
      "Vercel",
      "Netlify",
      "Deployment",
      "Environment Configuration",
    ],
  },
];

const developmentPractices = [
  {
    icon: Layers3,
    title: "Component Architecture",
    description:
      "Reusable React components, shared UI patterns and route-based page architecture.",
  },
  {
    icon: Settings2,
    title: "Production Structure",
    description:
      "Controllers, routes, models, middleware, utilities and configuration separated into maintainable layers.",
  },
  {
    icon: LockKeyhole,
    title: "Secret Management",
    description:
      "API keys, JWT secrets, database credentials and service credentials handled through environment configuration rather than committed source code.",
  },
  {
    icon: KeyRound,
    title: "Authentication Flows",
    description:
      "From registration and login to protected resources, password recovery, OTP verification and authorization.",
  },
  {
    icon: Terminal,
    title: "API-First Development",
    description:
      "Designing backend endpoints, testing them independently and then connecting the frontend experience to the API layer.",
  },
  {
    icon: GitBranch,
    title: "Iterative Delivery",
    description:
      "Building features incrementally, debugging real issues and continuously refining the product through development.",
  },
];

const securityPrinciples = [
  "Never expose private API keys in frontend code.",
  "Keep secrets and credentials inside environment variables.",
  "Hash passwords before storing them.",
  "Protect authenticated routes and sensitive resources.",
  "Validate incoming request data.",
  "Use appropriate HTTP status codes and error responses.",
  "Apply rate limiting where abuse protection is required.",
  "Keep authentication and authorization responsibilities explicit.",
];

export default function Skills() {
  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="02"
          label="TECHNICAL CAPABILITIES"
          title="Tools are only"
          highlight="the beginning."
          description="A practical full-stack toolkit built through real projects, API development, authentication systems, database work, deployment and continuous experimentation."
        />

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                HOW I USE TECHNOLOGY
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
                I don't collect
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  technologies. I use them.
                </span>
              </h2>

              <p className="mt-9 max-w-2xl text-[14px] leading-8 text-[#77736d]">
                My stack has grown through building actual applications rather
                than following a checklist. That means working through the
                entire path — interface, API, business logic, authentication,
                database, external services, debugging and deployment.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILL MATRIX
        ====================================================== */}
        <section className="border-t border-white/[0.08]">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.03,
                }}
                className="border-b border-white/[0.08] py-12 lg:py-16"
              >
                <div className="grid gap-10 lg:grid-cols-[70px_0.9fr_1.1fr] lg:gap-12">
                  <span className="font-mono text-[9px] text-[#c9a15a]">
                    {skill.number}
                  </span>

                  <div>
                    <Icon
                      size={21}
                      strokeWidth={1.2}
                      className="text-[#c9a15a]"
                    />

                    <span className="mt-7 block font-mono text-[8px] tracking-[0.17em] text-[#55514b]">
                      {skill.category}
                    </span>

                    <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#ddd8d0] md:text-3xl">
                      {skill.title}
                    </h3>

                    <p className="mt-5 max-w-md text-[13px] leading-7 text-[#6e6a64]">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex content-start flex-wrap gap-2 lg:pt-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/[0.08] px-3 py-2 font-mono text-[8px] tracking-[0.05em] text-[#77726b] transition duration-300 hover:border-[#c9a15a]/40 hover:text-[#c9a15a]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* =====================================================
            DEVELOPMENT PRACTICES
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="mb-14">
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              03 — ENGINEERING PRACTICES
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
              Beyond the
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                technology names.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {developmentPractices.map((practice, index) => {
              const Icon = practice.icon;

              return (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="border-b border-white/[0.08] p-8 md:border-r lg:p-10"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#c9a15a]"
                  />

                  <h3 className="mt-7 text-lg font-semibold tracking-[-0.025em] text-[#ddd8d0]">
                    {practice.title}
                  </h3>

                  <p className="mt-4 text-[12px] leading-6 text-[#6b6761]">
                    {practice.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            API & INTEGRATION
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                04 — API & INTEGRATION
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Connecting
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  systems together.
                </span>
              </h2>
            </div>

            <div>
              <div className="border border-white/[0.08] bg-[#0a0908] p-7 md:p-10">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-[#5d5852]">
                    REQUEST FLOW
                  </span>

                  <span className="font-mono text-[8px] text-[#c9a15a]">
                    API
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  {[
                    "React / Client",
                    "HTTP Request",
                    "Express Route",
                    "Middleware + Validation",
                    "Controller / Business Logic",
                    "Mongoose / MongoDB",
                    "Structured Response",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#c9a15a]/20 font-mono text-[8px] text-[#c9a15a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-mono text-[9px] tracking-[0.08em] text-[#88837b]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#6e6a64]">
                I've worked with APIs as both a backend builder and a frontend
                consumer — creating endpoints, testing requests, handling
                validation and errors, connecting authenticated resources and
                integrating application data into real interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECURITY
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                05 — SECURITY MINDSET
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                Credentials belong
                <br />
                <span className="font-serif italic text-[#c9a15a]">
                  behind the server.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[13px] leading-7 text-[#6e6a64]">
                When working with API keys, database credentials, JWT secrets
                and third-party services, I treat configuration and secrets as
                part of the application's security boundary.
              </p>
            </div>

            <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
              {securityPrinciples.map((principle, index) => (
                <div
                  key={principle}
                  className="flex gap-4 border-b border-white/[0.08] py-5 sm:px-6 sm:first:pl-0"
                >
                  <span className="font-mono text-[8px] text-[#c9a15a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[12px] leading-6 text-[#77726b]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLKIT
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-24 lg:py-32">
          <div className="mb-14">
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              06 — TOOLKIT
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-6xl">
              The environment
              <br />
              <span className="font-serif italic text-[#c9a15a]">
                behind the work.
              </span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "EDITOR",
                items: ["VS Code", "Extensions", "Terminal", "DevTools"],
              },
              {
                title: "VERSION CONTROL",
                items: ["Git", "GitHub", "Branches", "Commits"],
              },
              {
                title: "API WORKFLOW",
                items: ["Postman", "REST", "JSON", "HTTP"],
              },
              {
                title: "DEPLOYMENT",
                items: ["Vercel", "Netlify", "Environment Config", "DNS"],
              },
            ].map((toolkit) => (
              <div
                key={toolkit.title}
                className="bg-[#090908] p-7 lg:p-9"
              >
                <span className="font-mono text-[8px] tracking-[0.16em] text-[#55514b]">
                  {toolkit.title}
                </span>

                <div className="mt-7 space-y-3">
                  {toolkit.items.map((item) => (
                    <p
                      key={item}
                      className="text-[13px] text-[#aaa59d]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CLOSING
        ====================================================== */}
        <section className="py-28 text-center lg:py-40">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            07 — NEXT
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            Skills matter.
            <br />
            <span className="font-serif italic text-[#c9a15a]">
              Systems prove them.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[13px] leading-7 text-[#6e6a64]">
            The projects section shows how these technologies come together in
            products, APIs and systems I've actually worked on.
          </p>

          <Link
            to="/projects"
            className="group mt-10 inline-flex items-center gap-3 bg-[#c9a15a] px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e0bd72]"
          >
            Explore Projects

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </section>
      </div>
    </main>
  );
}