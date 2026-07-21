"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuItemCard from "@/components/MenuItemCard";
import SectionHeading from "@/components/SectionHeading";
import VideoModal from "@/components/VideoModal";
import { Star, User2 } from "lucide-react";
import { motion } from "framer-motion";


const featuredItems = [
  {
    name: "Cyberpunk Cityscape",
    description: "Fully 3D modeled and composited futuristic cityscape with volumetric lighting and dynamic crowds.",
    price: "Premium",
    image: "/images/cyberpunk.png",
    category: "3D Animation",
    youtubeId: "vBmwGEGza2E"
  },
  {
    name: "Creature Animation",
    description: "High-fidelity creature animation with muscle simulation and photorealistic fur rendering.",
    price: "Custom",
    image: "/images/creature.png",
    category: "VFX",
    youtubeId: "Wn9V7n6aB58"
  },
  {
    name: "Explosion Comp",
    description: "Complex multipass compositing of pyrotechnics seamlessly integrated into live-action plates.",
    price: "Standard",
    image: "/images/explosion.png",
    category: "Compositing",
    youtubeId: "K-t_sL8E8e8"
  }
];

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Film Director",
    quote: "The visual effects are unmatched. Every frame of their compositing feels like magic. Definitely my go-to studio in Tamil Nadu."
  },
  {
    name: "Sowmya Venkat",
    role: "Producer",
    quote: "VFX Studio has perfected the art of storytelling through visuals. Their 3D animation is authentic and easily the best I've seen in years."
  }
];

const capabilities = [
  "3D ANIMATION", 
  "COMPOSITING", 
  "MOTION GRAPHICS", 
  "CREATURE FX", 
  "MATTE PAINTING",
  "PREVISUALIZATION"
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-premium-gradient relative z-10" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Showcase"
            title="Explore Our Featured Projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {featuredItems.map((item, index) => (
              <MenuItemCard 
                key={index} 
                index={index} 
                {...item} 
                onPlay={(id) => setActiveVideo(id)}
              />
            ))}
          </div>
          <div className="mt-16 md:mt-20 text-center">
            <Link href="/portfolio">
              <button className="px-12 py-5 bg-coffee-dark text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-cappuccino transition-all shadow-premium hover:shadow-premium-hover active:scale-95">
                View Full Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Condensed About Section */}
      <section id="about" className="py-20 md:py-24 px-6 md:px-12 bg-white overflow-hidden relative z-10" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-[10px] uppercase tracking-[0.5em] text-cappuccino font-bold mb-6 block">Our Legacy</span>
           <h2 className="text-4xl md:text-6xl font-serif text-coffee-dark italic leading-tight mb-8">
             Crafting Impossible Worlds
           </h2>
           <p className="text-coffee-dark/70 leading-relaxed text-lg font-light max-w-2xl mx-auto">
             Founded by Ravi Arasu, VFX Studio is an elite destination for directors who demand visual perfection. From photorealistic creature animation to seamless set extensions, our award-winning artists treat every frame as a masterpiece.
           </p>
        </div>
      </section>

      {/* Continuous Capabilities Ticker */}
      <section className="py-12 bg-coffee-dark overflow-hidden border-y border-white/10">
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-12 whitespace-nowrap px-6"
          >
            {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((cap, i) => (
              <React.Fragment key={i}>
                <span className="text-xl md:text-3xl font-bold font-serif italic text-white/80 tracking-widest">
                  {cap}
                </span>
                <span className="text-cappuccino text-3xl opacity-50">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pro Level Parallax Divider */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          viewport={{ once: false }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/node_graph.png"
            alt="Close-up of a complex 3D node graph"
            fill
            sizes="100vw"
            className="object-cover opacity-90 brightness-[0.3]"
          />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-bold mb-6 block">The Standard</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white italic">Epic. Seamless. Perfect.</h2>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-background relative z-10" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Voices of Excellence"
            title="Loved by Visionary Directors"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-coffee-dark p-8 md:p-10 rounded-[2rem] text-white flex flex-col justify-between shadow-premium hover:shadow-[0_20px_50px_rgba(200,160,120,0.2)] transition-all relative overflow-hidden group border border-white/5"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cappuccino/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cappuccino/15 transition-colors duration-500 blur-xl" />
                <Star className="text-cappuccino absolute top-8 right-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" size={24} fill="currentColor" />
                
                <p className="text-lg font-serif leading-relaxed mb-8 italic relative z-10 text-white/90">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cappuccino/20 flex items-center justify-center text-cappuccino shadow-lg group-hover:bg-cappuccino group-hover:text-coffee-dark transition-colors duration-500">
                    <User2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">{test.name}</h4>
                    <p className="text-cappuccino font-sans text-[10px] font-bold uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={!!activeVideo} 
        videoId={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </main>
  );
}
