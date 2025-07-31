import Image from "next/image";
import { Card } from "./card";
import React from "react";

interface ProjectCardProps {
  image: string;
  type: string;
  title: string;
  description: string;
  link: string;
  bgColor?: string;
  highlightWord?: string;
}

function highlightWord(
  text: string,
  word: string,
  className = "text-indigo-600 font-thin"
): React.ReactNode {
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
  highlightWord: highlight,
}: ProjectCardProps) {
  return (
    <Card variant="default" padding="sm" className="">
      <a
        className={`bg-${bgColor} flex flex-col group`}
        href={link}
      >
        <div className="relative rounded-lg flex items-center justify-center overflow-hidden h-64 max-h-[32rem] w-full bg-white shadow-lg border border-stone-200">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            quality={100}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectPosition: "center",
              objectFit: "cover",
              maxHeight: "100%",
              maxWidth: "100%",
              imageRendering: "auto",
            }}
          />
        </div>
        <div className="flex flex-col mt-4 px-4 pb-4 pt-2">
          <span className="text-xs uppercase font-bold text-stone-500 line-clamp-1">
            {type}
          </span>
          <h4 className="text-xl md:text-2xl mt-2 font-thin text-stone-800 transition-all duration-300">
            {highlight ? highlightWord(title, highlight) : title}
          </h4>
          <p className="mt-2 text-stone-600 line-clamp-2">{description}</p>
        </div>
      </a>
    </Card>
  );
}
