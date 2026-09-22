"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] shadow-2xl bg-white backdrop-blur-md border-b  border-slate-100 px-8 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xl font-sans hover:translate-y-[-2px] transition-transform font-bold text-slate-900">
          Stay<span className="text-amber-600">Line</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:translate-y-[-2px] hover:text-amber-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition"
        >
          Get a Quote
        </a>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-amber-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}