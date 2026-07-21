"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, MonitorPlay, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative overflow-hidden">

      
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
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.25)] group active:scale-[0.98] transition-all duration-500 cursor-pointer">
              <Image 
                src="/images/hero_premium.png" 
                alt="Our Main Studio Infrastructure" 
                fill 
                quality={100}
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-16">
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
                className={cn(
                  "text-center group active:scale-[0.98] transition-transform duration-300 cursor-pointer focus:outline-none",
                  i === 0 ? "col-span-2 md:col-span-1" : "col-span-1"
                )}
                tabIndex={0}
              >
                <div className={cn(
                  "relative rounded-[2rem] overflow-hidden mb-4 md:mb-8 shadow-premium",
                  i === 0 ? "aspect-square md:aspect-[3/4]" : "aspect-[3/4]"
                )}>
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-lg md:text-2xl font-serif text-coffee-dark italic">{member.name}</h4>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest md:tracking-[0.3em] text-cappuccino font-bold mt-1 md:mt-2">{member.role}</p>
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
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mt-16">
            
            {/* Image 1: Compositing Suites (Full Mobile, 3 Desktop) */}
            <div className="group col-span-2 lg:col-span-3 aspect-[4/3] lg:aspect-video relative rounded-[2rem] overflow-hidden shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.25)] active:shadow-[0_20px_50px_rgba(200,149,95,0.25)] hover:-translate-y-2 active:-translate-y-2 active:scale-[0.98] transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}>
              <Image src="/images/hero.png" alt="Compositing Suites" fill quality={100} className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-10">
                <span className="text-white font-serif text-2xl md:text-3xl font-bold translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 drop-shadow-lg">Compositing Suites</span>
              </div>
            </div>

            {/* Image 2: Color Grading Suite (Half Mobile, 2 Desktop) */}
            <div className="group col-span-1 lg:col-span-2 aspect-square relative rounded-[2rem] overflow-hidden shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.25)] active:shadow-[0_20px_50px_rgba(200,149,95,0.25)] hover:-translate-y-2 active:-translate-y-2 active:scale-[0.98] transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}>
              <Image src="/images/hero_branded.png" alt="Color Grading Suite" fill quality={100} className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-8">
                <span className="text-white font-serif text-base md:text-2xl font-bold translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 drop-shadow-lg">Color Grading</span>
              </div>
            </div>

            {/* Image 3: Render Farm (Half Mobile, 2 Desktop) */}
            <div className="group col-span-1 lg:col-span-2 aspect-square relative rounded-[2rem] overflow-hidden shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.25)] active:shadow-[0_20px_50px_rgba(200,149,95,0.25)] hover:-translate-y-2 active:-translate-y-2 active:scale-[0.98] transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}>
              <Image src="/images/coffee.png" alt="High-Performance Render Farm" fill quality={100} className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-8">
                <span className="text-white font-serif text-base md:text-2xl font-bold translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 drop-shadow-lg">Render Farm</span>
              </div>
            </div>

            {/* Image 4: Client Review Area (Full Mobile, 3 Desktop) */}
            <div className="group col-span-2 lg:col-span-3 aspect-[4/3] lg:aspect-video relative rounded-[2rem] overflow-hidden shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.25)] active:shadow-[0_20px_50px_rgba(200,149,95,0.25)] hover:-translate-y-2 active:-translate-y-2 active:scale-[0.98] transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}>
              <Image src="/images/hero_premium.png" alt="Client Viewing and Review Area" fill quality={100} className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-10">
                <span className="text-white font-serif text-2xl md:text-3xl font-bold translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 drop-shadow-lg">Client Review Area</span>
              </div>
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-16">
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
                className="group p-6 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-cream hover:border-cappuccino/30 active:border-cappuccino/30 shadow-premium hover:shadow-[0_20px_40px_rgba(200,149,95,0.12)] active:shadow-[0_20px_40px_rgba(200,149,95,0.12)] hover:-translate-y-2 active:-translate-y-1 transition-all duration-500 cursor-pointer focus:outline-none" tabIndex={0}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-background group-hover:bg-cappuccino group-active:bg-cappuccino group-hover:shadow-[0_0_20px_rgba(200,149,95,0.3)] group-active:shadow-[0_0_20px_rgba(200,149,95,0.3)] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-cappuccino group-hover:text-white group-active:text-white transition-all duration-500 group-hover:scale-110 group-active:scale-110">
                  <value.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h4 className="text-sm md:text-xl font-bold text-coffee-dark mb-2 md:mb-3 tracking-tight">{value.title}</h4>
                <p className="text-[10px] md:text-sm text-coffee-dark/60 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
