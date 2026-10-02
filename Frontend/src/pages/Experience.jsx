import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import PageHeader from "../components/PageHeader";

const experience = [
  {
    icon: BriefcaseBusiness,
    date: "2024 — PRESENT",
    title: "Center Manager",
    subtitle: "Fitness & Operations",
    description:
      "Managing daily operations, customer experience, sales workflows and team coordination — experience that strengthened communication, ownership and business thinking.",
  },
  {
    icon: GraduationCap,
    date: "2024 — 2027",
    title: "Bachelor of Computer Applications",
    subtitle: "Computer Science & Software Development",
    description:
      "Building a strong foundation in software development while developing practical full-stack applications and backend systems.",
  },
];

export default function Experience() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <PageHeader
          number="05"
          label="EXPERIENCE"
          title="Where I learned to"
          highlight="build & lead."
          description="A combination of professional experience, education and hands-on product development."
        />

        <div className="max-w-[900px] border-t border-white/[0.08]">
          {experience.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="grid gap-7 border-b border-white/[0.08] py-12 md:grid-cols-[55px_150px_1fr]"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#c9a15a]">
                  <Icon size={18} />
                </div>

                <span className="font-mono text-[9px] text-[#68645e]">
                  {item.date}
                </span>

                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h2>

                  <h3 className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#c9a15a]">
                    {item.subtitle}
                  </h3>

                  <p className="mt-5 text-[13px] leading-7 text-[#77736d]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 border border-[#c9a15a]/20 bg-[#c9a15a]/[0.035] p-8 md:p-14">
          <span className="section-label text-[#c9a15a]">
            THE DIFFERENCE
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.055em] md:text-6xl">
            Business experience +
            <br />
            <span className="font-serif font-medium text-[#c9a15a]">
              engineering mindset.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-[13px] leading-7 text-[#77736d]">
            I understand that software is not only code. It needs to solve a
            business problem, communicate clearly and work reliably for real
            people.
          </p>
        </div>
      </div>
    </main>
  );
}
