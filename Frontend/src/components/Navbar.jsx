import { Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Engineering",
    path: "/engineering",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "GitHub",
    path: "/github",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#070707]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-[#c9a15a]/60 font-serif text-lg text-[#d8b56c] transition duration-300 group-hover:bg-[#c9a15a] group-hover:text-black">
            A
          </span>

          <span className="font-sans text-[14px] font-bold tracking-[0.25em]">
            ASIF<span className="text-[#c9a15a]">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "relative font-mono text-[10px] uppercase tracking-[0.14em] transition duration-300",
                  isActive
                    ? "text-white"
                    : "text-[#77736c] hover:text-white",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#c9a15a]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-2 inline-flex h-10 items-center gap-2 border border-[#c9a15a]/50 px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#d8b56c] transition duration-300 hover:bg-[#c9a15a] hover:text-black"
          >
            Let's Talk
            <MoveUpRight size={14} />
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={[
          "border-t border-white/[0.07] bg-[#070707] px-5 transition-all duration-300 lg:hidden",
          mobileOpen
            ? "max-h-[600px] py-6 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden py-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-[1240px] flex-col">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  "border-b border-white/[0.06] py-4 font-mono text-[11px] uppercase tracking-[0.15em]",
                  isActive ? "text-[#d8b56c]" : "text-[#858079]",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 inline-flex h-12 items-center justify-center gap-2 bg-[#c9a15a] font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black"
          >
            Let's Talk
            <MoveUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
