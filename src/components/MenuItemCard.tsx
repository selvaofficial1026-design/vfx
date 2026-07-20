"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  is4K?: boolean;
  tag?: string;
  youtubeId?: string;
  index?: number;
}

export default function MenuItemCard({ name, description, price, image, category, is4K, tag, youtubeId, index = 0 }: MenuItemCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => youtubeId && setIsVideoOpen(true)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`group bg-white rounded-premium overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-cream/50 ${youtubeId ? 'cursor-pointer' : ''}`}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-coffee-dark/50 transition-colors duration-500" />
          
          {youtubeId && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
              <div className="w-12 h-12 bg-cappuccino rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,160,120,0.6)]">
                <Play className="text-white ml-1" size={24} />
              </div>
            </div>
          )}
          
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {category && (
              <div className="bg-cappuccino/90 backdrop-blur-md text-coffee-dark px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg w-fit">
                {category}
              </div>
            )}
            {tag && (
              <div className="bg-coffee-dark text-white px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg w-fit">
                {tag}
              </div>
            )}
          </div>

          {is4K !== undefined && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-xl border border-cream flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full border-2 ${is4K ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                <div className={`w-1 h-1 rounded-full ${is4K ? 'bg-green-600' : 'bg-red-600'}`} />
              </div>
              <span className={`text-[8px] font-bold uppercase tracking-widest ${is4K ? 'text-green-700' : 'text-red-700'}`}>
                {is4K ? '4K' : 'HD'}
              </span>
            </div>
          )}
        </div>
        <div className="p-5 md:p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-serif text-coffee-dark font-bold group-hover:text-cappuccino transition-colors duration-300 line-clamp-1">
              {name}
            </h3>
            <span className="text-cappuccino font-bold font-sans text-lg">{price}</span>
          </div>
          <p className="text-coffee-dark/60 text-xs font-sans line-clamp-2 leading-relaxed font-light min-h-[2.5rem]">
            {description}
          </p>
          <div className="mt-4 pt-4 border-t border-cream flex justify-center items-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-cappuccino font-bold">
              Available at VFX Studio
            </p>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && youtubeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-cappuccino transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-coffee-dark rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(200,160,120,0.2)] border border-white/10"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=1&rel=0`}
                title="VFX Project Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
