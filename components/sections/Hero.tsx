"use client";

import { motion } from "framer-motion";
import { ArcaneButton } from "../ui/ArcaneUI";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Image
          src="/gamingbg.png"
          alt="Cute Gaming Arcade Background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center pointer-events-none">
        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          <div className="bg-white/60 backdrop-blur-md border-4 border-white rounded-[3rem] p-8 md:p-16 shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))]">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground font-black uppercase tracking-widest text-sm shadow-sm"
            >
              Start Game • Level 9999
            </motion.div>

            <motion.h1
              className="text-6xl md:text-9xl font-black mb-6 text-primary tracking-tighter"
              style={{
                textShadow:
                  "4px 4px 0px white, 6px 6px 0px hsl(var(--shadow-color))",
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              FULL{" "}
              <span className="text-secondary inline-block transform hover:rotate-3 transition-transform">
                STACK
              </span>
            </motion.h1>

            <p className="text-lg md:text-2xl font-bold text-neutral-600 max-w-2xl mb-8 leading-relaxed mx-auto">
         Bug-catching spider <span className="text-primary">by night. 🕷️</span>
              
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto">
              <ArcaneButton href="#projects" variant="primary">
                Play
              </ArcaneButton>
              <ArcaneButton href="#contact" variant="secondary">
                Contact Me
              </ArcaneButton>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 z-30 animate-bounce pointer-events-none">
        <div className="bg-white px-6 py-2 rounded-full font-bold text-black border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          SCROLL TO START
        </div>
      </div>
    </section>
  );
}
