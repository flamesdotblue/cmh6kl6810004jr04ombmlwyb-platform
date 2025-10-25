import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-emerald-600" />
              <span className="text-lg font-semibold">DairyFlow</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Streamlining wholesale–retail milk distribution with clarity and control.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><a className="hover:text-neutral-900" href="#features">Features</a></li>
              <li><a className="hover:text-neutral-900" href="#benefits">Benefits</a></li>
              <li><a className="hover:text-neutral-900" href="#get-started">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-neutral-700">Email: hello@dairyflow.in</p>
            <p className="text-sm text-neutral-700">Phone: +91 98765 43210</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-4 flex max-w-sm items-center gap-2">
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-emerald-600 focus:ring"
              />
              <button className="whitespace-nowrap rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Enquire</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} DairyFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
