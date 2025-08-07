"use client"
import { Button } from "./buttons";
import { Card } from "./card";
import Image from "next/image";
import React, { useState, useRef } from "react";

export function FooterCTA() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const UK_PHONE_NUMBER = "+44 7359 628246";

  const handleReveal = () => setRevealed(true);

  const handleCopy = () => {
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFading(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setRevealed(false);
        setCopied(false);
        setFading(false);
      }, 300); // match fade duration
    }, 3000);
  };

  return (
    <section className="border-x border-stone-200 w-full px-3 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
    <Card
      variant="default"
      padding="lg"
      className="w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 pt-10 pb-0 relative"
    >
      {/* Left: Text and Buttons */}
      <div className="flex flex-col items-start justify-center gap-6 px-2 max-w-[28rem] mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
          Got an idea or project?{" "}
          <span className="font-thin italic font-serif">
            I&apos;ll help you bring it to life.
          </span>
        </h2>
       <div className="flex flex-col gap-4 mt-2 relative">
          <div className="flex gap-4 items-center">
            <a
              href="https://cal.com/segun-oroyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md">
                Let&apos;s Talk
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1046vZMvXbljzhS3w_TVM8GFK0R0B9jkp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="md">
                Download CV
              </Button>
            </a>
          </div>
          {!revealed ? (
            <Button
              variant="text"
              size="none"
              className="hover:text-indigo-500 py-2 ml-1"
              style={{ justifyContent: "flex-start" }}
              onClick={handleReveal}
            >
              Reveal mobile number
            </Button>
          ) : (
            <div
              className={`flex items-center space-x-2 transition-opacity duration-300 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <span
                className={`font-mono text-sm ${
                  copied ? "text-green-600 font-semibold py-2 ml-1" : ""
                }`}
              >
                {copied ? "Number copied" : UK_PHONE_NUMBER}
              </span>
              {!copied && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              )}
            </div>
          )}
       </div>
      </div>

      {/* Right: SVG Illustration */}
      <div className="flex items-center justify-center w-full h-full mt-8 md:mt-0">
        <div className="">
          <Image
            src="/assets/pencilstyleimage.png"
            alt="Call to Action Illustration"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
            draggable={false}
            unoptimized={true}
            fetchPriority="high"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Card>
  </section>
  );
}