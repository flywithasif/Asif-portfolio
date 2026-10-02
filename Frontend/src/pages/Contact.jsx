import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    // Backend API yahan baad mein connect karenge.
    console.log("Contact form submitted");
  }

  return (
    <main className="page-shell">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <PageHeader
          number="08"
          label="CONTACT"
          title="Have a product"
          highlight="in mind?"
          description="For hiring, freelance work, collaborations or simply a conversation about software — send a message."
        />

        <div className="grid gap-16 border-t border-white/[0.08] pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            {[
              {
                icon: Mail,
                label: "EMAIL",
                value: "hello@example.com",
                href: "mailto:hello@example.com",
              },
              {
                icon: GitBranch,
                label: "GITHUB",
                value: "github.com/yourusername",
                href: "https://github.com/",
              },
              {
                icon: ArrowUpRight,
                label: "LINKEDIN",
                value: "linkedin.com/in/yourusername",
                href: "https://linkedin.com/",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="flex min-h-[88px] items-center gap-4 border-b border-white/[0.08] text-[#858079] transition hover:text-white"
                >
                  <Icon size={19} className="text-[#c9a15a]" />

                  <span className="flex-1 text-[13px]">
                    <small className="mb-1 block font-mono text-[8px] tracking-[0.12em] text-[#5e5a55]">
                      {item.label}
                    </small>

                    {item.value}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#4d4944]"
                  />
                </a>
              );
            })}

            <div className="flex min-h-[88px] items-center gap-4 text-[#858079]">
              <MapPin size={19} className="text-[#c9a15a]" />

              <span className="text-[13px]">
                <small className="mb-1 block font-mono text-[8px] tracking-[0.12em] text-[#5e5a55]">
                  LOCATION
                </small>

                India · Open to remote / relocation
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7"
          >
            <label className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#6e6a64]">
              YOUR NAME

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="mt-3 block w-full border-0 border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-[#44413d] focus:border-[#c9a15a]"
              />
            </label>

            <label className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#6e6a64]">
              EMAIL ADDRESS

              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                required
                className="mt-3 block w-full border-0 border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-[#44413d] focus:border-[#c9a15a]"
              />
            </label>

            <label className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#6e6a64]">
              MESSAGE

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me a little about the opportunity..."
                required
                className="mt-3 block w-full resize-y border-0 border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-[#44413d] focus:border-[#c9a15a]"
              />
            </label>

            <button
              type="submit"
              className="inline-flex h-12 w-fit items-center gap-2 bg-[#c9a15a] px-5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#e0bd72]"
            >
              Send Message
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}