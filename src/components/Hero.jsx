import React from "react";
import { Rocket, Calendar, Package, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100 via-white to-white" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 md:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
            <Rocket className="h-4 w-4" />
            <span className="text-xs font-semibold">Modernize your dairy operations</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            DairyFlow — Wholesale to Retail, Streamlined
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            A clean, reliable website for milk product wholesalers and retailers. Browse catalogues, place bulk orders in advance, and manage deliveries with less effort and zero confusion.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3" id="get-started">
            <a href="#features" className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Explore Features</a>
            <a href="#contact" className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">Contact Sales</a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <dt className="font-semibold">Advance Scheduling</dt>
                <dd className="text-neutral-600">Orders placed at least one day ahead ensure smooth logistics.</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <dt className="font-semibold">Catalog Clarity</dt>
                <dd className="text-neutral-600">Live product list with categories like milk, curd, butter, ghee, paneer, and cheese.</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <dt className="font-semibold">Delivery Ready</dt>
                <dd className="text-neutral-600">Consolidated delivery schedules and daily dispatch view.</dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-5 text-white">
                <p className="text-sm opacity-90">DairyFlow Dashboard</p>
                <h3 className="mt-1 text-xl font-semibold">Today at a glance</h3>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">128</p>
                    <p className="text-xs opacity-90">Units in transit</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">32</p>
                    <p className="text-xs opacity-90">Orders queued</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">92%</p>
                    <p className="text-xs opacity-90">On-time rate</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-neutral-200 p-4">
                  <p className="text-sm font-semibold">Retailer Portal</p>
                  <p className="mt-1 text-sm text-neutral-600">Browse products, create carts, and schedule deliveries.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 p-4">
                  <p className="text-sm font-semibold">Admin Control</p>
                  <p className="mt-1 text-sm text-neutral-600">Manage catalog, stock, and approvals from one place.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-300/50 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
