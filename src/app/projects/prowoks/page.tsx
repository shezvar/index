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
import ProjectLayout from "../ProjectLayout";

export default function FullGap() {
  const findings = [
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

  return (
    <ProjectLayout projectId={2}>
      <div id="projectData">
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

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Overview</h4>
              <p>
                Nigeria faces significant challenges in managing its public
                finances. Inefficiencies, outdated financial data and
                decentralized information across ministries create obstacles to
                transparency and accountability, hindering economic growth.
                These issues are compounded by corruption, inadequate revenue
                and high expenses, resulting in a budget deficit of ₦5.60
                trillion in 2021. Recognising the scale of the problem, the
                World Bank sponsored a state‑level project to improve
                transparency and accountability in budget and expenditure
                management. My role was to research and design an enterprise
                solution that would automate budget processes and bring
                visibility to state expenditure.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Problem Statement</h4>
              <p>
                Nigeria&apos;s ₦5.60 trillion budget deficit in 2021 wasn&apos;t
                just a number—it was a symptom of a deeply broken system. The
                public finance process was trapped in a cycle of manual
                handoffs, decentralized data, and painfully slow approvals. This
                created a breeding ground for inefficiency and eroded public
                trust, making it impossible to track spending or ensure
                accountability.
              </p>
              <p>
                The core challenge was clear: How might we replace a system of
                opaque, manual workflows with a transparent, automated platform
                that empowers civil servants and restores trust in public
                finance?
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <h4>Research & Discovery</h4>
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
              <p className="font-semibold">Navigating the journey from design to prototype</p>
            </div>
          </div>

          <div className="my-12">
            <Image
              src="/assets/prowoks/processFlow.svg"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={100}
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
            <div className="max-w-md">
            <p className="font-semibold">Mapping the current activity processes and finding the North Star!</p>
            </div>
          </div>
          <div className="my-12">
            <Image
              src="/assets/prowoks/flowChart.svg"
              alt="Project Creation"
              width={1600}
              height={400}
              quality={100}
              fetchPriority="high"
            />
          </div>

          <KeyFindings title="My key findings" items={findings} />
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Solutions</h4>
              <p>
                With a clear understanding of user needs, the team brainstormed
                features for a digital budget module. Ideas ranged from
                automated workflow routing to real‑time expenditure dashboards.
                We prioritised features that improved transparency and shortened
                approval cycles.
              </p>
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
              Time-based Workflow
              </strong>
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
              <SingleImageView src="/assets/prowoks/pw-wk-1.png" alt="Project Creation" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-wk-2.png" alt="Project Details 2" />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 pt-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
              Reconciliation
              </strong>
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
              <SingleImageView src="/assets/prowoks/pw-rc-1.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-rc-2.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-rc-3.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-rc-4.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-rc-5.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/prowoks/pw-rc-6.png" alt="Project Details 2" />
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Outcome & Impact</h4>
              <p>
                The project was a success, with the digital budget module
                implemented in both states. The system has improved transparency
                and accountability in budget and expenditure management, and has
                helped to reduce the budget deficit.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4"
              >
                <div className="">
                  90 % budget automation across three states
                </div>
                <div className="">
                  95 % reduction in wait time for task completion and feedback
                </div>
                <div className="">
                  ₦50 million saved by reducing paper usage and printing costs
                </div>
              </Card>
              <p className="mt-4">
                These outcomes demonstrate how a thoughtfully researched and
                well‑designed digital platform can transform public finance
                management.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
