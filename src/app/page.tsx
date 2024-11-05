'use client'
import Image from "next/image";
import { HeaderMain } from "@/components/header"
import { ArrowDown } from "lucide-react";
import { ProjectsCardHome } from "@/components/projectCards";

const projectData = [
  { image: '/testimage.webp', type: 'Case study', title: 'Mailchimp Mobile Homepage Redesign', description: 'Surfacing the most relevant information for mobile users', link: '/century-onboarding', bgColor: 'pink-200'},
  { image: '/testimage2.webp', type: 'Case study', title: 'Mailchimp Mobile Homepage Redesign', description: 'Surfacing the most relevant information for mobile users', link: '/century-onboarding', bgColor: 'white'},
  { image: '', type: 'Case study', title: 'Mailchimp Mobile Homepage Redesign', description: 'Surfacing the most relevant information for mobile users', link: '/century-onboarding', bgColor: 'blue-200'},
  { image: '', type: 'Case study', title: 'Mailchimp Mobile Homepage Redesign', description: 'Surfacing the most relevant information for mobile users', link: '/century-onboarding', bgColor: 'yellow-200'},
  { image: '', type: 'Case study', title: 'Mailchimp Mobile Homepage Redesign', description: 'Surfacing the most relevant information for mobile users', link: '/century-onboarding', bgColor: 'amber-200'},
]

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <HeaderMain />
      <main className="relative">
        {/* <Image
          className="dark:invert w-24 h-auto"
          src="/segun.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        <div className="relative flex flex-col mx-auto max-w-3xl md:h-[95vh] h-[40rem] justify-center items-center px-8">

          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-4xl text-slate-800 dark:text-slate-100 font-header font-medium">Hello, I am Segun Oroyo</h1>
            <h4 className="text-slate-600 dark:text-slate-400 text-lg font-medium">Design enthusiast fueled by a passion for user-centricity and efficiency. Currently Product Design Lead at Fullgap to shape Project management lifecycle. Always eager to collaborate on projects with measurable positive impact.</h4>
            <div className="flex items-center mx-auto">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-slate-600 dark:text-slate-400 text-sm font-semibold">BASED IN LONDON, UK</span>
            </div>
          </div>

          <div className="absolute bottom-[2rem]">
            <svg className="animate-bounce w-6 h-6"><ArrowDown className="stroke-slate-600 dark:stroke-slate-400"/></svg>
          </div>
          
        </div>

        <div className="relative px-8 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-24">
              {projectData.map((item) => (
                  <ProjectsCardHome
                    image={item.image}
                    type={item.type}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    bgColor={item.bgColor}
                  />
                ))}
            </div>
          </div>
        </div>

      </main>
      <footer className="hidden row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
