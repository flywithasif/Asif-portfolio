import { ArrowRight, Check } from "lucide-react";

import PageHeader from "../components/PageHeader";

const steps = [
  [
    "01",
    "Understand",
    "Clarify the problem, users, requirements and success criteria.",
  ],
  [
    "02",
    "Architect",
    "Plan application structure, routes, data models and API boundaries.",
  ],
  [
    "03",
    "Build",
    "Create the interface, backend logic, database models and integrations.",
  ],
  [
    "04",
    "Secure",
    "Add validation, authentication, authorization and safe error handling.",
  ],
  [
    "05",
    "Test",
    "Verify API behaviour, edge cases, loading states and responsive experiences.",
  ],
  [
    "06",
    "Ship",
    "Deploy the application and keep the codebase structured for future changes.",
  ],
];

export default function Engineering() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <PageHeader
          number="04"
          label="ENGINEERING"
          title="From idea to"
          highlight="production."
          description="The engineering principles I bring into a project — beyond simply making the screen look right."
        />

        <div className="grid border border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article
              key={number}
              className="relative min-h-[250px] border-b border-white/[0.08] p-7 transition hover:bg-white/[0.015]"
            >
              <span className="font-mono text-[9px] text-[#c9a15a]">
                {number}
              </span>

              <h2 className="mt-14 text-2xl font-semibold">{title}</h2>

              <p className="mt-4 max-w-[280px] text-[12px] leading-7 text-[#77736d]">
                {text}
              </p>

              <ArrowRight
                size={18}
                className="absolute bottom-7 right-7 text-[#44413d]"
              />
            </article>
          ))}
        </div>

        <div className="mt-24 overflow-x-auto border border-white/[0.08] p-7">
          <p className="section-label">TYPICAL APPLICATION FLOW</p>

          <div className="mt-14 flex min-w-[850px] items-center">
            {[
              "React UI",
              "REST API",
              "Express",
              "Services",
              "Mongoose",
              "MongoDB",
            ].map((item, index) => (
              <div key={item} className="flex flex-1 items-center">
                <div>
                  <span className="block font-mono text-[8px] text-[#c9a15a]">
                    0{index + 1}
                  </span>

                  <strong className="mt-2 block text-[12px] text-[#858079]">
                    {item}
                  </strong>
                </div>

                {index < 5 && (
                  <ArrowRight
                    size={15}
                    className="ml-auto mr-5 text-[#3f3c38]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Reusable components",
            "Clear API contracts",
            "Protected routes",
            "Validation & error handling",
            "Responsive UX",
            "Readable code",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 border border-white/[0.07] p-4 font-mono text-[9px] text-[#77736d]"
            >
              <Check size={15} className="text-[#c9a15a]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
