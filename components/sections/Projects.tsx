"use client";

import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projectData";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE,
  );

  return (
    <Section id="projects" className="bg-muted/50 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground font-bold rounded-full text-sm mb-4">
            CHECKPOINT REACHED
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter flex items-center justify-center gap-4">
            <span className="text-foreground">MY</span> COLLECTIONS
          </h2>
        </motion.div>

        {/* Navigation Arrows (Desktop) */}
        <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={prevPage}
            className="p-4 bg-card border-4 border-primary rounded-2xl shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-primary" strokeWidth={3} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={nextPage}
            className="p-4 bg-card border-4 border-primary rounded-2xl shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:-translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <ChevronRight className="w-8 h-8 text-primary" strokeWidth={3} />
          </button>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block h-full"
                  >
                    <div
                      className="group relative bg-card border-4 border-card rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))] h-full flex flex-col"
                      style={
                        {
                          "--primary": project.theme.primary,
                          "--secondary": project.theme.secondary,
                          "--shadow-color": project.theme.shadow,
                        } as React.CSSProperties
                      }
                    >
                      {/* Pattern Header Area */}
                      <div className="h-48 bg-secondary/20 relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "radial-gradient(hsl(var(--secondary)) 20%, transparent 20%)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
                      </div>

                      <div className="p-8 pt-4 flex flex-col flex-grow">
                        <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-6 line-clamp-3">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-muted text-foreground font-bold text-xs rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <span className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors pointer-events-none">
                            View Details &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pacman Pagination Indicator */}
        <div className="flex flex-col items-center gap-12 mt-16">
          <div className="relative flex items-center justify-center gap-12 h-12">
            {/* Pellets */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="group relative z-10"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "bg-transparent scale-150"
                      : "bg-primary/30 group-hover:bg-primary/60"
                  }`}
                />
              </button>
            ))}

            {/* Pacman */}
            <motion.div
              className="absolute left-0 pointer-events-none z-20"
              animate={{
                x: currentPage * 64 - 12,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="relative w-10 h-10">
                <motion.div
                  className="absolute inset-0 bg-yellow-400 rounded-full"
                  style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
                  animate={{
                    rotate: [0, -30, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-yellow-400 rounded-full"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
                    transform: "scaleY(-1)",
                  }}
                  animate={{
                    rotate: [0, 30, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                />
                <div className="absolute top-2 left-5 w-1.5 h-1.5 bg-background rounded-full" />
              </div>
            </motion.div>
          </div>

          <button
            onClick={nextPage}
            className="group relative px-8 py-4 bg-primary text-white font-black text-xl rounded-2xl shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 active:scale-95"
            style={
              {
                "--shadow-color": "var(--primary-foreground)",
              } as React.CSSProperties
            }
          >
            NEXT SET
            <ChevronRight
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              strokeWidth={4}
            />
          </button>

          {/* Mobile Back Button */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={prevPage}
              className="px-6 py-3 bg-card border-4 border-primary rounded-xl font-bold text-primary shadow-[4px_4px_0px_0px_hsl(var(--primary))]"
            >
              PREVIOUS SET
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
