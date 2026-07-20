"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background">
      <Navbar />
      <section className="px-6 md:px-12 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-coffee-dark mb-10 italic">Terms of Service</h1>
        <div className="prose prose-stone max-w-none text-coffee-dark/70 font-light space-y-6">
          <p>Effective Date: April 24, 2026</p>
          <p>By using the VFX Studio website, you agree to the following terms and conditions.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">Use of Site</h2>
          <p>This website is for your personal and non-commercial use. You may not modify, copy, or distribute any content without our permission.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">Reservations</h2>
          <p>Reservations made through our contact form are subject to availability and confirmation by our staff.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Your continued use of the site signifies your acceptance of any changes.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
