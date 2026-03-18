"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);
  const formHeaderRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnTextRef = useRef<HTMLSpanElement>(null);
  const btnIconRef = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLSpanElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple entrance
      gsap.fromTo(
        formWrapperRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );
    }, formWrapperRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;

    if (!name || !email || !message) {
      // Shake animation
      gsap.to(formWrapperRef.current, {
        keyframes: {
          x: [-5, 5, -5, 5, 0],
        },
        duration: 0.3,
      });
      return;
    }

    // Submit Animation
    const tl = gsap.timeline();
    tl.to([btnTextRef.current, btnIconRef.current], {
      opacity: 0,
      duration: 0.2,
    })
      .to(btnRef.current, { width: 50, borderRadius: "50%", duration: 0.3 })
      .set(loaderRef.current, { display: "block", opacity: 1 });

    // AJAX to FormSubmit.co
    fetch("https://formsubmit.co/ajax/rekhilelias2014@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        // Success Animation
        tl.to(loaderRef.current, { opacity: 0, display: "none" })
          .to(btnRef.current, { scale: 0, duration: 0.2 })
          .to([formRef.current, formHeaderRef.current], {
            opacity: 0,
            y: -10,
            display: "none",
            duration: 0.3,
          })
          .set(successMessageRef.current, { display: "flex", opacity: 0 })
          .to(successMessageRef.current, { opacity: 1, duration: 0.3 });

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        gsap.to(loaderRef.current, { opacity: 0, display: "none" });
        gsap.to([btnTextRef.current, btnIconRef.current], { opacity: 1 });
        gsap.to(btnRef.current, { width: "100%", borderRadius: "0px" });
        alert("Something went wrong.");
      });
  };

  const handleReset = () => {
    const tl = gsap.timeline();
    tl.to(successMessageRef.current, {
      opacity: 0,
      duration: 0.3,
      display: "none",
    })
      .set([formRef.current, formHeaderRef.current], { display: "block" })
      .set(btnRef.current, { width: "100%", borderRadius: "0px", scale: 1 })
      .to([formRef.current, formHeaderRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.3,
      })
      .to([btnTextRef.current, btnIconRef.current], { opacity: 1 });

    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div
        ref={formWrapperRef}
        className="bg-card/80 backdrop-blur-md border-4 border-card rounded-[2.5rem] p-8 md:p-12 w-full max-w-lg shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))] relative overflow-hidden"
      >
        <div ref={formHeaderRef} className="mb-8 text-center">
          <h1 className="text-4xl font-black mb-2 text-primary uppercase tracking-tight">
            Start Connect
          </h1>
          <p className="text-muted-foreground font-bold">
            Drop us a message to initialize connection.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="relative mb-6">
            <label
              htmlFor="name"
              className="block text-foreground font-bold uppercase mb-2 pl-4"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-muted/50 border-2 border-transparent focus:border-primary rounded-full p-4 text-lg font-bold text-foreground focus:shadow-[0px_4px_10px_rgba(0,0,0,0.05)] focus:outline-none transition-all placeholder:text-muted-foreground/50"
              placeholder="Player Name"
            />
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="email"
              className="block text-foreground font-bold uppercase mb-2 pl-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-muted/50 border-2 border-transparent focus:border-primary rounded-full p-4 text-lg font-bold text-foreground focus:shadow-[0px_4px_10px_rgba(0,0,0,0.05)] focus:outline-none transition-all placeholder:text-muted-foreground/50"
              placeholder="player@game.com"
            />
          </div>

          <div className="relative mb-8">
            <label
              htmlFor="message"
              className="block text-foreground font-bold uppercase mb-2 pl-4"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-muted/50 border-2 border-transparent focus:border-primary rounded-[1.5rem] p-4 text-lg font-bold text-foreground resize-none focus:shadow-[0px_4px_10px_rgba(0,0,0,0.05)] focus:outline-none transition-all placeholder:text-muted-foreground/50"
              placeholder="Your Quest..."
            ></textarea>
          </div>

          <button
            ref={btnRef}
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground border-none rounded-full text-xl font-black uppercase cursor-pointer relative flex justify-center items-center gap-2 hover:bg-primary/90 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] hover:shadow-[6px_6px_0px_0px_hsl(var(--shadow-color))] hover:-translate-y-1 active:translate-y-[1px] active:shadow-none transition-all"
          >
            <span ref={btnTextRef}>Send Message</span>
            <span ref={btnIconRef}>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </span>
            <span
              ref={loaderRef}
              className="loader hidden opacity-0 absolute border-primary-foreground border-t-transparent"
            ></span>
          </button>
        </form>

        <div
          ref={successMessageRef}
          className="hidden absolute top-0 left-0 w-full h-full flex-col justify-center items-center text-center p-8 bg-white/90 backdrop-blur-md z-10"
        >
          <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center text-white mb-6 animate-bounce">
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-2 text-primary uppercase">
            Mission Complete!
          </h2>
          <p className="text-muted-foreground font-bold mb-8">
            Message transmitted successfully.
          </p>
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-full font-black uppercase hover:bg-secondary/10 shadow-sm active:scale-95 transition-all"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}
