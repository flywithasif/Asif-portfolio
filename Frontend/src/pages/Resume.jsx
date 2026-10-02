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
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#070707] text-[#f4f1eb]"
    >
      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-[120px] lg:px-8">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="border-b border-white/[0.08] pb-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a15a]">
                Resume / Profile
              </p>

              <h1 className="mt-6 max-w-[850px] font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#f4f1eb] sm:text-6xl lg:text-8xl">
                Asif
                <span className="text-[#c9a15a]">.</span>
              </h1>

              <p className="mt-7 max-w-[720px] text-base leading-7 text-[#858079] sm:text-lg">
                Full-stack developer focused on building modern digital
                products, backend systems, APIs, authentication flows,
                databases, and production-ready web applications.
              </p>

              <a
                href="/Asif-Resume.pdf"
                download="Asif-Resume.pdf"
                className="group mt-7 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-6 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
              >
                Download Resume

                <Download
                  size={14}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <div className="lg:border-l lg:border-white/[0.08] lg:pl-10">
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#5f5b55]">
                    Location
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#b0aaa1]">
                    <MapPin size={14} className="text-[#c9a15a]" />
                    India
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#5f5b55]">
                    Role
                  </p>

                  <p className="mt-2 text-sm text-[#b0aaa1]">
                    Full-Stack Developer
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#5f5b55]">
                    Focus
                  </p>

                  <p className="mt-2 text-sm text-[#b0aaa1]">
                    React · Node.js · MongoDB
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#5f5b55]">
                    Availability
                  </p>

                  <p className="mt-2 text-sm text-[#b0aaa1]">
                    Open to opportunities
                  </p>
                </div>

                <a
                  href="mailto:flywithasif@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-[15px] tracking-[0.1em] text-[#77726b] transition hover:text-[#c9a15a]"
                >
                  <Mail size={14} />

                  flywithasif@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFILE DETAILS
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <Code2 size={17} className="text-[#c9a15a]" />

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#f4f1eb]">
                  Profile       
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#77726b]">
                I build complete web applications with a strong focus on
                clean interfaces, reliable backend systems, structured APIs,
                authentication, databases, and real-world usability.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <GraduationCap size={17} className="text-[#c9a15a]" />

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#f4f1eb]">
                  Education
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#77726b]">
                Bachelor of Computer Applications
                <br />
                Shoolini University
                <br />
                2024 — 2027
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  size={17}
                  className="text-[#c9a15a]"
                />

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#f4f1eb]">
                  Professional
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#77726b]">
                Professional experience in business operations and management,
                combined with hands-on full-stack development and product
                building.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL SKILLS
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9a15a]">
                Technical Stack
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f4f1eb] sm:text-4xl">
                Built across the stack.
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-6 text-[#66615a]">
              Technologies and engineering practices I use to build,
              connect, test, and deploy modern web products.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: [
                  "React",
                  "JavaScript",
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
                  "MVC Architecture",
                  "Middleware",
                  "Async/Await",
                ],
              },
              {
                title: "Database",
                items: [
                  "MongoDB",
                  "MongoDB Atlas",
                  "Mongoose",
                  "Schemas",
                  "Validation",
                  "Query Operations",
                ],
              },
              {
                title: "Authentication",
                items: [
                  "JWT",
                  "bcrypt",
                  "Protected Routes",
                  "Authorization",
                  "Role-Based Access",
                  "OTP Verification",
                ],
              },
              {
                title: "API Engineering",
                items: [
                  "CRUD",
                  "HTTP Status Codes",
                  "Postman",
                  "Input Validation",
                  "Error Handling",
                  "API Design",
                ],
              },
              {
                title: "Delivery",
                items: [
                  "Git",
                  "GitHub",
                  "Vercel",
                  "Netlify",
                  "Environment Variables",
                  "Deployment",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-[#070707] p-7 transition duration-300 hover:bg-[#0b0b0b]"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#c9a15a]">
                  {group.title}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/[0.08] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.08em] text-[#77726b]"
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
            ENGINEERING APPROACH
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9a15a]">
                Engineering Approach
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#f4f1eb] sm:text-4xl">
                I care about what happens behind the interface.
              </h2>
            </div>

            <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Structure",
                  text: "Organized components, routes, controllers, middleware, models, and reusable logic.",
                },
                {
                  number: "02",
                  title: "Security",
                  text: "Authentication, authorization, password hashing, validation, secrets, and protected APIs.",
                },
                {
                  number: "03",
                  title: "Reliability",
                  text: "Error handling, API testing, edge cases, debugging, and predictable responses.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  text: "Git-based workflow, environment configuration, deployment, and iterative improvement.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-[#070707] p-7"
                >
                  <span className="font-mono text-[9px] text-[#c9a15a]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-[#f4f1eb]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6f6a63]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT EXPERIENCE
        ====================================================== */}
        <section className="border-b border-white/[0.08] py-16">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9a15a]">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f4f1eb] sm:text-4xl">
              Products I've been building.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {[
              {
                name: "WebQenzo",
                type: "Full-Stack Business Platform",
                description:
                  "A business website and platform combining modern frontend experiences with backend systems, APIs, CRM workflows, lead management, and administrative operations.",
              },
              {
                name: "Resume Builder",
                type: "Full-Stack Product",
                description:
                  "A resume-building product focused on structured user input, document workflows, authentication, and a polished frontend experience.",
              },
              {
                name: "Job Portal",
                type: "Full-Stack Application",
                description:
                  "A job platform concept covering listings, users, application workflows, APIs, database operations, and role-based functionality.",
              },
              {
                name: "E-commerce Platform",
                type: "Commerce Application",
                description:
                  "A commerce-focused application exploring product management, customer flows, backend APIs, and order-oriented workflows.",
              },
              {
                name: "HR Portal",
                type: "In Development",
                description:
                  "An HR-focused business system currently being developed around employee and operational workflows.",
              },
              {
                name: "Sales CRM",
                type: "In Development",
                description:
                  "A CRM system focused on lead management, assignment, follow-ups, team workflows, and sales operations.",
              },
            ].map((project, index) => (
              <div
                key={project.name}
                className="grid gap-4 py-7 md:grid-cols-[80px_1fr_1.4fr]"
              >
                <span className="font-mono text-[9px] text-[#4f4b45]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-[#f4f1eb]">
                    {project.name}
                  </h3>

                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#c9a15a]">
                    {project.type}
                  </p>
                </div>

                <p className="max-w-[600px] text-sm leading-6 text-[#6f6a63]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9a15a]">
                Next Step
              </p>

              <h2 className="mt-4 max-w-[650px] text-3xl font-semibold tracking-[-0.03em] text-[#f4f1eb] sm:text-4xl">
                Interested in building something useful?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
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
                href="/Asif-Resume.pdf"
                download="Asif-Resume.pdf"
                className="inline-flex items-center gap-3 border border-white/[0.1] px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#6c6760] transition hover:border-white/[0.25] hover:text-white"
              >
                <ArrowDownToLine size={15} />

                Resume PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}