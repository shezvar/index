"use client";
import { HeaderMain } from "@/components/header";
import { Card } from "@/components/card";
import { Mail, Linkedin, Twitter, Download, WandSparkles, BriefcaseBusiness, Puzzle, Users } from "lucide-react";
import Image from "next/image";

const projectData = [
  {
    image: "/testimage.webp",
    type: "Case study",
    title: "FullGap",
    description: "Surfacing the most relevant information for mobile users",
    link: "/century-onboarding",
    bgColor: "pink-200",
  },
  {
    image: "/testimage2.webp",
    type: "Case study",
    title: "Century-Tech",
    description: "Surfacing the most relevant information for mobile users",
    link: "/century-onboarding",
    bgColor: "white",
  },
  {
    image: "/testimage2.webp",
    type: "Case study",
    title: "Prowoks",
    description: "Surfacing the most relevant information for mobile users",
    link: "/century-onboarding",
    bgColor: "blue-200",
  },
  {
    image: "/testimage.webp",
    type: "UI Design",
    title: "iPOS",
    description: "Surfacing the most relevant information for mobile users",
    link: "/century-onboarding",
    bgColor: "yellow-200",
  },
  {
    image: "/testimage.webp",
    type: "UI Design",
    title: "EduTech",
    description: "Surfacing the most relevant information for mobile users",
    link: "/century-onboarding",
    bgColor: "amber-200",
  },
];

const toolsLogoData = [
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
  {
    image: "/assets/figma-icon.svg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <HeaderMain />
      <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
        {/* HERO SECTION */}

        <section className="border-b border-x border-slate-200 w-full px-3 pt-24 pb-3 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <Card variant="default" padding="lg" className="w-full flex flex-row justify-start relative">
            <div className="basis-6/12 flex flex-col">
              <div className="text-stone-600 text-2xl hidden">Hi, I am Segun Oroyo</div>
              <div className="text-stone-800 text-5xl font-bold">Passionate About Blending Aesthetics with Functionality</div>
              <p className="text-zinc-500 text-lg mt-4">Hello! I&lsquo;m Segun Oroyo, a visual storyteller who brings Dashboard Image design visions to life with precision and creativity. Let&apos;s turn your ideas into captivating masterpieces!</p>
              <div className="flex gap-4 mt-6">
                  <a href="mailto:hello@segunoroyo.com" className="px-6 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-700 transition">Let&lsquo;s Talk</a>
                  <a href="/resume.pdf" className="px-6 py-2 rounded-full border border-slate-900 text-slate-900 font-semibold flex items-center gap-2 hover:bg-slate-100 transition">
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
            </div>

            <div className="basis-6/12 flex flex-col">
              <div className="bg-stone-100 h-full rounded-3xl"></div>
            </div>
          </Card>
        </section>

        <section className="border-b border-x border-slate-200 w-full px-16 py-24 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="basis-4/12 flex flex-col gap-2">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
                8+ Years of
              </h2>
              <p className="text-slate-700 text-lg mb-4">
                Experience in the industry, I have refined my expertise and
                cultivated a sharp attention to detail.
              </p>
            </div>

            <div className="ml-auto basis-6/12 grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full">
              <div className="">
                <Card variant="default" padding="md" className="w-full flex flex-row justify-start relative">
                  <div className="flex flex-col w-full">
                    <WandSparkles  className="size-6 mb-4" />
                    <h4 className="text-base">A generalist that builds using AI</h4>
                  </div>
                </Card>
              </div>
              <div className="">
                <Card variant="default" padding="md" className="w-full flex flex-row justify-start relative">
                  <div className="flex flex-col w-full">
                    <BriefcaseBusiness  className="size-6 mb-4" />
                    <h4 className="text-base">Available for remote or hybrid role</h4>
                  </div>
                </Card>
              </div>
              <div className="">
                <Card variant="default" padding="md" className="w-full flex flex-row justify-start relative">
                  <div className="flex flex-col w-full">
                    <Puzzle  className="size-6 mb-4" />
                    <h4 className="text-base">An individual contributor and a team player</h4>
                  </div>
                </Card>
              </div>
              <div className="">
                <Card variant="default" padding="md" className="w-full flex flex-row justify-start relative">
                  <div className="flex flex-col w-full">
                    <Users  className="size-6 mb-4" />
                    <h4 className="text-base">Experienced in leading a product team</h4>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
        </section>

        <section id="hero" className="w-full hidden">
          <div className="w-full mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full px-4">
              <div className="">
              
                <h2 className="font-[poppins] text-2xl md:text-5xl font-bold text-slate-800">Passionate About Blending Aesthetics with Functionality</h2>
                <p className="text-zinc-500 text-lg mt-4">Hello! I&lsquo;m Segun Oroyo, a visual storyteller who brings Dashboard Image design visions to life with precision and creativity. Let&apos;s turn your ideas into captivating masterpieces!</p>
                <div className="flex gap-4 mt-6">
                  <a href="mailto:hello@segunoroyo.com" className="px-6 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-700 transition">Let&lsquo;s Talk</a>
                  <a href="/resume.pdf" className="px-6 py-2 rounded-full border border-slate-900 text-slate-900 font-semibold flex items-center gap-2 hover:bg-slate-100 transition">
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
            </div>

            <div className="relative max-w-[18rem] rounded-[8rem] overflow-hidden h-full max-h-[32rem] w-full mb-12">
              <Image
                  src="/testimage.webp"
                  alt="Hero Image"
                  priority
                  loading="eager"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-all duration-300"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                />
            </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE LEVEL SUMMARY */}
        <section className="w-full max-w-6xl py-16 hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Image */}
            <div className="md:col-span-7 h-full flex items-center justify-center">
              <Image
                src="/testimage.webp"
                alt="Experience"
                width={600}
                height={400}
                className="rounded-2xl w-full h-full object-cover max-h-[20rem] min-h-[20rem]"
              />
            </div>

            {/* Right: Content */}
            <div className="md:col-span-5 flex flex-col gap-4 items-start justify-center h-full p-6 border border-slate-200 rounded-2xl">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
                  8+ Years of
                </h2>
                <p className="text-slate-700 text-lg mb-4">
                  Experience in the industry, I have refined my expertise and
                  cultivated a sharp attention to detail.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="bg-pink-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Branding
                </span>
                <span className="bg-green-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Print Design
                </span>
                <span className="bg-blue-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  SaaS Website
                </span>
                <span className="bg-purple-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Ecommerce
                </span>
                <span className="bg-orange-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Business
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl py-16 hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Image */}
            <div className="md:col-span-7 h-full flex items-center justify-center">
              <Image
                src="/testimage.webp"
                alt="Experience"
                width={600}
                height={400}
                className="rounded-2xl w-full h-full object-cover max-h-[20rem] min-h-[20rem]"
              />
            </div>

            {/* Right: Content */}
            <div className="md:col-span-5 flex flex-col gap-4 items-start justify-center h-full p-6 border border-slate-200 rounded-2xl">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
                  8+ Years of
                </h2>
                <p className="text-slate-700 text-lg mb-4">
                  Experience in the industry, I have refined my expertise and
                  cultivated a sharp attention to detail.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="bg-pink-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Branding
                </span>
                <span className="bg-green-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Print Design
                </span>
                <span className="bg-blue-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  SaaS Website
                </span>
                <span className="bg-purple-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Ecommerce
                </span>
                <span className="bg-orange-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Business
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="w-full max-w-5xl py-16 hidden">
          <h3 className="bg-gradient-to-b from-slate-800 via-slate-600 to-slate-300 bg-clip-text text-transparent text-center text-5xl font-medium text-slate-800 mb-6 leading-snug">
            Hello! I&lsquo;m Segun Oroyo, a visual storyteller who brings
            Dashboard Image design visions to life with precision and
            creativity. Let&apos;s turn your ideas into captivating
            masterpieces!
          </h3>
        </section>

        {/* SELECTED WORK */}
        <section className="w-full max-w-6xl py-16 hidden">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Selected Work
          </h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {projectData.slice(0, 4).map((item) => (
              <a
                key={item.title}
                className={`rounded-2xl bg-${item.bgColor} flex flex-col group`}
                href={item.link}
              >
                <div className="relative rounded-xl overflow-hidden h-full max-h-[32rem] w-full">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-xl h-full  w-full object-cover mb-2 group-hover:scale-105 transition-all duration-300"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-col mt-4">
                  <span className="text-xs uppercase font-bold text-slate-500">
                    {item.type}
                  </span>
                  <h4 className="text-3xl mt-2 font-semibold text-slate-800 group-hover:text-indigo-600 transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              <span className="flex items-center justify-center gap-2 font-semibold transition">
                View All Projects
              </span>
            </a>
          </div>
        </section>

        {/* EXPERIENCE LEVEL SUMMARY */}
        <section className="py-16 bg-slate-50 w-full hidden">
          <div className="w-full max-w-6xl mx-auto py-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Tools I Use with Ease
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left: content */}
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-slate-200 bg-white rounded-2xl p-6 md:p-6 w-full">
                  {/* Left: content */}
                  <div className="md:col-span-6 flex flex-col gap-4 items-start justify-center h-full">
                    <h2 className="text-2xl font-extrabold text-slate-800">
                      Essential Stacks
                    </h2>
                    <p className="text-slate-500 text-base">
                      A toolkit of essential resources that help me work
                      efficiently and produce outstanding results.
                    </p>
                  </div>

                  {/* Right: Icon grid */}
                  <div className="md:col-span-5 md:col-end-13 justify-center items-center h-full">
                    <div className="grid grid-cols-3 grid-rows-3 gap-6 bg-slate-50 rounded-2xl p-6">
                      {toolsLogoData.slice(0, 9).map((item, index) => (
                        <div
                          key={index}
                          className="h-10 w-10 bg-white rounded-full flex items-center justify-center p-2"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={item.image}
                            className="h-full w-full"
                            alt="Tools Icon"
                            style={{
                              objectPosition: "center",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-4 flex bg-white flex-col gap-4 items-start justify-center h-full p-6 border border-slate-200 rounded-2xl">
                <div className="flex flex-col gap-1 w-full h-full">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-auto">
                    Let&lsquo;s Work Together
                  </h2>

                  <div className="relative">
                    <div className="">
                      <p className="text-slate-500 text-base">Send Email</p>
                      <p className="text-slate-700 text-base">
                        segunoroyo@gmail.com
                      </p>
                    </div>

                    <div className="border-t border-slate-200 my-3 w-full"></div>
                    <div className="space-y-1">
                      <p className="text-slate-500 text-base">
                        Connect on Social Media
                      </p>
                      <div className="flex gap-2">
                        <span className="rounded-md">
                          <Image
                            src="/assets/linkedin-icon-3.svg"
                            alt="Figma"
                            width={24}
                            height={24}
                            className="inline-block mr-2"
                          />
                        </span>
                        <span className="rounded-md">
                          <Image
                            src="/assets/x-2.svg"
                            alt="Figma"
                            width={24}
                            height={24}
                            className="inline-block mr-2"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="w-full max-w-4xl py-16 hidden">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Clients
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-slate-700 text-lg font-medium">
            <span>Raise Africa</span>
            <span>Neo Health</span>
            <span>Monosend</span>
            <span>Raven Bank</span>
            <span>Green Africa Airways</span>
            <span>Clouddley</span>
            <span>Payhippo</span>
            <span>Volta</span>
            <span>Study.ai</span>
            <span>Mpilo AI</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="w-full max-w-3xl py-16 hidden">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            About Me
          </h3>
          <p className="text-slate-700 text-lg text-center mb-4">
            I&apos;m an explorer who loves learning, understanding how things
            work, and building new things. From coding my first website on a
            mobile phone to growing a tech blog to 2.1 million visitors, my
            curiosity has always driven me. I&apos;ve spent 7+ years designing
            user-centered products across various industries.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-slate-600 text-base mt-4">
            <li>🎮 Console gamer</li>
            <li>📺 Documentary lover</li>
            <li>✍️ Fiction writer</li>
            <li>🌍 Community builder (100k+ across socials)</li>
          </ul>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 flex flex-col items-center gap-2 border-t border-slate-200 mt-8 hidden">
        <div className="flex gap-4 mb-2">
          <a href="mailto:hello@segunoroyo.com" className="hover:text-blue-600">
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/segunoroyo"
            className="hover:text-blue-700"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/segunoroyo"
            className="hover:text-blue-400"
          >
            <Twitter size={20} />
          </a>
        </div>
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Segun Oroyo
        </div>
      </footer>
    </div>
  );
}
