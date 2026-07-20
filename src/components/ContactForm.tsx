"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8 bg-white p-8 md:p-12 rounded-premium shadow-premium border border-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20"
          />
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Your Message</label>
        <textarea
          placeholder="How can we help you?"
          rows={4}
          className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20 resize-none"
        />
      </div>
      <button
        type="submit"
        className="group relative w-full py-5 bg-coffee-dark text-white rounded-full font-bold tracking-[0.2em] uppercase overflow-hidden transition-all shadow-premium hover:shadow-premium-hover active:scale-[0.98]"
      >
        <span className="relative z-10">Submit Inquiry</span>
        <div className="absolute inset-0 bg-cappuccino translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </motion.form>
  );
}
