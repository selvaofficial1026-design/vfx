"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 pointer-events-none",
        scrolled ? "top-6" : "top-0"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 pointer-events-auto px-6 md:px-8",
        scrolled 
          ? "bg-[#FAF7F2]/70 backdrop-blur-2xl py-4 rounded-full shadow-premium-hover border border-white/20 w-full md:w-fit md:min-w-[600px] md:justify-around" 
          : "bg-transparent py-10 w-full"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <div className={cn(
            "relative overflow-hidden rounded-full border border-cappuccino/30 group-hover:scale-105 transition-all duration-700 shadow-[0_0_15px_rgba(200,160,120,0.3)] flex items-center justify-center bg-coffee-dark",
            scrolled ? "w-10 h-10" : "w-14 h-14"
          )}>
            <span className={cn(
              "font-serif font-bold italic text-cappuccino tracking-tighter",
              scrolled ? "text-base" : "text-xl"
            )}>
              VFX
            </span>
          </div>
          <span className={cn(
            "font-serif font-bold tracking-tight transition-all duration-700",
            scrolled ? "text-xl" : "text-2xl md:text-3xl",
            scrolled ? "text-coffee-dark" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white" : "text-coffee-dark")
          )}>
            Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative group",
                scrolled ? "text-coffee-dark/60" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white/70" : "text-coffee-dark/60"),
                pathname === link.href && (scrolled ? "text-cappuccino" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white" : "text-coffee-dark")),
                "hover:text-cappuccino"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-[2px] bg-cappuccino transition-all duration-300 group-hover:w-full",
                pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            scrolled ? "text-coffee-dark" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white" : "text-coffee-dark")
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6 sm:p-10 gap-8 sm:gap-10 md:hidden pointer-events-auto"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl font-bold text-coffee-dark italic">Portfolio</span>
              <button onClick={() => setIsOpen(false)} className="text-coffee-dark">
                <X size={40} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-serif font-bold tracking-widest uppercase transition-colors duration-300",
                      pathname === link.href ? "text-cappuccino" : "text-coffee-dark hover:text-coffee-dark/70"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-coffee-dark/40 font-bold">Follow Us</p>
              <div className="flex gap-6 text-coffee-dark">
                <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
                <span className="text-sm font-bold uppercase tracking-widest">Twitter</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
