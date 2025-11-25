"use client";
import { Card } from "@/components/card";
import {
  BriefcaseBusiness,
  Calendar,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { SingleImageView } from "@/components/singleImageViewer";
import { KeyFindings } from "@/components/KeyFindings";
import { SectionHeading } from "@/components/SectionHeading";
import { Blockquote } from "@/components/Blockquote";
import ProjectLayout from "../ProjectLayout";

export default function Prowoks() {
  const keyFindings = [
    {
      title: "One-Size-Fits-All Role Was Failing",
      description: (
        <>
          The initial &quot;Actor&quot; role was too broad. Interviews revealed that
          tasks ranged from simple data entry to high-level financial
          approvals. This mismatch created friction, with users either lacking
          permissions or being overwhelmed by irrelevant options.
        </>
      ),
    },
    {
      title: "Manual Handoffs Caused Bottlenecks",
      description: (
        <>
          The existing budget process relied on manual handoffs via email and
          paper forms. This led to significant delays, lost documents, and a
          total lack of visibility. Users expressed deep frustration with the
          &quot;black box&quot; nature of the approval chain.
        </>
      ),
    },
    {
      title: "Data Discrepancies Eroded Trust",
      description: (
        <>
          A critical discovery was the widespread mistrust in financial data.
          Without automated reconciliation, users spent hours manually
          cross-checking figures, which delayed critical decisions and eroded
          confidence in the system&apos;s accuracy.
        </>
      ),
    },
  ];



  const lessonsLearned = [
    {
      title: "Stakeholder Engagement",
      description: "Deep engagement with civil servants was crucial for understanding real workflow needs and ensuring adoption."
    },
    {
      title: "Institutional Complexity",
      description: "Government processes have evolved over decades. Digitization requires respecting existing hierarchies while improving efficiency."
    },
    {
      title: "Security & Transparency Balance",
      description: "Finding the right balance between public transparency and sensitive government data protection was a key challenge."
    },
    {
      title: "Iterative Design Approach",
      description: "Regular feedback sessions with end users led to significant improvements in usability and workflow efficiency."
    }
  ];

  return (
    <ProjectLayout projectId={2}>
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
                  <strong>Role:</strong> Research, IA, and Design
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
                  <strong>Durations:</strong> 5½ weeks across two pilot states
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
                  <strong>Participants:</strong> 53 civil servants from 23
                  ministries
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
                  Nigeria faces significant challenges in managing its public
                  finances. Inefficiencies, outdated financial data and
                  decentralized information across ministries create obstacles to
                  transparency and accountability, hindering economic growth.
                </p>
                <Blockquote>
                   Designing for transparency, not just efficiency. Prowoks is more
                   than a budget tool—it&rsquo;s a vision to transform public finance
                   management and restore trust in government spending.
                 </Blockquote>
              </div>
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
                   Nigeria&apos;s ₦5.60 trillion budget deficit in 2021 wasn&apos;t
                   just a number—it was a symptom of a <strong>deeply broken system</strong>.
                 </p>
              <Card variant="default" padding="none" className="w-full">
                <ul className="divide-y divide-stone-200 *:px-4 *:pt-3">
                  <li>Manual handoffs via email and paper forms</li>
                  <li>Decentralized data across ministries</li>
                  <li>No visibility into approval processes</li>
                  <li>Widespread mistrust in financial data</li>
                </ul>
                <div className="bg-red-50 py-4 px-6 rounded-b-xl border border-red-100 mt-6">
                  <h5 className="font-semibold text-red-800 mb-1">
                    The Impact:
                  </h5>
                  <p className="text-red-800 mb-0">
                    Every manual process was a barrier to transparency and
                    accountability, eroding public trust.
                  </p>
                </div>
              </Card>
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
                      (53 civil servants from 23 ministries)
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-900">
                      Field Surveys
                    </h6>
                    <p className="text-sm text-purple-700 mb-0">
                      across two pilot states
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h6 className="font-semibold text-green-900">
                      Process Mapping
                    </h6>
                    <p className="text-sm text-green-700 mb-0">
                      workflows and pain points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Navigating the journey from design to prototype</SectionHeading>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/prowoks/processFlow.svg"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Mapping the current activity processes and finding the North Star!</SectionHeading>
            </div>
          </div>
          <div className="my-12">
            <Image
              src="/assets/prowoks/flowChart.svg"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
            />
          </div>

          <KeyFindings title="Key Findings" items={keyFindings} />
        </section>

        <Divider />

        {/* 4. Feedback & Iterations — Designing in the Open */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Feedback & Iterations —{" "}
                <span className="text-stone-400">Designing in the Open</span>
              </SectionHeading>
              <p>
                Through iterative design sessions with civil servants, we refined
                the system based on real-world feedback and usage patterns.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Initial Concept</SectionHeading>
              <Blockquote>Too complex for civil servants to navigate</Blockquote>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/prowoks/processFlow.svg"
              alt="Initial Concept"
              width={1600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <SectionHeading level={2}>Refined Approach</SectionHeading>
              <Blockquote>Much clearer workflow, but we need better role definitions</Blockquote>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/prowoks/flowChart.svg"
              alt="Refined Approach"
              width={1600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <Blockquote>
                We need a system that understands our different roles and responsibilities.
                Not everyone should see everything.
                <footer className="text-sm text-blue-600 mt-2">
                  — Ministry of Finance Official, User Testing
                </footer>
              </Blockquote>
            </div>
          </div>
        </section>

        <Divider />

        {/* 5. What Went Wrong — And What I Learned */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                What Went Wrong —{" "}
                <span className="text-stone-400">And What I Learned</span>
              </SectionHeading>
              <p>Even with thorough research, we encountered significant challenges</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h6 className="font-semibold mb-3 text-red-600">
                  Challenge: Role Complexity
                </h6>
                <p className="text-sm text-gray-600">
                  Initial &quot;Actor&quot; role was too broad, causing confusion and permission issues
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h6 className="font-semibold mb-3 text-green-600">
                  Solution: Granular Permissions
                </h6>
                <p className="text-sm text-gray-600">
                  Implemented specific roles for different responsibility levels
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
              <Blockquote>
                Design for the system, not just the interface. Government workflows
                require deep understanding of institutional hierarchies.
                <footer className="text-sm text-blue-600 mt-2">
                  — Key Learning
                </footer>
              </Blockquote>
            </div>
          </div>
        </section>

        <Divider />

        {/* 6. The Solution — Transparent & Automated */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                The Solution —{" "}
                <span className="text-stone-400">Transparent & Automated</span>
              </SectionHeading>
              <p className="mb-8">
                Prowoks was designed as a <strong>comprehensive digital budget platform</strong>
                that addresses the core issues of transparency, efficiency, and accountability.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <SectionHeading level={2}>
                  Digital Budget Management
                </SectionHeading>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Automated Workflow Routing:</strong> Intelligent routing based on budget categories and approval hierarchies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Real-time Dashboard:</strong> Live expenditure tracking and budget status monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Role-based Access:</strong> Granular permissions ensuring data security and appropriate access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Audit Trail:</strong> Complete transaction history for accountability and compliance</span>
                  </li>
                </ul>
              </div>
              <div>
                <SectionHeading level={2}>
                  Transparency & Accountability
                </SectionHeading>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Public Dashboard:</strong> Citizen-facing interface for budget transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Automated Reporting:</strong> Regular financial reports generated automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Compliance Monitoring:</strong> Built-in checks for regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Alert System:</strong> Proactive notifications for budget thresholds and deadlines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={2}>
                Time-based Workflow
              </SectionHeading>
              <p>
                After several wireframes and high‑fidelity prototypes, we
                pivoted to a timeline approach. This model presents each budget
                process as a series of time‑based events, making it easy for
                actors to see pending tasks, approval stages and handoffs. It
                also supports conditional branching, enabling departments to
                configure their own flows.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-wk-1.webp" alt="Project Creation" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-wk-2.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 pt-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={2}>
                Budget Reconciliation
              </SectionHeading>
              <p>
                To address the issue of reconciliation, we designed a system
                that automatically compares budget entries with bank statements,
                ensuring accuracy and preventing discrepancies. This feature not
                only reduces manual effort but also enhances transparency by
                providing a clear audit trail of all financial transactions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-1.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-2.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-3.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-4.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-5.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
            <SingleImageView src="/assets/prowoks/pw-rc-6.webp" alt="Project Details 2" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" />
            </div>
          </div>
        </section>

        <Divider />

        {/* 7. Metrics — Measuring the Impact */}
        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Metrics —{" "}
                <span className="text-stone-400">Measuring the Impact</span>
              </SectionHeading>
              <p>
                The implementation of Prowoks delivered measurable improvements
                across key performance indicators.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-8">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch relative">
                <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      <strong>90%</strong> Budget Automation
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
                      <strong>95%</strong> Reduction in Manual Effort
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
                      <strong>50M:</strong> Cost Savings
                    </span>
                  </div>
                </Card>
              </div>
            <div className="w-full">
              <Card
                  variant="default"
                  padding="md"
                  className="w-full flex flex-row justify-start relative h-full"
                >
                  <div className="flex flex-col w-full">
                    <span className="text-base">
                      <strong>Government Efficiency Improvement</strong> The digital transformation reduced manual processes by 75% and improved inter-departmental collaboration significantly.
                    </span>
                  </div>
                </Card>
            </div>
          </div>

        </section>

        <Divider />

        {/* 8. Reflection — Beyond the Launch */}
        <section className="border-x border-b border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <SectionHeading level={1}>
                Reflection —{" "}
                <span className="text-stone-400">Beyond the Launch</span>
              </SectionHeading>
              <p>
                Working on Prowoks taught me valuable lessons about designing
                for complex institutional systems and the importance of
                stakeholder engagement in government technology projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:px-48 mt-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {lessonsLearned.map((lesson, index) => (
                 <Card key={index} className="p-6">
                   <h6 className="font-semibold text-blue-600 mb-3">
                     {lesson.title}
                   </h6>
                   <p className="text-sm text-gray-600">
                     {lesson.description}
                   </p>
                 </Card>
               ))}
             </div>
           </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-2xl">
              <Blockquote>
                Government technology isn&apos;t just about building software—it&apos;s about
                understanding centuries-old institutional processes and finding ways
                to honor them while making them more efficient and transparent.
                <footer className="text-sm text-blue-600 mt-2">
                  — Key Reflection
                </footer>
              </Blockquote>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
