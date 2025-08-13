import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";
import React from "react";
import { Lock } from "lucide-react";

type BgColor =
  | "white" | "stone-50" | "stone-100" | "stone-200"
  | "indigo-50" | "indigo-100" | "slate-50" | "slate-100";

interface ProjectCardProps {
  image: string;                // local (/public/...) or remote (allowed in next.config)
  type: string;
  title: string;
  description: string;
  link: string;                 // internal or external
  bgColor?: BgColor;            // limit to a known set so Tailwind doesn’t purge
  highlightWord?: string;
  comingSoon?: boolean;
  isLock?: boolean;
  priority?: boolean;           // <- only set true for the LCP card on a page
  blurDataURL?: string;         // <- pass LQIP for remote images
}

function emphasize(text: string, word?: string, className = "text-indigo-600 font-thin") {
  if (!word) return text;
  const parts = text.split(new RegExp(`(${word})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <span key={i} className={className}>{part}</span>
    ) : (
      part
    )
  );
}

export function ProjectItem({
  image,
  type,
  title,
  description,
  link,
  bgColor = "white",
  highlightWord,
  comingSoon = false,
  isLock = false,
  priority = false,
  blurDataURL,
}: ProjectCardProps) {
  const isInternal = link.startsWith("/");

  // If both flags are true, show Locked (takes precedence) – tweak as you like
  const showLocked = isLock;
  const showComingSoon = !isLock && comingSoon;

  return (
    <Card variant="default" padding="sm" className="h-full flex flex-col">
      {isInternal ? (
        <Link
          href={link}
          className={`bg-${bgColor} flex flex-col group h-full`}
        >
          <CardBody />
        </Link>
      ) : (
        <a
          href={link}
          className={`bg-${bgColor} flex flex-col group h-full`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardBody />
        </a>
      )}
    </Card>
  );

  function CardBody() {
    return (
      <>
        <div className="relative rounded-lg overflow-hidden w-full bg-white shadow-lg border border-stone-200">
          {/* Use an aspect-ratio box instead of fixed heights to avoid CLS */}
          <div className="relative aspect-[3/2]">
            {/* Badges */}
            {showComingSoon && (
              <span className="absolute top-2 right-2 z-10 text-xs bg-indigo-600 px-2 py-1 rounded-md text-stone-100 font-semibold">
                Coming Soon
              </span>
            )}
            {showLocked && (
              <span className="absolute top-2 right-2 z-10 text-xs bg-stone-600 px-2 py-1 rounded-md text-stone-100 font-semibold flex items-center gap-1">
                <Lock size={12} />
                Locked
              </span>
            )}

            {/* Image */}
            <Image
              src={image}
              alt={title}
              fill                            // fill + sizes -> correct bytes per viewport
              priority={priority}            // only true for the LCP card
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
              quality={70}                   // keep it lean; adjust if you show fine art/UI shots
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                (max-width: 1536px) 33vw,
                400px"                       // final fallback for large screens in grids
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 mt-4 px-4 pb-4 pt-2">
          <span className="text-xs uppercase font-bold text-stone-500 line-clamp-1">
            {type}
          </span>
          <h4 className="text-xl md:text-2xl mt-2 font-thin text-stone-800 transition-all duration-300 mb-2">
            {emphasize(title, highlightWord)}
          </h4>
          <p className="text-stone-600 line-clamp-2 flex-1 mb-0">{description}</p>
        </div>
      </>
    );
  }
}
