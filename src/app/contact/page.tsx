"use client";

import React, { useRef, useState } from "react";
import { MapPin, Phone, Building2, Globe, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setIsSubmitting(false);
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative overflow-hidden">

      
      {/* Immersive Contact Hero */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_premium.png"
            alt="VFX Studio"
            fill
            className="object-cover brightness-[0.3] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
           <span className="inline-block px-6 py-2 mb-6 border border-cappuccino/40 rounded-full text-cappuccino text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md bg-white/5 shadow-[0_0_15px_rgba(200,160,120,0.2)]">
            To Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
            Get in Touch
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            
            {/* Primary Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-cappuccino font-bold">Project Inquiries</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark italic leading-tight">We look forward to <br/> crafting your vision.</h2>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8">
                {[
                  { icon: MapPin, title: "Main Studio", detail: "18, Usman Street, Opp Dmart, Ariyalur - 621704" },
                  { icon: Phone, title: "Direct Line", detail: "+91 87789 31958" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-6 p-8 rounded-[1.5rem] bg-white border border-cream hover:border-cappuccino/30 transition-all duration-500 shadow-premium hover:shadow-premium-hover active:scale-[0.98] active:bg-cream/10 active:shadow-inner cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center shrink-0 group-hover:bg-coffee-dark group-hover:text-white transition-all duration-500 text-cappuccino group-active:scale-90">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-coffee-dark/80 mb-2 uppercase tracking-[0.2em] text-[10px]">{item.title}</h4>
                      <p className="text-coffee-dark text-lg font-bold">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* EmailJS Contact Form - WORLD CLASS UI UPGRADE */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex flex-col justify-center"
            >
              <div className="bg-[#0f0f0f]/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(200,149,95,0.2)] active:shadow-[0_20px_50px_rgba(200,149,95,0.2)] hover:-translate-y-2 active:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-white/10 hover:border-cappuccino/30 active:border-cappuccino/30 h-fit group/form cursor-default focus:outline-none" tabIndex={-1}>
                
                {/* Subtle Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cappuccino/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-focus-within/form:opacity-100" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cappuccino/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px] pointer-events-none" />
                
                <div className="space-y-2 mb-8 relative z-10">
                  <h3 className="text-cappuccino text-[10px] uppercase tracking-[0.4em] font-bold">Direct Message</h3>
                  <h2 className="text-3xl font-serif italic text-white">Project Queries</h2>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    
                    {/* Floating Label Input - Name */}
                    <div className="relative group pt-4">
                      <input 
                        type="text" 
                        id="user_name"
                        name="user_name" 
                        required
                        className="peer w-full bg-transparent border-b border-white/20 rounded-none px-0 py-2 text-white focus:outline-none transition-colors text-sm font-light placeholder-transparent"
                        placeholder="Full Name"
                      />
                      <label 
                        htmlFor="user_name"
                        className="absolute left-0 top-6 text-white/40 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cappuccino peer-focus:font-bold peer-valid:top-0 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-white/60 peer-valid:font-bold"
                      >
                        Full Name
                      </label>
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cappuccino transition-all duration-500 ease-out group-focus-within:w-full shadow-[0_0_10px_rgba(200,160,120,0.5)]" />
                    </div>

                    {/* Floating Label Input - Email */}
                    <div className="relative group pt-4">
                      <input 
                        type="email" 
                        id="user_email"
                        name="user_email" 
                        required
                        className="peer w-full bg-transparent border-b border-white/20 rounded-none px-0 py-2 text-white focus:outline-none transition-colors text-sm font-light placeholder-transparent"
                        placeholder="Email Address"
                      />
                      <label 
                        htmlFor="user_email"
                        className="absolute left-0 top-6 text-white/40 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cappuccino peer-focus:font-bold peer-valid:top-0 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-white/60 peer-valid:font-bold"
                      >
                        Email Address
                      </label>
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cappuccino transition-all duration-500 ease-out group-focus-within:w-full shadow-[0_0_10px_rgba(200,160,120,0.5)]" />
                    </div>
                  </div>

                  {/* Floating Label Input - Subject */}
                  <div className="relative group pt-4">
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      required
                      className="peer w-full bg-transparent border-b border-white/20 rounded-none px-0 py-2 text-white focus:outline-none transition-colors text-sm font-light placeholder-transparent"
                      placeholder="Subject"
                    />
                    <label 
                      htmlFor="subject"
                      className="absolute left-0 top-6 text-white/40 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cappuccino peer-focus:font-bold peer-valid:top-0 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-white/60 peer-valid:font-bold"
                    >
                      Subject
                    </label>
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cappuccino transition-all duration-500 ease-out group-focus-within:w-full shadow-[0_0_10px_rgba(200,160,120,0.5)]" />
                  </div>

                  {/* Floating Label Textarea - Message */}
                  <div className="relative group pt-4">
                    <textarea 
                      id="message"
                      name="message" 
                      required
                      rows={2}
                      className="peer w-full min-h-[60px] bg-transparent border-b border-white/20 rounded-none px-0 py-2 text-white focus:outline-none transition-colors text-sm font-light resize-none placeholder-transparent"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-6 text-white/40 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-cappuccino peer-focus:font-bold peer-valid:top-0 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-white/60 peer-valid:font-bold"
                    >
                      Message
                    </label>
                    <div className="absolute bottom-1 left-0 h-[1px] w-0 bg-cappuccino transition-all duration-500 ease-out group-focus-within:w-full shadow-[0_0_10px_rgba(200,160,120,0.5)]" />
                  </div>

                  <div className="pt-8 flex items-center justify-between">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-cappuccino text-coffee-dark rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(200,160,120,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group/btn relative overflow-hidden active:scale-[0.98] active:shadow-inner"
                    >
                      {/* Button Hover Sweep Effect */}
                      <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
                      
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin relative z-10" /> <span className="relative z-10">Sending</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span> <Send size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                    
                    {/* Status Messages */}
                    <div className="flex-1 flex justify-end">
                      {status === "success" && (
                        <motion.span initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="text-green-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                          Message Sent ✓
                        </motion.span>
                      )}
                      {status === "error" && (
                        <motion.span initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} className="text-red-400 text-[10px] font-bold uppercase tracking-wider">
                          Transmission Failed
                        </motion.span>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Global Headquarters Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group mt-20 flex flex-col md:flex-row gap-8 items-center bg-white rounded-[3rem] p-12 lg:p-16 border border-cream hover:border-cappuccino/30 shadow-premium hover:shadow-[0_20px_50px_rgba(200,149,95,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-default"
          >
             <div className="w-24 h-24 bg-background group-hover:bg-cappuccino group-hover:shadow-[0_0_30px_rgba(200,149,95,0.4)] rounded-full flex items-center justify-center shrink-0 border border-cappuccino/30 text-cappuccino group-hover:text-white transition-all duration-500 hidden md:flex">
                <Globe size={40} />
             </div>
             
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-cappuccino text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Global Headquarters</h3>
               <h4 className="text-3xl md:text-4xl font-serif text-coffee-dark italic mb-4">Our Production Facility</h4>
               <p className="text-coffee-dark/60 leading-relaxed font-light max-w-2xl">
                 Equipped with state-of-the-art render farms and highly secure compositing suites, our primary studio is located opposite D-Mart on Usman Street, Ariyalur. 
               </p>
             </div>

             <div className="shrink-0 flex items-center gap-4">
               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-coffee-dark text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-cappuccino transition-all flex items-center gap-2">
                 <Building2 size={16} /> View on Map
               </a>
             </div>
          </motion.div>
          
        </div>
      </section>


    </main>
  );
}
