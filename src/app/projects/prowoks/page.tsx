"use client";
import { Card } from "@/components/card";
import { BriefcaseBusiness, Users, MonitorSmartphone, Calendar } from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { ProjectImageViewOne } from "@/components/projectImageViewer";
import { FooterCTA } from "@/components/footerCTA";
import ProjectBackButton from "@/components/ProjectBackButton";
import introData from "@/app/data/project.json";
import ProjectNavigation from "@/components/projectNavigation";

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
                  <BriefcaseBusiness className="size-6 mb-4" />
                  <h4 className="text-base">
                  <strong>Role:</strong> Research, IA, and Design
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
                  <MonitorSmartphone className="size-6 mb-4" />
                  <h4 className="text-base">
                    <strong>Platform Design:</strong> Desktop & Mobile Responsive
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
                  <Calendar className="size-6 mb-4" />
                  <h4 className="text-base">
                    <strong>Durations:</strong> 5½ weeks across two pilot states
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
                    <strong>Participants:</strong> 53 civil servants from 23 ministries
                  </h4>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Overview</h4>
              <p>
              Nigeria faces significant challenges in managing its public finances. Inefficiencies, outdated financial data and decentralized information across ministries create obstacles to transparency and accountability, hindering economic growth. These issues are compounded by corruption, inadequate revenue and high expenses, resulting in a budget deficit of ₦5.60 trillion in 2021. Recognising the scale of the problem, the World Bank sponsored a state‑level project to improve transparency and accountability in budget and expenditure management. My role was to research and design an enterprise solution that would automate budget processes and bring visibility to state expenditure.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Problem Statement</h4>
              <p>
              Nigeria&lsquo;s budget process was drowning in decentralised data, outdated manual workflows, and slow approvals — leading to inefficiencies, corruption risks, and a ₦5.60 trillion deficit in 2021.
              </p>
              <p>
              Side-by-side Before vs. After workflow diagrams: Before: messy arrows, paper icons, Excel icons. After: clean linear timeline with approval icons.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Research & Discovery</h4>
              <div className="mb-4">
                <p>I began with comprehensive interviews and field surveys across two states. Through these sessions, I mapped user workflows, pain points, emotions and timeframes, and created a process flowchart to visualise interactions.</p>
                <div className="mb-12 flex flex-col gap-16">
                  <Image src="/assets/prowoks/pw-process-flow.png" alt="Process Flow" width={1000} height={1000} />
                  <Image src="/assets/prowoks/pw-persona.png" alt="Process Flow" width={1000} height={1000} />
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                <div className="text-green-600 mb-2 font-semibold">Key findings</div>
                <ul className="*:mb-3">
                  <li>
                    <strong>User Roles</strong> – three primary groups were identified: Administrators, Actors and Moderators. Administrators configure statewide processes, Actors complete day‑to‑day tasks, and Moderators oversee activities within their ministries.
                  </li>
                  <li>
                    <strong>Actor Sub‑roles</strong> – to reflect the diversity of responsibilities, the Actor role was subdivided into <strong>Initiators, Authors, Directors, Supervisor Officers and Accounting Officers</strong>. This ensured the system could assign appropriate permissions and workflows.
                  </li>
                  <li>
                    <strong>Process pain points</strong> –  interviews highlighted long approval times, duplication of documentation and difficulty reconciling ledgers. Stakeholders expressed frustration with the opaque nature of budget preparation.
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Divider /> */}

        <section className="hidden border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
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

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Solutions</h4>
              <p>
              With a clear understanding of user needs, the team brainstormed features for a digital budget module. Ideas ranged from automated workflow routing to real‑time expenditure dashboards. We prioritised features that improved transparency and shortened approval cycles.
              </p>
              
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">   
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col blog-post">
                <strong className="mb-4 block">Time-based Workflow</strong>
                <p>After several wireframes and high‑fidelity prototypes, we pivoted to a timeline approach. This model presents each budget process as a series of time‑based events, making it easy for actors to see pending tasks, approval stages and handoffs. It also supports conditional branching, enabling departments to configure their own flows.</p>
                
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

        <section className="border-x  border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col blog-post">
                <strong className="mb-4 block">Reconciliation</strong>
                <p>To address the issue of reconciliation, we designed a system that automatically compares budget entries with bank statements, ensuring accuracy and preventing discrepancies. This feature not only reduces manual effort but also enhances transparency by providing a clear audit trail of all financial transactions.</p>
                
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

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col blog-post">
              <h4>Outcome & Impact</h4>
              <p>
              The project was a success, with the digital budget module implemented in both states. The system has improved transparency and accountability in budget and expenditure management, and has helped to reduce the budget deficit.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4">
                <div className="">90 % budget automation across three states</div>
                <div className="">95 % reduction in wait time for task completion and feedback</div>
                <div className="">₦50 million saved by reducing paper usage and printing costs</div>
              </Card>
              <p className="mt-4">These outcomes demonstrate how a thoughtfully researched and well‑designed digital platform can transform public finance management.</p>
              
            </div>
          </div>
        </section>

        {/* PostNavigation Component */}
        <ProjectNavigation currentId={2} introData={introData} />

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>
    </div>
  );
}
