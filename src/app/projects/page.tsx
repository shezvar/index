/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ProjectItem } from "@/components/portfolioCard";
import { Divider } from "@/components/divider";
import { FooterCTA } from "@/components/footerCTA";
import portfolioData from "@/app/data/project.json";

export default async function Projects() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
        {/* HERO SECTION */}

        <section
          className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative"
          id="hero"
        ></section>

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
              {portfolioData.map((item, idx) => (
                <ProjectItem
                  key={item.title || idx}
                  image={item.src}
                  type={item.type || ''}
                  title={item.title || ''}
                  description={item.description || ''}
                  link={item.link || ''}
                  highlightWord={item.highlightWord}
                  comingSoon={item.comingSoon || false} // Pass the comingSoon prop
                />
              ))}
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
