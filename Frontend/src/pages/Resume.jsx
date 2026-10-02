import { ArrowDownToLine, ExternalLink } from "lucide-react";

import PageHeader from "../components/PageHeader";

export default function Resume() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <PageHeader
          number="07"
          label="RESUME"
          title="A concise view of"
          highlight="my journey."
          description="Keep this page connected to the latest version of your actual PDF resume."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_250px] lg:gap-16">
          <div className="relative min-h-[520px] overflow-hidden bg-[#f0ede6] p-8 text-black md:p-12">
            <div className="flex justify-between border-b border-black/20 pb-5">
              <div>
                <h2 className="font-serif text-3xl">ASIF</h2>

                <span className="mt-2 block font-mono text-[7px] tracking-[0.12em]">
                  FULL-STACK DEVELOPER · BACKEND FOCUSED
                </span>
              </div>

              <span className="font-mono text-[8px]">2026</span>
            </div>

            <div className="mt-10 grid gap-5">
              {[100, 75, 92, 100, 68, 87, 95, 72].map((width, index) => (
                <span
                  key={index}
                  className="block h-1.5 bg-black/10"
                  style={{ width: `${width}%` }}
                />
              ))}
            </div>

            <div className="absolute -bottom-5 -right-5 rotate-[-8deg] font-serif text-[100px] text-black/[0.04]">
              RESUME
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/Asif-Resume.pdf"
              download
              className="inline-flex h-12 items-center justify-center gap-2 bg-[#c9a15a] px-5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black"
            >
              Download Resume
              <ArrowDownToLine size={16} />
            </a>

            <a
              href="/Asif-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/10 px-5 font-mono text-[9px] uppercase tracking-[0.12em] text-white"
            >
              Open PDF
              <ExternalLink size={15} />
            </a>

            <p className="mt-4 font-mono text-[8px] leading-6 text-[#68645e]">
              Place your actual PDF inside:
              <br />
              <span className="text-[#c9a15a]">
                public/Asif-Resume.pdf
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
