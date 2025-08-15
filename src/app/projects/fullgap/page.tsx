"use client";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { SingleImageView } from "@/components/singleImageViewer";
import { KeyFindings } from "@/components/KeyFindings";
import ProjectLayout from "../ProjectLayout";

export default function FullGap() {
  const findings = [
    {
      title: "Rigid Workflows Were Stifling Creativity",
      description: (
        <>
          User interviews revealed a deep frustration with the multi-step,
          linear project creation process. Freelancers and teams felt
          constrained, reporting that the rigid structure was a major barrier to
          getting started and staying in a creative flow.
        </>
      ),
    },
    {
      title: "Users Demanded Simplicity & Modularity",
      description: (
        <>
          A recurring theme was the desire for a toolkit, not a straitjacket.
          Users wanted to pick and choose features like invoicing and contracts,
          and combine them as needed. The one-size-fits-all approach was failing
          to meet diverse needs.
        </>
      ),
    },
    {
      title: "A Hidden B2B Opportunity",
      description: (
        <>
          While initially a B2C tool, we discovered that small businesses were
          &apos;hacking&apos; the system to fit their needs. This insight signaled a
          significant, untapped B2B market hungry for the same flexible,
          user-centric tools.
        </>
      ),
    },
  ];

  return (
    <ProjectLayout projectId={1}>
         <div id="projectData">
           {/* Engaging Overview */}
           <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="w-full flex flex-row justify-start relative">
              <div className="flex flex-col">
                <h4>Overview</h4>
                <p>
                  <strong>Designing for impact, not just aesthetics.</strong>{" "}
                  Fullgap is more than a product—it&apos;s a vision to liberate
                  freelancers and businesses from the constraints of generic,
                  uninspired project management tools. I led the transformation of
                  Fullgap into a platform that empowers independent professionals
                  and teams to work with agility, creativity, and joy.
                </p>
                <p>
                  What began as a simple B2C tool for freelancers quickly evolved.
                  Through immersive research and direct user engagement, I
                  uncovered a broader need: businesses were eager for the same
                  flexibility and empowerment. Fullgap became a modular, adaptive
                  ecosystem—tailored to the unique rhythms of both solo creators
                  and scaling organizations.
                </p>
                <p>
                  <strong>My mission:</strong> To craft experiences that make
                  managing projects, invoices, and contracts not just effortless,
                  but genuinely delightful—removing friction and unlocking new
                  possibilities for every user.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Challenges */}
          <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="w-full flex flex-row justify-start relative">
              <div className="flex flex-col">
                <h4>Challenges</h4>
                <p>
                  <strong>The real challenge:</strong> A{" "}
                  <strong>
                    frustrating, multi-step project creation process
                  </strong>{" "}
                  that left users feeling boxed in and disengaged. Every
                  unnecessary click was a barrier to creativity and productivity.
                </p>
                <p>
                  As a product designer, I saw an opportunity to reimagine the
                  experience from the ground up—making it seamless, intuitive, and
                  empowering for everyone, regardless of their workflow or
                  background.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Research and Insights */}
          <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <h4>Research & Insights</h4>
                <p>
                  <strong>Empathy-driven design starts with listening.</strong> I
                  conducted in-depth <strong>user interviews</strong> and{" "}
                  <strong>SUS questionnaires</strong> to get to the heart of what
                  users truly need. Here&lsquo;s what surfaced:
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
              <div className="max-w-md">
              <p className="font-semibold">My research invloved evaluating and comparing competitors apps to identify key strength and weaknesses.</p>
              </div>
            </div>

            <div className="my-12">
              <Image
                src="/assets/fullgap/fg-process-flow.svg"
                alt="Project Creation"
                width={1600}
                height={400}
                quality={100}
                fetchPriority="high"
              />
            </div>

            <KeyFindings title="Key Findings" items={findings} />
          </section>

          <Divider />

          {/* Solutions */}
          <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="w-full flex flex-row justify-start relative">
              <div className="flex flex-col">
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

          {/* Project Management */}
          <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Project Management: Simplicity Meets Power
                </strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">
                      Instant Project Creation:
                    </span>
                    No more endless forms. Leveraging AI, users can launch a new
                    project in seconds—complete with a smart name, description,
                    and task list. This is frictionless onboarding, reimagined.
                  </li>
                  <li>
                    <span className="font-bold pr-2">At-a-Glance Overviews:</span>
                    All project details and performance metrics are surfaced in a
                    single, intuitive dashboard—empowering users to make decisions
                    at a glance.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Flexible Views:</span>
                    List, grid, or kanban—users choose the view that fits their
                    workflow. Bulk actions make project management effortless and
                    scalable.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Real Collaboration:</span>
                    Comment, react, assign, and manage tasks together.
                    Collaboration is seamless, social, and genuinely enjoyable.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-create.png"
                  alt="Project Creation"
                />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-pj-deets12.png"
                  alt="Project Details 2"
                />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-pj-deets3.png"
                  alt="Project Details 3"
                />
              </div>
            </div>
          </section>

          {/* Invoice Management */}
          <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Invoice Management: Clarity & Control
                </strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">
                      Insightful Invoice Reports:
                    </span>
                    Actionable metrics and quick actions are always at your
                    fingertips, giving users instant clarity on their finances.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Decluttered Details:</span>A
                    focused, single-view invoice experience keeps users organized
                    and in control—no more overwhelm.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Effortless Creation:</span>
                    Users can pull content from existing projects, preview
                    invoices in real time, and enjoy a modern, streamlined flow
                    that saves time and reduces errors.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-inv-1.png"
                  alt="Project Creation"
                />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-inv-2.png"
                  alt="Project Creation"
                />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-inv-3.png"
                  alt="Project Creation"
                />
              </div>
            </div>
          </section>

          {/* Contract Management */}
          <section className="border-x border-b border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Contract Management: Empowerment & Flexibility
                </strong>
                <ul className="list-disc pl-6 *:mb-3">
                  <li>
                    <span className="font-bold pr-2">Modular Workflows:</span>
                    Contracts can be managed independently or alongside projects
                    and invoices—empowering users to design their own process.
                  </li>
                  <li>
                    <span className="font-bold pr-2">
                      Frictionless Collaboration:
                    </span>
                    Invite collaborators, negotiate, and finalize contracts with
                    ease. The experience is built for trust and transparency.
                  </li>
                  <li>
                    <span className="font-bold pr-2">Business Growth:</span>
                    Fullgap is designed to scale—whether you&lsquo;re a freelancer
                    or a growing business, the platform grows with you.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-cont-1.png"
                  alt="Project Creation"
                />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView
                  src="/assets/fullgap/fg-cont-2.png"
                  alt="Project Creation"
                />
              </div>
            </div>
          </section>
         </div>
    </ProjectLayout>
  );
}
