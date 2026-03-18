"use client";

import Section from "./Section";
import { Code, Palette, Zap, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend",
    icon: <Globe className="text-black" />,
    desc: "Html, Css, Scss, Tailwind, Javascript, TypeScript, React.js, Redux,  Next.js",
  },
  {
    name: "UI/UX",
    icon: <Palette className="text-black" />,
    desc: "Figma, Framer Motion",
  },
  {
    name: "Performance",
    icon: <Zap className="text-black" />,
    desc: "Optimization, SEO",
  },
  {
    name: "Backend",
    icon: <Code className="text-black" />,
    desc: "Node.js, Express.js, MongoDB, Socket.io, Apis",
  },
];

export default function About() {
  return (
    <Section id="about" className="bg-white border-b-4 border-black">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                About <span className="text-stroke-black text-white">Me</span>
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative w-16 h-16 md:w-24 md:h-24 filter drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]"
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <p className="text-black text-xl font-medium leading-relaxed mb-6">
              Frontend / UI Engineer with 4+ years of experience building
              high-performance web applications for Dubai and UAE-based
              businesses. Specialized in React, Next.js, and modern frontend
              architecture, with a strong focus on clean UI, responsiveness, and
              performance. Experienced in delivering production-ready solutions
              under tight timelines, with working knowledge of Node.js and
              MongoDB for backend integration.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-mono">
              {
                "// My journey started with a curiosity for how things work on the web, and it has evolved into a career of solving complex problems with elegant solutions."
              }
            </p>
            <div className="p-6 bg-neutral-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold text-black mb-2 uppercase">
                Location:
              </h3>
              <p className="text-black font-bold">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border-4 border-black hover:bg-neutral-50 transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="w-12 h-12 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-black text-black mb-1 uppercase">
                  {skill.name}
                </h3>
                <p className="text-neutral-600 text-sm font-semibold">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
