import React from "react";
import { User, Package, ShoppingCart, Database, BarChart, Shield, Truck, Calendar } from "lucide-react";

const features = [
  {
    icon: User,
    title: "User Registration & Login",
    desc: "Secure access for wholesalers (admin) and retailers. Role-based views with strong passwords and session security.",
  },
  {
    icon: Package,
    title: "Product Management",
    desc: "Admins can add, update, and manage product categories like milk, curd, butter, ghee, paneer, and cheese.",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    desc: "Retailers browse the catalogue, place bulk orders, and choose preferred delivery dates in advance.",
  },
  {
    icon: Calendar,
    title: "Delivery Scheduling",
    desc: "Orders are validated to be at least one day ahead, enabling reliable routing and stock planning.",
  },
  {
    icon: Truck,
    title: "Approval & Dispatch",
    desc: "Admins approve orders against stock, generate daily delivery lists, and track dispatch status.",
  },
  {
    icon: Database,
    title: "MySQL Data Backbone",
    desc: "All users, products, orders, and delivery data stored securely for transparent records and reporting.",
  },
  {
    icon: BarChart,
    title: "Reporting Suite",
    desc: "Daily delivery sheets, order history, and business summaries to help you plan and grow.",
  },
  {
    icon: Shield,
    title: "Reliability & Control",
    desc: "Reduce miscommunication and manual errors with a structured, auditable workflow.",
  },
];

export default function Modules() {
  return (
    <section id="features" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to digitize dairy ordering</h2>
          <p className="mt-3 text-neutral-600">
            DairyFlow brings wholesalers and retailers onto a single, easy-to-use platform built for India.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="benefits" className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-emerald-600 to-emerald-500 p-6 text-white lg:col-span-2">
            <h3 className="text-xl font-semibold">Why wholesalers choose DairyFlow</h3>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm marker:text-white/70">
              <li>Centralized catalog and inventory updates</li>
              <li>Advance order visibility for better procurement</li>
              <li>Daily routes and delivery run sheets in one place</li>
              <li>Clean records for audits and performance tracking</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Talk to us</a>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Built for retailers too</h3>
            <p className="mt-2 text-sm text-neutral-600">Browse products with clear pricing, place bulk orders with a simple cart, and get on-time deliveries.</p>
            <div className="mt-6 rounded-lg border border-dashed border-neutral-300 p-4 text-sm text-neutral-700">
              Coming soon: retailer self-signup, order history exports, and WhatsApp notifications.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
