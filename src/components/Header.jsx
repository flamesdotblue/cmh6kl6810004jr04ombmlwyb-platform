import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-600" />
          <span className="text-xl font-semibold tracking-tight">DairyFlow</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Features</a>
          <a href="#benefits" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Benefits</a>
          <a href="#contact" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Contact</a>
          <a href="#get-started" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Get Started</a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto block max-w-7xl px-4 pb-4 md:hidden">
          <div className="grid gap-2 rounded-lg border border-neutral-200 bg-white p-3">
            <a href="#features" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-50">Features</a>
            <a href="#benefits" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-50">Benefits</a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-50">Contact</a>
            <a href="#get-started" onClick={() => setOpen(false)} className="rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
