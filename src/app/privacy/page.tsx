"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "July 21, 2026";

  const policies = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "When you interact with VFX Studio, we may collect personal information such as your name, email address, phone number, and project details. This occurs when you fill out our contact form, request a project quote, or subscribe to our communications."
    },
    {
      icon: Database,
      title: "How We Use Your Data",
      content: "We utilize your information strictly for professional purposes: to respond to your inquiries, provide accurate project estimates, send relevant studio updates, and continuously improve our digital services and user experience."
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: "As a studio handling highly confidential intellectual property, we implement enterprise-grade security protocols. Your personal information is encrypted and stored in secure networks, accessible only by a limited number of authorized personnel who are required to keep the information confidential."
    },
    {
      icon: Shield,
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cappuccino/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionHeading subtitle="Legal" title="Privacy Policy" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-coffee-dark/40 mt-8">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-stone max-w-none text-coffee-dark/70 font-light text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-20"
          >
            <p>
              At VFX Studio, we are committed to engineering the impossible on screen while maintaining absolute trust and transparency off screen. This privacy policy outlines our unwavering commitment to protecting your personal and professional data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group bg-white p-10 rounded-[2rem] border border-cream shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.15)] active:shadow-[0_20px_50px_rgba(200,149,95,0.15)] hover:-translate-y-2 active:-translate-y-1 transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}
              >
                <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-cappuccino mb-6 group-hover:bg-cappuccino group-active:bg-cappuccino group-hover:text-white group-active:text-white transition-colors duration-500 shadow-sm">
                  <policy.icon size={24} />
                </div>
                <h2 className="text-2xl font-serif italic text-coffee-dark mb-4">
                  {policy.title}
                </h2>
                <p className="text-coffee-dark/60 font-light leading-relaxed">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 p-10 md:p-12 bg-coffee-dark rounded-[2rem] text-white text-center shadow-premium relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-serif italic text-cappuccino mb-4">Questions About Privacy?</h2>
              <p className="text-white/80 font-light max-w-xl mx-auto mb-8">
                If you have any concerns about how your data is handled, our legal and security team is here to help.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-cappuccino text-coffee-dark font-bold text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(200,149,95,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
