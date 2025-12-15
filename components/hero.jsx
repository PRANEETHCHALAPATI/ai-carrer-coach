"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      if (!imageElement) return;

      if (window.scrollY > 100) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative w-full pt-36 md:pt-48 pb-16 overflow-hidden`}
    >
      {/* GRID BACKGROUND */}
      <div className={`grid-background`} />

      <div
        className={`relative z-10 space-y-10 text-center px-4`}
      >
        <div className={`space-y-6 mx-auto`}>
          <h1
            className={`
              text-5xl font-extrabold tracking-tight
              md:text-6xl lg:text-7xl xl:text-8xl
              bg-gradient-to-r
              from-gray-900 via-gray-700 to-gray-900
              dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400
              bg-clip-text text-transparent
              drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
              dark:drop-shadow-[0_0_45px_rgba(168,85,247,0.6)]
            `}
          >
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>

          <p
            className={`
              mx-auto max-w-[600px]
              md:text-xl
              text-gray-800 dark:text-gray-300
            `}
          >
            Advance your career with personalized guidance, interview prep,
            and AI-powered tools for job success.
          </p>
        </div>

        <div className={`flex justify-center gap-4`}>
          <Link href="/dashboard">
            <Button
              size="lg"
              className={`
                px-10 py-6 text-base font-semibold
                bg-gray-900 text-white hover:bg-gray-800
                dark:bg-white dark:text-black dark:hover:bg-gray-200
              `}
            >
              Get Started
            </Button>
          </Link>
        </div>

        <div className={`hero-image-wrapper mt-14`}>
          <div ref={imageRef} className={`hero-image`}>
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              priority
              className={`
                mx-auto rounded-xl
                shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]
                border border-gray-300 dark:border-gray-800
                bg-white
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
