"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, MonitorPlay, Zap, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_story.png"
            alt="VFX Artist at work"
            fill
            className="object-cover brightness-[0.4] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
           <span className="inline-block px-6 py-2 mb-6 border border-cappuccino/40 rounded-full text-cappuccino text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md bg-white/5">
            Our Story
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-4 italic">
            A Legacy of Vision
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeading
                subtitle="The Foundation"
                title="Since 2008: Engineering the Impossible"
                centered={false}
              />
              <p className="text-coffee-dark/70 text-xl font-light leading-relaxed mb-8">
                It started with a simple objective—combining bleeding-edge technology with world-class artistry to bring impossible worlds to life on the silver screen.
              </p>
              <p className="text-coffee-dark/60 leading-relaxed mb-10">
                To us, visual effects is not just software trickery; it is the ultimate tool for cinematic storytelling. In 2008, VFX Studio was established to push the boundaries of what is visually possible. 
                From rigorous pre-visualization to complex fluid simulations and seamless compositing, every frame we deliver is engineered for perfection.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif text-coffee-dark italic mb-2">2008</h4>
                  <p className="text-[10px] uppercase tracking-widest text-coffee-dark/40 font-bold">Year Founded</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-coffee-dark italic mb-2">50k+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-coffee-dark/40 font-bold">VFX Shots Delivered</p>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-cream">
                <p className="text-2xl font-serif text-coffee-dark italic leading-relaxed">
                  &quot;We aren&apos;t just rendering pixels; we are building the visual foundation for your most ambitious stories.&quot;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-cappuccino" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-coffee-dark/60">Ravi Arasu, Lead VFX Supervisor</span>
                </div>
              </div>
            </motion.div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-premium group active:scale-[0.98] transition-transform duration-500 cursor-pointer">
              <Image 
                src="/images/hero_premium.png" 
                alt="Our Main Studio Infrastructure" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Technical Artists"
            title="Meet the Visionaries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { name: "Ravi Arasu", role: "Founder & VFX Supervisor", image: "/images/ravi.png" },
              { name: "Anushuya", role: "Head of 3D Pipeline", image: "/images/anushuya.png" },
              { name: "Saravanan Velu", role: "Lead Compositor", image: "/images/saravanan.png" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group active:scale-[0.98] transition-transform duration-300 cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 shadow-premium">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-2xl font-serif text-coffee-dark italic">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cappuccino font-bold mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-32 px-6 md:px-12 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Infrastructure"
            title="State of the Art Facilities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="lg:col-span-2 aspect-video relative rounded-[2rem] overflow-hidden shadow-premium active:scale-[0.98] transition-transform duration-500 cursor-pointer">
              <Image src="/images/hero.png" alt="Compositing Suites" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-premium active:scale-[0.98] transition-transform duration-500 cursor-pointer">
              <Image src="/images/hero_branded.png" alt="Color Grading Suite" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-premium active:scale-[0.98] transition-transform duration-500 cursor-pointer">
              <Image src="/images/coffee.png" alt="High-Performance Render Farm" fill className="object-cover" />
            </div>
            <div className="lg:col-span-2 aspect-video relative rounded-[2rem] overflow-hidden shadow-premium active:scale-[0.98] transition-transform duration-500 cursor-pointer">
              <Image src="/images/hero_premium.png" alt="Client Viewing and Review Area" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Standards"
            title="What Defines Us"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Target, title: "Precision", desc: "Pixel-perfect tracking and seamless integration in every single shot." },
              { icon: MonitorPlay, title: "Innovation", desc: "Leveraging the latest in AI and real-time rendering technologies." },
              { icon: Cpu, title: "Scale", desc: "A robust render farm capable of handling massive cinematic sequences." },
              { icon: Zap, title: "Dedication", desc: "We deliver on time, meeting the industry's most grueling deadlines." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2rem] border border-cream shadow-premium hover:shadow-premium-hover transition-all"
              >
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 text-cappuccino">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-coffee-dark mb-3 tracking-tight">{value.title}</h4>
                <p className="text-sm text-coffee-dark/60 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
