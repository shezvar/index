import React from "react";
import Image from "next/image";
import ProjectBackButton from "@/components/ProjectBackButton";

interface IntroDataItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  src: string;           // local (/public/...) or remote (allowed in next.config)
  lqip?: string;         // optional: tiny base64 for blur placeholder
}

interface ProjectIntroProps {
  id: number;
  introData: IntroDataItem[];
  priorityHero?: boolean; // set true if this hero is the LCP on the page
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  id,
  introData,
  priorityHero = false,
}) => {
  const item = introData.find((it) => it.id === id);
  if (!item) return null;

  return (
    <section className="border-x border-stone-200 w-full px-3 pt-4 lg:pt-16 flex flex-col gap-0 h-min max-w-6xl mx-auto relative group/sideCard">
      <div className="lg:px-4">
        <ProjectBackButton />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="mb-8 max-w-[66rem] mx-auto relative">
          <h1 className="text-3xl md:text-[3rem] font-thin text-stone-900 leading-[1.3] mb-4">
            {item.title}
          </h1>

          <p className="text-stone-700 text-xl mb-4">{item.description}</p>

          <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tags">
            {item.tags.map((tag) => (
              <li key={tag}>
                <span className="text-stone-800 uppercase text-xs bg-white px-3 py-1 rounded-lg border border-stone-200">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image card */}
        <div className="relative rounded-2xl overflow-hidden w-full bg-white mt-6 shadow-md border border-stone-400">
          {/* aspect box prevents layout shift; 2:1 suits 1600x800 */}
          <div className="relative aspect-[2/1]">
            <Image
              src={item.src}
              alt={item.title || "Project image"}
              fill
              className="object-cover"
              // Only the true LCP image should be priority/eager
              priority={priorityHero}
              loading={priorityHero ? "eager" : "lazy"}
              fetchPriority={priorityHero ? "high" : "auto"}
              decoding="async"
              quality={70}
              placeholder={item.lqip ? "blur" : "empty"}
              blurDataURL={item.lqip}
              // max container is max-w-6xl (72rem = 1152px). Give the browser exact hints.
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                1152px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
