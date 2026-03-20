"use client";

import ContactForm from "./ContactForm";
import Section from "./Section";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <Section id="contact" className="pb-32 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground dark:text-white uppercase tracking-tighter">
              <span className="text-muted-foreground"> Get in Touch</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 font-medium leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;m always
              open to discussing new projects, creative ideas or opportunities
              to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-card border-4 border-card rounded-full flex items-center justify-center text-primary shrink-0 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] group-hover:-translate-y-1 transition-transform">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground mb-1 uppercase">
                    Email Me
                  </h4>
                  <a
                    href="mailto:rekhilelias2014@gmail.com"
                    className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    rekhilelias2014@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-card border-4 border-card rounded-full flex items-center justify-center text-primary shrink-0 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] group-hover:-translate-y-1 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground mb-1 uppercase">
                    Call Me
                  </h4>
                  <a
                    href="tel:+971582978583"
                    className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    +971 58 297 8583
                  </a>
                </div>
              </div>

              

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-card border-4 border-card rounded-full flex items-center justify-center text-primary shrink-0 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] group-hover:-translate-y-1 transition-transform">
                  <Linkedin size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground mb-1 uppercase">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/rekhilaliaspaulose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/rekhilaliaspaulose
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-card border-4 border-card rounded-full flex items-center justify-center text-primary shrink-0 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] group-hover:-translate-y-1 transition-transform">
                  <Github size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground mb-1 uppercase">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/RekhilAlias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/RekhilAlias
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
