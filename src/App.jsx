import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Modules />
      </main>
      <Footer />
    </div>
  );
}
