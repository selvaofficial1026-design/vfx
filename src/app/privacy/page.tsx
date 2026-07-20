"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background">
      <Navbar />
      <section className="px-6 md:px-12 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-coffee-dark mb-10 italic">Privacy Policy</h1>
        <div className="prose prose-stone max-w-none text-coffee-dark/70 font-light space-y-6">
          <p>Effective Date: April 24, 2026</p>
          <p>At VFX Studio, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">Information We Collect</h2>
          <p>We may collect your name, email address, and phone number when you fill out our contact form or subscribe to our newsletter.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide updates about our VFX Studio, and improve our services.</p>
          <h2 className="text-2xl font-serif text-coffee-dark mt-10">Data Protection</h2>
          <p>We implement appropriate security measures to maintain the safety of your personal information.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
