"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Subtle parallax: 0.3x speed. Disabled on mobile for performance.
  const yBg = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 240]);
  const yContent = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse movement for subtle 3D tilt (max 5deg)
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 10; // Max 5deg each way
    const y = (clientY / innerHeight - 0.5) * -10;
    setRotateX(y);
    setRotateY(x);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden p-0 perspective-1000"
    >
      {/* Background Image with Pro Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/hero_premium.png"
          alt="VFX Studio Premium Environment"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover brightness-[0.50]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        style={{ 
          y: yContent, 
          opacity,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-20 text-center px-6 sm:px-12 max-w-5xl transition-transform duration-200 ease-out pt-24 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-cappuccino/40 rounded-full text-cappuccino text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase backdrop-blur-md bg-black/20 shadow-lg">
            Welcome to the Hub of Visual Excellence
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white mb-8 sm:mb-10 md:mb-12 tracking-tight leading-[1.1] text-balance drop-shadow-2xl">
            Stunning Visuals. <br />
            <span className="italic font-normal text-cappuccino drop-shadow-xl">A Refined Experience.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <Magnetic>
              <Link
                href="/portfolio"
                className="group relative w-full sm:w-auto px-12 py-5 bg-cappuccino text-coffee-dark rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all shadow-premium hover:shadow-premium-hover active:scale-95 flex items-center justify-center"
              >
                <span className="relative z-10">Explore Portfolio</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-12 py-5 border-2 border-white/80 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-coffee-dark transition-all backdrop-blur-sm shadow-premium active:scale-95 flex items-center justify-center"
              >
                Visit Us
              </Link>
            </Magnetic>
          </div>
        </motion.div>

      </motion.div>


      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[05px] uppercase tracking-[0.3em] text-white/60 font-bold">Start your journey</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-cappuccino to-transparent" />
      </motion.div>
    </section>
  );
}
