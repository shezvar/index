/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card } from "@/components/card";
import { ProjectItem } from "@/components/portfolioCard";
import {
  WandSparkles,
  BriefcaseBusiness,
  Puzzle,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { ToolsCard } from "@/components/toolsLogo";
import { FooterCTA } from "@/components/footerCTA";
import portfolioData from "@/app/data/project.json";

const toolsLogoData = [
  {
    src: "/assets/tools/figma-icon.svg",
    alt: "Figma Icon",
    text: "Figma",
  },
  {
    src: "/assets/tools/chatgpt-6.svg",
    alt: "Figma Icon",
    text: "ChatGPT",
  },
  {
    src: "/assets/tools/gemini-icon.svg",
    alt: "Figma Icon",
    text: "Gemini",
  },
  {
    src: "/assets/tools/cursor-icon.svg",
    alt: "Figma Icon",
    text: "Cursor",
  },
];


export default async function Home() {
  
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
        {/* HERO SECTION */}

        <section
          className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative"
          id="hero"
        ></section>

        <section className="border-x border-stone-200 w-full px-3 py-16 flex flex-col gap-0 h-min items-center justify-center max-w-6xl mx-auto relative group/sideCard">
          <div className="flex relative items-baseline">
            <Card
              variant="default"
              padding="none"
              className="flex flex-row justify-start p-1 shadow-xl bg-white/30 backdrop-blur-md border border-white/20 -rotate-6 absolute -left-3 bottom-0 group-hover/sideCard:-rotate-12 transition-transform duration-300 ease-in-out"
            >
              <div className="rounded-xl overflow-hidden flex items-center justify-center bg-stone-950 size-32">
                <Image
                  src="/assets/hero-image.png"
                  alt="Segun Oroyo"
                  width={400}
                  height={400}
                  className="rounded-full object-cover ml-auto"
                />
              </div>
            </Card>

            <Card
              variant="default"
              padding="none"
              className="flex flex-row justify-start relative p-2 rotate-0 shadow-xl z-[1] bg-white/30 backdrop-blur-md border border-white/20"
            >
              <div className="rounded-xl overflow-hidden flex items-center justify-center bg-stone-950 size-40">
                <Image
                  src="/assets/hero-image.png"
                  alt="Segun Oroyo"
                  width={400}
                  height={400}
                  className="rounded-full object-cover ml-auto"
                />
              </div>
            </Card>

            <Card
              variant="default"
              padding="none"
              className="flex flex-row justify-start  p-1 shadow-xl bg-white/30 backdrop-blur-md border border-white/20 rotate-6 absolute -right-3 bottom-0 group-hover/sideCard:rotate-12 transition-transform duration-300 ease-in-out"
            >
              <div className="rounded-xl overflow-hidden flex items-center justify-center bg-stone-950 size-32">
                <Image
                  src="/assets/hero-image.png"
                  alt="Segun Oroyo"
                  width={400}
                  height={400}
                  className="rounded-full object-cover ml-auto"
                />
              </div>
            </Card>
          </div>

          <div className="text-center max-w-2xl mt-12">
            <h2 className="text-3xl md:text-5xl font-thin text-stone-900 leading-tight">
              Hey, I&apos;m Segun Oroyo
            </h2>
            <p className="text-stone-700 text-lg mt-6">
              Product Designer (UI/UX) with 7+ years of experience in end-to-end
              experiences for both business and consumer applications.
            </p>
          </div>
        </section>

        <Divider />

        <section className="border-x border-y border-stone-200 w-full px-6 md:px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <BgPattern />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch relative">
            <div className="h-full flex">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row relative h-full"
              >
                <div className="flex flex-col w-full">
                  <WandSparkles className="size-6 mb-4" />
                  <h4 className="text-base">
                    A generalist that builds using AI
                  </h4>
                </div>
              </Card>
            </div>
            <div className="h-full flex">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row relative h-full"
              >
                <div className="flex flex-col w-full">
                  <BriefcaseBusiness className="size-6 mb-4" />
                  <h4 className="text-base">
                    Available for remote or hybrid role
                  </h4>
                </div>
              </Card>
            </div>
            <div className="h-full flex">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row relative h-full"
              >
                <div className="flex flex-col w-full">
                  <Puzzle className="size-6 mb-4" />
                  <h4 className="text-base">
                    An individual contributor and a team player
                  </h4>
                </div>
              </Card>
            </div>
            <div className="h-full flex">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row relative h-full"
              >
                <div className="flex flex-col w-full">
                  <Users className="size-6 mb-4" />
                  <h4 className="text-base">
                    Experienced in leading a product team
                  </h4>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-stone-200 w-full px-6 md:px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col relative">
            <div className="max-w-3xl flex flex-col gap-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-thin text-stone-400">
                These are some{" "}
                <span className="text-stone-900">
                  projects I&apos;ve worked on
                </span>{" "}
                trying to put my dent in the universe
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData
                .filter(item => [1, 2].includes(item.id))
                .map((item, idx) => (
                <ProjectItem
                  key={item.title || idx}
                  image={item.src}
                  type={item.type || ''}
                  title={item.title || ''}
                  description={item.description || ''}
                  link={item.link || ''}
                  highlightWord={item.highlightWord}
                />
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-y border-stone-200 w-full px-6 md:px-16 py-0 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <BgPattern />
          <div className="z-[1] bg-main w-full max-w-6xl mx-auto px-6 md:px-16 py-16 border-x">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-[1]">
              {/* Left: Content */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h2 className="text-3xl md:text-4xl font-thin text-stone-400">
                  A toolkit of essential resources that help me{" "}
                  <span className="text-stone-900">work efficiently</span> and
                  produce outstanding results.
                </h2>
              </div>

              {/* Right: Icon grid */}
              <div className="flex-1 flex items-center justify-center md:ml-auto">
                <div className="grid grid-cols-2 grid-rows-2 gap-6 overflow-hidden">
                  <ToolsCard icons={toolsLogoData.map(icon => ({
                    ...icon,
                    text: icon.text || ''
                  }))} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>

    </div>
  );
}
