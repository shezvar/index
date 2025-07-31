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
  { src: "/assets/fullgap/fg-projectcreate.png", alt: "Create Project" },
  { src: "/assets/fullgap/fg-projectdetails.png", alt: "Project Details" },
  { src: "/assets/fullgap/fg-projectdetailslist.png", alt: "Project Details List" },
  { src: "/assets/fullgap/fg-projectdetailstask.png", alt: "Project Details Task" },

  { src: "/assets/fullgap/fg-invoicehome.png", alt: "Invoice Home" },
  { src: "/assets/fullgap/fg-invoicedetails.png", alt: "Invoice Details" },
  { src: "/assets/fullgap/fg-invoicecreate.png", alt: "Invoice Create" },

  { src: "/assets/fullgap/fg-contractcreateoptions.png", alt: "Contract Creation" },
  { src: "/assets/fullgap/fg-contractcreatefooter.png", alt: "Contract Creation Footer" },
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
            .filter((item) => item.id === 1)
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
                Fullgap began as a B2C platform aimed at helping freelancers
                manage their projects, tasks, and clients. Through research, we
                expanded it to include a B2B offering, increasing the platform&apos;s
                business reach. Fullgap sought to streamline operations for both
                freelancers and businesses by offering a flexible, modular
                system.
              </p>
              <p>
                The initial goal was to simplify the project creation process
                and boost engagement, but I later discovered that freelancers
                and businesses needed a more flexible system where they could
                manage projects, invoices, and contracts independently — a need
                identified during research and testing.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Challenges</h4>
              <p>
                The primary challenge was overcoming a{" "}
                <strong>rigid, multi-step project creation workflow</strong>{" "}
                that frustrated users and limited engagement by forcing
                unnecessary steps.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Research and Insights</h4>
              <p>
                Through <strong>interviews</strong> and{" "}
                <strong>SUS questionnaires,</strong> key insights emerged:
              </p>
              <ul className="list-disc pl-6 *:mb-3">
                <li>
                  <span className="font-bold block">User Pain Points</span>Fixed
                  workflows, inability to independently manage modules, and lack
                  of collaboration tools.
                </li>
                <li>
                  <span className="font-bold block">Desired Outcomes</span>
                  Simplified setup, modular feature access, and improved
                  collaboration.
                </li>
                <li>
                  <span className="font-bold block">Business Goals</span>
                  Increase engagement, expand to B2B, and generate new revenue
                  via modular services.
                  <br />
                  &quot;How Might We&quot; statements guided solutions for both user needs
                  and business objectives.
                </li>
              </ul>
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
                <strong className="mb-4 block">1. Project Management</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">Project Creation:</span>
                    From multiple options to a single option. Users can now create a project in a single step, utilising the AI to generate a project name, description and tasks.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Project Overview:</span>
                    Quick access to project details, analysis of the project performance and other key metrics.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Project List:</span>
                    Different views of the project list, including a list view, a grid view and a kanban view. Perform bulk actions on the project list.
                  </li>
                  
                  <li>
                    <span className="font-bold pr-2">Collaboration:</span>
                    Users can now collaborate with each other on a project, from commenting on tasks to reacting on the comment, the ability to manage task preferences and assign tasks to other users.
                  </li>
                </ul>
                <div className="">
                  {imageViewerData.slice(0, 4).map((image, index) => (
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
                <strong className="mb-4 block">2. Invoice Management</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">Invoice Overview:</span>
                    Gain insight into your invoice with an invoice report page, where you see invoice metrics with actionable invoice items. React to action right on the same page without leaving the current view
                  </li>
                  <li>
                    <span className="font-bold pr-2">Invoice Details:</span>
                    Decluttered single invoice view page, carefully structured to reduce information overload while still maintaining key actions visibility for easy access.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Invoice Creation:</span>
                    Redesigned the invoice creation flow to a more modern feel. No need to type everything from scratch as content can now be pulled from existing projects. Using two-way data binding, User can see the preview of an invoice as they input the needed data.
                  </li>
                </ul>
                <div className="">
                {imageViewerData.slice(4, 7).map((image, index) => (
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
                <strong className="mb-4 block">3. Contract Management</strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">User Pain Points:</span>
                    Fixed workflows, inability to independently manage modules,
                    and lack of collaboration tools.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Desired Outcomes</span>
                    Simplified setup, modular feature access, and improved
                    collaboration.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Business Goals</span>
                    Increase engagement, expand to B2B, and generate new revenue
                    via modular services.
                    <br />
                    &quot;How Might We&quot; statements guided solutions for both user
                    needs and business objectives.
                  </li>
                </ul>
                <div className="">
                {imageViewerData.slice(7, 9).map((image, index) => (
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
