import React from "react";
import Image from "next/image";
import ProjectBackButton from "@/components/ProjectBackButton";

interface IntroDataItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  src: string;
}

interface ProjectIntroProps {
  id: number;
  introData: IntroDataItem[];
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  id,
  introData,
}) => {
  return (
    <section className="border-x border-stone-200 w-full px-3 pt-4 lg:pt-16 flex flex-col gap-0 h-min max-w-6xl mx-auto relative group/sideCard">
      <div className="lg:px-4">
        <ProjectBackButton />
      </div>
      {introData
        .filter((item) => item.id === id)
        .map((item) => (
          <div
            key={item.title}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="mb-8 max-w-[66rem] mx-auto relative">
              <h2 className="text-3xl md:text-[3rem] font-thin text-stone-900 leading-[1.3] mb-4">
                {item.title}
              </h2>
              <p className="text-stone-700 text-xl mb-4">{item.description}</p>
              <div className="w-full">
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-stone-800 uppercase text-xs bg-white px-3 py-1 rounded-lg border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl flex items-center justify-center overflow-hidden md:h-[40rem] w-full bg-white mt-6 shadow-md border border-stone-400">
              <Image
                src={item.src}
                alt={item.title}
                width={1600}
                height={800}
                quality={70}
                loading="lazy"
                className="object-contain"
                style={{
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
    </section>
  );
};