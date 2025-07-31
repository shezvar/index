"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  images: { src: string; alt: string }[];
  index: number;
}

export function ProjectImageViewOne({ src, alt, images, index }: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(index);
  const modalRef = useRef<HTMLDivElement>(null);

  // Ensure modal always opens with the image that was clicked
  const openModal = () => {
    // Find the index of the clicked image in the images array
    const foundIndex = images.findIndex((img) => img.src === src);
    setCurrentImageIndex(foundIndex !== -1 ? foundIndex : index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative rounded-2xl flex items-center justify-center overflow-hidden h-[30rem] w-full bg-white mt-6 cursor-zoom-in"
        onClick={openModal}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="object-contain"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectPosition: "center",
            objectFit: "cover",
            maxHeight: "100%",
            maxWidth: "100%",
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-[90%] max-h-[90%]" ref={modalRef}>
            <button
              className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/50 transition"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={1000}
              height={800}
              className="object-contain"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                margin: "0 auto",
                imageRendering: "crisp-edges",
              }}
            />

            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <button
                className="bg-slate-950/20 rounded-full p-2 text-white hover:bg-slate-950/50 transition"
                onClick={prevImage}
                disabled={images.length <= 1}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="bg-slate-950/20 rounded-full p-2 text-white hover:bg-slate-950/50 transition"
                onClick={nextImage}
                disabled={images.length <= 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}