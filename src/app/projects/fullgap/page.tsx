"use client";
import { Divider } from "@/components/divider";
import { KeyFindings } from "@/components/KeyFindings";
import { SingleImageView } from "@/components/singleImageViewer";
import { SectionHeading } from "@/components/SectionHeading";
import { Blockquote } from "@/components/Blockquote";
import ProjectLayout from "../ProjectLayout";
import { BgPattern } from "@/components/bgPattern";
import { Card } from "@/components/card";
import Image from "next/image";
import { BriefcaseBusiness, MonitorSmartphone, Calendar, Users } from "lucide-react";

export default function FullGap() {
  const keyFindings = [
    {
      title: "Rigid workflows stifled creativity",
      description: (
        <>
          Users abandoned setup mid-way due to frustrating multi-step processes that blocked their creative flow.
        </>
      ),
    },
    {
      title: "Need for modularity",
      description: (
        <>
          Users wanted invoicing & contracts as optional tools, not forced steps in their workflow.
        </>
      ),
    },
    {
      title: "Hidden B2B demand",
      description: (
        <>
          Small businesses were &ldquo;hacking&rdquo; Fullgap to suit their needs, revealing an untapped market opportunity.
        </>
      ),
    },
  ];


  return (
    <ProjectLayout projectId={1}>
      <div id="projectData">
        {/* 0. Roles */}
        <section className="border-x border-y border-stone-200 w-full px-6 lg:px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <BgPattern />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch relative">
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative h-full"
            >
              <div className="flex flex-col w-full">
                <BriefcaseBusiness className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Role:</strong> Led end-to-end product design
                </span>
              </div>
            </Card>

            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative h-full"
            >
              <div className="flex flex-col w-full">
                <MonitorSmartphone className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Platform Design:</strong> Desktop & Mobile Responsive
                </span>
              </div>
            </Card>
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative h-full"
            >
              <div className="flex flex-col w-full">
                <Calendar className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Durations:</strong> 3 weeks of research and designing
                </span>
              </div>
            </Card>
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative h-full"
            >
              <div className="flex flex-col w-full">
                <Users className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Participants:</strong> 13 freelancer and 5 startups
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* 1. Introduction — Setting the Stage */}
        <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-col gap-8 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Introduction -{" "}
                <span className="text-stone-400">Setting the Stage</span>
              </SectionHeading>
              <div className="mb-8">
                <p>
                  What began as a B2C tool for freelancers evolved into a
                  modular, adaptive ecosystem—tailored to the rhythms of solo
                  creators and scaling organizations.
                </p>
                <Blockquote>
                  Designing for impact, not just aesthetics. Fullgap is more
                  than a product—it&rsquo;s a vision to liberate freelancers and
                  businesses from the constraints of generic, uninspired project
                  management tools.
                </Blockquote>
              </div>
            </div>
          </div>

          {/* Project Screenshots */}
          <div className="hidden grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-create.webp"
                alt="Project Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-pj-deets12.webp"
                alt="Project Details 2"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-pj-deets3.webp"
                alt="Project Details 3"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-1.webp"
                alt="Invoice Management 1"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-2.webp"
                alt="Invoice Management 2"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-3.webp"
                alt="Invoice Management 3"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-cont-1.webp"
                alt="Contract Management 1"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-cont-2.webp"
                alt="Contract Management 2"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* 2. The Challenge — Where It All Began */}
        <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-col gap-8 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                The Challenge -{" "}
                <span className="text-stone-400">Where It All Began</span>
              </SectionHeading>
              <p>
                Fullgap&rsquo;s original project creation flow was{" "}
                <strong>multi-step, rigid, and creativity-blocking</strong>.
              </p>
              <Card variant="default" padding="none" className="w-full">
                <ul className="divide-y divide-stone-200 *:px-4 *:pt-3">
                  <li>Too many forms before starting work</li>
                  <li>No real-time feedback or flexibility</li>
                  <li>Collaboration felt like an afterthought</li>
                </ul>
                <div className="bg-red-50 py-4 px-6 rounded-b-xl border border-red-100 mt-6">
                  <h5 className="font-semibold text-red-800 mb-1">
                    The Impact:
                  </h5>
                  <p className="text-red-800 mb-0">
                    Every unnecessary click was a barrier to creativity and
                    productivity.
                  </p>
                </div>
              </Card>
            </div>

            <div className="hidden grid gap-6 grid-cols-1 lg:grid-cols-2 mt-8">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h6 className="font-semibold mb-3 text-red-600">
                  Before: Old Workflow
                </h6>
                <p className="text-sm text-gray-600">
                  Multi-step forms, rigid structure, creativity barriers
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h6 className="font-semibold mb-3 text-green-600">
                  After: Streamlined Creation
                </h6>
                <p className="text-sm text-gray-600">
                  Instant setup, flexible workflows, seamless collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 3. Research & Insights — Listening Before Designing */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Research & Insights —{" "}
                <span className="text-stone-400">
                  Listening Before Designing
                </span>
              </SectionHeading>
              <div className="mt-6">
                <SectionHeading level={2}>Methods Used:</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-900">
                      User Interviews
                    </h6>
                    <p className="text-sm text-blue-700 mb-0">
                      (freelancers & small businesses)
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-900">
                      SUS Questionnaires
                    </h6>
                    <p className="text-sm text-purple-700 mb-0">
                      for usability scoring
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h6 className="font-semibold text-green-900">
                      Competitor Benchmarking
                    </h6>
                    <p className="text-sm text-green-700 mb-0">
                      (Trello, Asana, Notion, Bonsai)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h5 className="font-semibold mb-4 text-base">
                SUS Questionnaires
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card variant="default" padding="sm" className="rotate-[-2deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I found the system unnecessarily complex
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[1deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I thought the system was easy to use
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[3deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I would need technical support to use this system
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[-1deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I found the various functions well integrated
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[2deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I thought there was too much inconsistency
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[-3deg]">
                  <span className="text-sm font-medium text-gray-600">
                    Most people would learn to use this quickly
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[1deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I found the system very cumbersome to use
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[-2deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I felt very confident using the system
                  </span>
                </Card>
                <Card variant="default" padding="sm" className="rotate-[3deg]">
                  <span className="text-sm font-medium text-gray-600">
                    I needed to learn a lot before using this
                  </span>
                </Card>
              </div>
            </div>
          </div>

          <KeyFindings title="Key Findings" items={keyFindings} />
        </section>

        <Divider />

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Feedback & Iterations —{" "}
                <span className="text-stone-400">Designing in the Open</span>
              </SectionHeading>
              <p>
                I began with comprehensive interviews and field surveys across
                two states. Through these sessions, I mapped user workflows,
                pain points, emotions and timeframes, and created a process
                flowchart to visualise interactions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Initial Concept</SectionHeading>
              <Blockquote>Still feels like filling tax form</Blockquote>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/fullgap/fg-initial-concept.webp"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Second Iteration</SectionHeading>
              <Blockquote>I can start projects in seconds.</Blockquote>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/fullgap/fg-second-concept.webp"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <Blockquote>
                I don’t want the tool to tell me how to work. I want to tell the
                tool how I work.
                <footer className="text-sm text-blue-600 mt-2">
                  — Small Business Owner, Beta Test
                </footer>
              </Blockquote>
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                What Went Wrong —{" "}
                <span className="text-stone-400">And What I Learned</span>
              </SectionHeading>
              <p>Even with strong research, we hit challenges</p>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/fullgap/fg-wrongright.svg"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={100}
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <Blockquote>
                Ship leaner, validate sooner, and phase features in—especially
                when targeting two audiences (B2C + B2B).
                <footer className="text-sm text-blue-600 mt-2">
                  — Discovery
                </footer>
              </Blockquote>
            </div>
          </div>
        </section>

        <Divider />

        {/* 6. The Solution — Modular & Human-Centered */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                The Solution —{" "}
                <span className="text-stone-400">Modular & Human-Centered</span>
              </SectionHeading>
              <p className="mb-8">
                Fullgap was reimagined as a{" "}
                <strong>highly flexible and modular platform</strong>. Here are
                the key features that directly addressed user pain points and
                business goals:
              </p>

              <div className="my-12">
                <Image
                  src="/assets/fullgap/fg-modules.svg"
                  alt="Modules"
                  width={1600}
                  height={400}
                  quality={100}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div>
              <SectionHeading level={2}>
                Project Management —{" "}
                <span className="text-stone-400">Simplicity Meets Power</span>
              </SectionHeading>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold">AI Instant Creation</span> – No
                  more endless forms. Leveraging AI, users can launch a new
                  project in seconds—complete with a smart name, description,
                  and task list. This is frictionless onboarding, reimagined.
                </li>
                <li>
                  <span className="font-bold">At-a-Glance Dashboard</span> – All
                  project details and performance metrics are surfaced in a
                  single, intuitive dashboard—empowering users to make decisions
                  at a glance.
                </li>
                <li>
                  <span className="font-bold">Flexible Views</span> – List,
                  grid, or kanban—users choose the view that fits their
                  workflow. Bulk actions make project management effortless and
                  scalable.
                </li>
                <li>
                  <span className="font-bold">Social Collaboration</span> –
                  Comment, react, assign, and manage tasks together.
                  Collaboration is seamless, social, and genuinely enjoyable.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-create.webp"
                alt="Project Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-pj-deets-double.webp"
                alt="Project Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-pj-deets-views.webp"
                alt="Project Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-pj-deets-collab.webp"
                alt="Project Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div>
              <SectionHeading level={2}>
                Invoice Management —{" "}
                <span className="text-stone-400">Clarity & Control</span>
              </SectionHeading>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold">Insightful Reports</span> –
                  Actionable metrics and quick actions are always at your
                  fingertips, giving users instant clarity on their finances.
                </li>
                <li>
                  <span className="font-bold">Decluttered Details</span> – A
                  focused, single-view invoice experience keeps users organized
                  and in control—no more overwhelm.
                </li>
                <li>
                  <span className="font-bold">Effortless Creation</span> – Users
                  can pull content from existing projects, preview invoices in
                  real time, and enjoy a modern, streamlined flow that saves
                  time and reduces errors.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-1.webp"
                alt="Invoice Overview"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-2.webp"
                alt="Invoice Details"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-inv-3.webp"
                alt="Invoice Creation"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div>
              <SectionHeading level={2}>
                Contract Management —{" "}
                <span className="text-stone-400">
                  Empowerment & Flexibility
                </span>
              </SectionHeading>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold">Modular Workflow</span> –
                  Contracts can be managed independently or alongside projects
                  and invoices—empowering users to design their own process.
                </li>
                <li>
                  <span className="font-bold">Frictionless Collaboration</span>{" "}
                  – Invite collaborators, negotiate, and finalize contracts with
                  ease. The experience is built for trust and transparency.
                </li>
                <li>
                  <span className="font-bold">Growth Ready</span> – Fullgap is
                  designed to scale—whether you‘re a freelancer or a growing
                  business, the platform grows with you.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-cont-1.webp"
                alt="Invoice Overview"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/fullgap/fg-cont-2.webp"
                alt="Invoice Details"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ebS7N8AAAAASUVORK5CYII="
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* 7. Metrics — Measuring the Impact */}
        <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-col gap-8 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Metrics -{" "}
                <span className="text-stone-400">Measuring the Impact</span>
              </SectionHeading>
              <p>
                Here&rsquo;s how Fullgap&rsquo;s new design impacted user engagement and product performance:
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch relative">
                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      <strong>Avg. Time to Create Project:</strong> 30% faster
                      than before
                    </span>
                  </div>
                </Card>

                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      <strong>User Engagement:</strong> 200% increase in user
                      engagement
                    </span>
                  </div>
                </Card>
                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      <strong>Product Performance:</strong> 66% increase in
                      product performance
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 8. Reflection — Beyond the Launch */}
        <section className="border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-col gap-8 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Reflection -{" "}
                <span className="text-stone-400">Beyond the Launch</span>
              </SectionHeading>
              <p>Fullgap&rsquo;s evolution wasn&rsquo;t just about UI polish — it was about:
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch relative">
                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      Listening deeply to what users weren&rsquo;t saying outright
                    </span>
                  </div>
                </Card>

                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      Designing a system that could scale across audiences
                    </span>
                  </div>
                </Card>
                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      Accepting that done is better than perfect, as long as feedback loops remain open
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
