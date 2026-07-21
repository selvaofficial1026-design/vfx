"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PortfolioSlider, { PortfolioItem } from "@/components/PortfolioSlider";
import VideoModal from "@/components/VideoModal";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Compositing", "3D Animation", "Motion Graphics", "VFX"];

const portfolioItems: PortfolioItem[] = [
  // Compositing
  {
    name: "Explosion Comp",
    description: "Complex multipass compositing of pyrotechnics seamlessly integrated into live-action plates.",
    image: "/images/explosion.png",
    category: "Compositing",
    is4K: true,
    videoId: "dQw4w9WgXcQ" // Placeholder YouTube ID
  },
  {
    name: "Sci-Fi Matte Paint",
    description: "Seamless matte painting extensions for futuristic cityscape shots.",
    image: "/images/cyberpunk.png",
    category: "Compositing",
    is4K: true,
    videoId: "y9k-ndapeT0" // Another placeholder
  },
  {
    name: "Green Screen Extraction",
    description: "Flawless chroma keying and spill suppression with fine hair detail preservation.",
    image: "/images/node_graph.png",
    category: "Compositing",
    is4K: true,
    videoId: "ScMzIvxBSi4" 
  },

  // 3D Animation
  {
    name: "Cyberpunk Cityscape",
    description: "Fully 3D modeled and composited futuristic cityscape with volumetric lighting.",
    image: "/images/cyberpunk.png",
    category: "3D Animation",
    is4K: true,
    videoId: "dQw4w9WgXcQ"
  },
  {
    name: "Product Visualization",
    description: "Photorealistic 3D rendering of luxury products with perfect lighting setups.",
    image: "/images/node_graph.png",
    category: "3D Animation",
    is4K: true,
    videoId: "y9k-ndapeT0"
  },

  // Motion Graphics
  {
    name: "Holographic UI",
    description: "Intricate 3D holographic user interfaces designed for feature film screens.",
    image: "/images/node_graph.png",
    category: "Motion Graphics",
    is4K: true,
    videoId: "ScMzIvxBSi4"
  },
  {
    name: "Title Sequence",
    description: "Cinematic opening title sequences with dynamic typography and transitions.",
    image: "/images/explosion.png",
    category: "Motion Graphics",
    is4K: true,
    videoId: "dQw4w9WgXcQ"
  },

  // VFX
  {
    name: "Creature Animation",
    description: "High-fidelity creature animation with muscle simulation and photorealistic fur rendering.",
    image: "/images/creature.png",
    category: "VFX",
    is4K: true,
    videoId: "y9k-ndapeT0"
  },
  {
    name: "Fluid Simulation",
    description: "Realistic water and fluid simulations for large scale environment destruction.",
    image: "/images/explosion.png",
    category: "VFX",
    is4K: true,
    videoId: "ScMzIvxBSi4"
  },
  {
    name: "Particle Magic",
    description: "Complex particle systems driven by fluid dynamics for magical spell effects.",
    image: "/images/creature.png",
    category: "VFX",
    is4K: true,
    videoId: "dQw4w9WgXcQ"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const getCategoryCount = (category: string) => {
    if (category === "All") return portfolioItems.length;
    return portfolioItems.filter(item => item.category === category).length;
  };

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background">

      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cappuccino/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[50%] bg-coffee-dark/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative z-10 px-0 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-0">
          <SectionHeading 
            subtitle="Premium Visuals" 
            title="Explore Our Work" 
          />

          {/* Categories - Premium Tabs */}
          <div className="grid grid-cols-6 gap-x-2 gap-y-3 md:flex md:flex-wrap md:justify-center md:gap-6 mb-20 px-2 md:px-4">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative py-3 px-1 md:px-8 rounded-full text-[8.5px] md:text-xs font-bold tracking-wider md:tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden flex justify-center items-center",
                  index < 3 ? "col-span-2" : "col-span-3", // Mobile: Top row 3 items, Bottom row 2 items
                  activeCategory === cat 
                    ? "text-white shadow-xl scale-105" 
                    : "text-coffee-dark/50 hover:text-coffee-dark bg-white/50 hover:bg-white backdrop-blur-sm border border-cream hover:border-cappuccino/40 hover:shadow-[0_10px_25px_rgba(200,149,95,0.15)] hover:-translate-y-1 hover:scale-105"
                )}
              >
                <span className="relative z-10">{cat} <span className="opacity-50 ml-1">({getCategoryCount(cat)})</span></span>
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-coffee-dark"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Animated Slider */}
        <div className="w-full relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioSlider 
                items={filteredItems} 
                onPlay={(videoId) => setActiveVideo(videoId)} 
                isPaused={!!activeVideo}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* YouTube Video Modal */}
      <VideoModal 
        isOpen={!!activeVideo} 
        videoId={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />


    </main>
  );
}
