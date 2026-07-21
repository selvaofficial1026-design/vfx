import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Heart, Star, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cappuccino/5 rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-12 mb-16 md:mb-20 relative z-10">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-4 mb-8 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-cappuccino/30 shadow-[0_0_15px_rgba(200,160,120,0.2)] flex items-center justify-center bg-white/5 group-hover:bg-cappuccino/10 transition-colors duration-500">
              <span className="font-serif font-bold italic text-cappuccino tracking-tighter text-lg">
                VFX
              </span>
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight italic text-white">
              Studio
            </span>
          </Link>
          <p className="text-white/60 leading-relaxed mb-8 font-light text-base">
            Establishing a new standard for visual excellence.
            Crafting premium visuals, one frame at a time.
          </p>
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cappuccino hover:text-coffee-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cappuccino hover:text-coffee-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cappuccino hover:text-coffee-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-serif text-lg md:text-xl font-bold mb-6 md:mb-8 italic text-cappuccino">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm md:text-base">
            <li><Link href="/" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Our Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> About Us</Link></li>
            <li><Link href="/contact" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Find Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-serif text-lg md:text-xl font-bold mb-6 md:mb-8 italic text-cappuccino">Contact Us</h4>
          <ul className="space-y-6 text-white/60">
            <li className="flex gap-3 md:gap-4 items-start group cursor-pointer active:scale-95 transition-all duration-300">
              <MapPin className="text-cappuccino shrink-0 mt-0.5 md:mt-1 group-hover:scale-125 group-active:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] group-active:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] transition-all duration-300 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm leading-relaxed group-hover:text-white group-active:text-white transition-colors duration-300">18, Usman Street, Opp to Dmart, Ariyalur - 621704</span>
            </li>
            <li className="flex gap-3 md:gap-4 items-center group cursor-pointer active:scale-95 transition-all duration-300">
              <Phone className="text-cappuccino shrink-0 group-hover:scale-125 group-active:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] group-active:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] transition-all duration-300 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm group-hover:text-white group-active:text-white transition-colors duration-300">+91 87789 31958</span>
            </li>
          </ul>
        </div>


      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">
        <p>© {new Date().getFullYear()} VFX Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="group relative hover:text-white transition-colors duration-300">
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cappuccino transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(200,149,95,0.8)]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
