"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface SingleImageViewProps {
  src: string;
  alt: string;
  /** Optional tiny base64 preview for blur placeholder */
  blurDataURL?: string;
  /** Natural aspect ratio of the image, e.g. 16/9, 4/3, 3/2 (defaults to 16/9) */
  aspect?: number;
}

export function SingleImageView({
  src,
  alt,
  blurDataURL,
  aspect = 16 / 9,
}: SingleImageViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    lastActiveRef.current = document.activeElement as HTMLElement | null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && closeBtnRef.current) {
        e.preventDefault();
        closeBtnRef.current.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      lastActiveRef.current?.focus?.();
    };
  }, [isOpen]);

  return (
    <>
      {/* THUMBNAIL */}
      <button
        type="button"
        className="group cursor-zoom-in block w-full"
        onClick={() => setIsOpen(true)}
        aria-label={`Open full view: ${alt}`}
      >
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ aspectRatio: `${aspect}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="100vw"
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            quality={90}
            loading="lazy"
            decoding="async"
            priority={false}
          />
        </div>
      </button>

      {/* MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="absolute -top-2 right-0 translate-y-[-100%] bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>

            <div
              className="relative w-full"
              style={{ aspectRatio: `${aspect}`, maxHeight: "90vh" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
                fetchPriority="high"
                loading="eager"
                decoding="async"
                quality={100}
                sizes="100vw"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
