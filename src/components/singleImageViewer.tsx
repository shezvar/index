"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface SingleImageViewProps {
  src: string;
  alt: string;
}

/**
 * SingleImageView
 * 
 * Usage example (on any page, e.g. export page):
 * 
 * import { SingleImageView } from "@/components/singleImageViewer";
 * 
 * <SingleImageView src="/path/to/image.jpg" alt="Descriptive alt text" />
 * 
 * This component displays an image. When clicked, it opens a modal with a larger view.
 */
export function SingleImageView({ src, alt }: SingleImageViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={400}
          quality={75}
          loading="lazy"
          className="object-contain w-full h-full"
        />

      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center">
          <button
              className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/50 transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          <div className="relative w-full max-h-[90%]" ref={modalRef}>
            <Image
              src={src}
              alt={alt}
              className="object-contain w-full h-full h-[90vh]"
              width={1400}
              height={400}
              quality={100}
              loading="lazy"
            />

          </div>
        </div>
      )}
    </>
  );
}