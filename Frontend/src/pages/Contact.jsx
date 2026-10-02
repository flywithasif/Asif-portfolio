import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";

const contactChannels = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "flywithasif@gmail.com",
    href: "mailto:flywithasif@gmail.com",
    description:
      "For opportunities, projects and professional conversations.",
  },
  {
    icon: GitBranch,
    label: "GITHUB",
    value: "github.com/flywithasif",
    href: "https://github.com/flywithasif",
    description:
      "Explore my repositories, projects and development work.",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Gurgaon, India",
    href: "#",
    description:
      "Open to remote opportunities and professional collaboration.",
  },
];

const conversationTypes = [
  "Full-Stack Development",
  "Backend Development",
  "Web Applications",
  "API Development",
  "Freelance Projects",
  "Developer Opportunities",
];

const CONTACT_API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setShowSuccess(false);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          mobile: formData.phone.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || !data.success) {
        const validationError =
          data.errors?.[0]?.message ||
          data.message ||
          "Unable to send your message. Please try again.";

        throw new Error(validationError);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setShowSuccess(true);

      window.setTimeout(() => {
        setShowSuccess(false);
      }, 4500);
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <PageHeader
          number="08"
          label="CONTACT"
          title="Let's build"
          highlight="something useful."
          description="Whether it's a development opportunity, a product idea or a technical project, I'm open to conversations that lead to meaningful work."
        />

        {/* =====================================================
            MAIN CONTACT HERO
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* LEFT CONTENT */}
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                START A CONVERSATION
              </span>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
                Have an idea?
                <br />

                <span className="font-serif italic text-[#c9a15a]">
                  Let's talk.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-[13px] leading-8 text-[#77726b]">
                I'm interested in opportunities where I can contribute,
                learn and build real software. Tell me what you're working on,
                what you're trying to solve or what kind of developer you're
                looking for.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#c9a15a]/40" />

                <span className="font-mono text-[8px] tracking-[0.15em] text-[#514d47]">
                  AVAILABLE FOR CONVERSATIONS
                </span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="border border-white/[0.08] bg-[#090908] p-7 md:p-10">
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-6">
                <div className="flex h-10 w-10 items-center justify-center border border-[#c9a15a]/20 text-[#c9a15a]">
                  <MessageSquare size={17} strokeWidth={1.2} />
                </div>

                <div>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-[#c9a15a]">
                    DIRECT MESSAGE
                  </span>

                  <p className="mt-1 text-[11px] text-[#5f5a54]">
                    Tell me what you have in mind.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[8px] tracking-[0.13em] text-[#57524c]"
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="mt-3 w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-[#dcd7cf] outline-none placeholder:text-[#403c37] transition focus:border-[#c9a15a]/50"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[8px] tracking-[0.13em] text-[#57524c]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-[#dcd7cf] outline-none placeholder:text-[#403c37] transition focus:border-[#c9a15a]/50"
                  />
                </div>

                {/* MOBILE NUMBER */}
                <div>
                  <label
                    htmlFor="phone"
                    className="font-mono text-[8px] tracking-[0.13em] text-[#57524c]"
                  >
                    MOBILE NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    placeholder="98765 XXXXX"
                    className="mt-3 w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-[#dcd7cf] outline-none placeholder:text-[#403c37] transition focus:border-[#c9a15a]/50"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="font-mono text-[8px] tracking-[0.13em] text-[#57524c]"
                  >
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-3 w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-[#dcd7cf] outline-none placeholder:text-[#403c37] transition focus:border-[#c9a15a]/50"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[8px] tracking-[0.13em] text-[#57524c]"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me a little about the project, role or idea..."
                    className="mt-3 w-full resize-none border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm leading-6 text-[#dcd7cf] outline-none placeholder:text-[#403c37] transition focus:border-[#c9a15a]/50"
                  />
                </div>

                {errorMessage && (
                  <div className="border border-red-500/20 bg-red-500/[0.04] px-4 py-3 text-[11px] leading-5 text-red-400">
                    {errorMessage}
                  </div>
                )}

                {/* SEND BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 border border-[#c9a15a]/40 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  <Send
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CHANNELS
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="mb-14">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
              01 — CONTACT CHANNELS
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
              Choose your
              <br />

              <span className="font-serif italic text-[#c9a15a]">
                preferred channel.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/[0.08] md:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -4 }}
                  className="group border-b border-r border-white/[0.08] p-7 transition duration-300 hover:bg-white/[0.015] md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-[#c9a15a]">
                      <Icon size={17} strokeWidth={1.2} />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-[#403c37] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                    />
                  </div>

                  <span className="mt-10 block font-mono text-[8px] tracking-[0.16em] text-[#514d47]">
                    {channel.label}
                  </span>

                  <h3 className="mt-3 break-words text-lg font-semibold text-[#dcd7cf]">
                    {channel.value}
                  </h3>

                  <p className="mt-4 text-[11px] leading-6 text-[#625e58]">
                    {channel.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            DISCUSSION TYPES
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#c9a15a]">
                02 — WHAT WE CAN DISCUSS
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                From an idea
                <br />

                <span className="font-serif italic text-[#c9a15a]">
                  to implementation.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-[12px] leading-7 text-[#68635d]">
                Whether you already have a defined technical requirement or
                you're still figuring out the product, the first conversation
                can start with the problem you're trying to solve.
              </p>
            </div>

            <div className="border-t border-white/[0.08]">
              {conversationTypes.map((type, index) => (
                <div
                  key={type}
                  className="group flex items-center justify-between gap-5 border-b border-white/[0.08] py-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[8px] text-[#c9a15a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-medium tracking-[-0.02em] text-[#817b73] transition group-hover:text-[#ddd8d0]">
                      {type}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#403c37] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9a15a]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            AVAILABILITY
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-20 lg:py-28">
          <div className="border border-[#c9a15a]/15 bg-[#0a0908] p-8 md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#c9a15a] shadow-[0_0_15px_rgba(201,161,90,0.5)]" />

                  <span className="font-mono text-[8px] tracking-[0.16em] text-[#c9a15a]">
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#e8e3db] md:text-5xl">
                  Looking for the
                  <br />

                  <span className="font-serif italic text-[#c9a15a]">
                    right challenge.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-[12px] leading-7 text-[#68635d]">
                  Particularly interested in junior full-stack and backend
                  development opportunities where I can contribute to real
                  products while continuing to grow as an engineer.
                </p>
              </div>

              <div className="lg:text-right">
                <span className="font-mono text-[8px] tracking-[0.14em] text-[#4e4943]">
                  PRIMARY FOCUS
                </span>

                <p className="mt-4 font-serif text-2xl italic text-[#aaa49b]">
                  Backend
                  <br />
                  + Full-Stack
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="border-t border-white/[0.08] py-28 text-center lg:py-40">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a15a]">
            03 — FINAL WORD
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#e8e3db] md:text-7xl">
            Good products start
            <br />

            <span className="font-serif italic text-[#c9a15a]">
              with good conversations.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[12px] leading-7 text-[#68635d]">
            Have a project, opportunity or idea worth discussing? Start with a
            message.
          </p>

          <a
            href="mailto:flywithasif@gmail.com"
            className="group mt-10 inline-flex items-center gap-3 border border-[#c9a15a]/40 px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a15a] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            Email Me

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="mt-10">
            <Link
              to="/"
              className="font-mono text-[8px] tracking-[0.13em] text-[#4f4b46] transition hover:text-[#c9a15a]"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </section>
      </div>

      {/* =====================================================
          SUCCESS CONFIRMATION
      ====================================================== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-32px)] max-w-[460px] -translate-x-1/2"
          >
            <div className="border border-[#c9a15a]/30 bg-[#0b0a09] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c9a15a]/25 text-[#c9a15a]">
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[8px] tracking-[0.17em] text-[#c9a15a]">
                    MESSAGE SENT SUCCESSFULLY
                  </span>

                  <p className="mt-2 text-[11px] leading-5 text-[#77726b]">
                    Thank you for reaching out. Your message has been received
                    and I'll get back to you soon.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="shrink-0 text-[#4f4b46] transition hover:text-white"
                  aria-label="Close notification"
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
