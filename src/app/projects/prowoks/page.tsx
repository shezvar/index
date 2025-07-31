"use client";
import { Card } from "@/components/card";
import { WandSparkles, BriefcaseBusiness, Puzzle, Users } from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { Button } from "@/components/buttons";
import { ProjectImageViewOne } from "@/components/projectImageViewer";
import { FooterCTA } from "@/components/footerCTA";
import ProjectBackButton from "@/components/ProjectBackButton";
import introData from "@/app/data/project.json";

const imageViewerData = [
  { src: "/assets/prowoks/pw-create.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-approve-1a.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-approve-1b.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-reconciliation-01.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-reconciliation-02.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-reconciliation-03.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-reconciliation-04.png", alt: "Create Project" },
  { src: "/assets/prowoks/pw-reconciliation-05.png", alt: "Create Project" },
];

export default function FullGap() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
        {/* HERO SECTION */}

        <section
          className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative"
          id="hero"
        ></section>

        <section className="border-x border-stone-200 w-full px-3 pt-16 flex flex-col gap-0 h-min max-w-6xl mx-auto relative group/sideCard">
          <div className="lg:px-4">
          <ProjectBackButton />
          </div>
          {introData
            .filter((item) => item.id === 2)
            .map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-col items-center justify-center"
            >
              <div className="mb-8 max-w-[66rem] mx-auto relative">
                <h2 className="text-3xl md:text-[3rem] font-thin text-stone-900 leading-[1.3] mb-4">
                  {item.title}
                </h2>
                <p className="text-stone-700 text-xl mb-4">
                  {item.description}
                </p>
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

              <div className="relative rounded-2xl flex items-center justify-center overflow-hidden h-[40rem] w-full bg-white mt-6 shadow-md border border-stone-400">
                <Image
                  src={item.src}
                  alt={item.title}
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
                    imageRendering: "crisp-edges", // Add this line for sharper images
                  }}
                />
              </div>
            </div>
          ))}
        </section>

        <Divider />

        <section className="border-x border-y border-stone-200 w-full px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <BgPattern />
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 items-center h-full relative">
            <div className="">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row justify-start relative"
              >
                <div className="flex flex-col w-full">
                  <WandSparkles className="size-6 mb-4" />
                  <h4 className="text-base">
                    A generalist that builds using AI
                  </h4>
                </div>
              </Card>
            </div>
            <div className="">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row justify-start relative"
              >
                <div className="flex flex-col w-full">
                  <BriefcaseBusiness className="size-6 mb-4" />
                  <h4 className="text-base">
                    Available for remote or hybrid role
                  </h4>
                </div>
              </Card>
            </div>
            <div className="">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row justify-start relative"
              >
                <div className="flex flex-col w-full">
                  <Puzzle className="size-6 mb-4" />
                  <h4 className="text-base">
                    An individual contributor and a team player
                  </h4>
                </div>
              </Card>
            </div>
            <div className="">
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-row justify-start relative"
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

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Overview</h4>
              <p>
              Nigeria&apos;s budget management system has long suffered from inefficiencies, lack of transparency, and poor accountability—factors that hinder economic development and public trust.
              </p>
              <p>
              This project presents a human-centered, enterprise-level solution that streamlines budget implementation and expenditure processes at the state level, guided by user insights, workflow research, and flexible system design.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Challenges</h4>
              <div className="mb-4">
                <strong>Fragmented Financial Data and Inefficiencies</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>Budget implementation in Nigeria is marred by outdated, decentralized systems that inhibit collaboration across Ministries, Departments, and Agencies (MDAs).</li>
                  <li>
                    <div className="">Civil servants often rely on manual processes and isolated data points, leading to:
                      <ul className="list-disc pl-6 *:mb-3">
                        <li>Redundant or lost documentation</li>
                        <li>Delays in approvals and reconciliations</li>
                        <li>Low visibility into spending patterns</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Budget Deficit and Structural Weaknesses - In 2021, Nigeria reported a ₦5.60 trillion deficit, driven by:</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>Poor revenue generation</li>
                  <li>Corruption and leakages</li>
                  <li>Inefficient expenditure tracking</li>
                </ul>
              </div>
              <div className="">
                <strong>International Intervention</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>Recognizing the urgency, the <strong>World Bank</strong> sponsored reforms to promote transparency, accountability, and digital governance at the state level.</li>
                  <li>This project supports those reforms by addressing systemic design and usability gaps in Nigeria’s public finance system.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Research and Insights</h4>
              <div className="mb-4">
                <strong>Field Research and User Interviews</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>2 States, 23 MDAs, 53 Participants, over 5.5 Weeks</li>
                  <li>Conducted deep-dive interviews and field surveys to understand task flows, emotional bottlenecks, and administrative pressures.</li>
                </ul>
              </div>
              <div className="mb-4">
                <strong>Identified Personas</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li><strong>Administrators</strong> – Configure and oversee system-wide processes.</li>
                  <li><strong>Moderators</strong> – Manage intra-MDA activities and validations.</li>
                  <li>
                    <div className=""><strong>Actors</strong> – Execute daily financial tasks; further subdivided into:
                      <ul className="list-disc pl-6 *:mb-3">
                        <li><i>Initiators</i> – Launch financial actions (e.g., budget entry)</li>
                        <li><i>Authors</i> – Draft financial documents</li>
                        <li><i>Directors</i> – Approve or return submissions</li>
                        <li><i>Supervisory Officers</i> – Review workflows</li>
                        <li><i>Accounting Officers</i> – Handle payments and reconciliation</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="">
                <strong>Key Insight</strong>
                <p>A flexible, role-based interface was needed to accommodate workflow variations across states and MDAs, while unifying data access and task visibility.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Solutions</h4>
              <p>
                Fullgap was transformed into a highly flexible and modular
                platform, directly addressing user pain points and business
                goals. Below is a breakdown of the core features I designed,
                informed by research into user behavior and best practices from
                related industries.
              </p>
              
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">   
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col blog-post">
                <strong className="mb-4 block">1. Starting A Process</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">Project Creation:</span>
                    Process by an officer to balance the state ledger and bank statement of account for the state.
                  </li>
                </ul>
                <div className="">
                  {imageViewerData.slice(0, 3).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index}
                    />
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col blog-post">
                <strong className="mb-4 block">2. Reconciliation</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">Invoice Overview:</span>
                    Gain insight into your invoice with an invoice report page, where you see invoice metrics with actionable invoice items. React to action right on the same page without leaving the current view
                  </li>
                </ul>
                <div className="">
                {imageViewerData.slice(3, 8).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index}
                        />
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className=" border-x border-stone-200 w-full px-0 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-between relative">
            <Button variant="ghost" size="sm">m</Button>
            <Button variant="ghost" size="sm">m</Button>
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
