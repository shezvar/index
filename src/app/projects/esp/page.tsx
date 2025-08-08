"use client";
import { Card } from "@/components/card";
import { BriefcaseBusiness, Users, MonitorSmartphone, Calendar } from "lucide-react";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { SingleImageView } from "@/components/singleImageViewer";
import ProjectLayout from "../ProjectLayout";

export default function Esp() {
  return (
    <ProjectLayout projectId={6}>
      <div id="projectData">
      <section className="border-x border-y border-stone-200 w-full px-6 lg:px-16 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <BgPattern />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch relative">
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative"
            >
              <div className="flex flex-col w-full">
                <BriefcaseBusiness className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Role:</strong> Lead Product Designer
                </span>
              </div>
            </Card>
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative"
            >
              <div className="flex flex-col w-full">
                <MonitorSmartphone className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Platform:</strong> Web & Mobile (Offline-First)
                </span>
              </div>
            </Card>
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative"
            >
              <div className="flex flex-col w-full">
                <Calendar className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Duration:</strong> 12 weeks design & development
                </span>
              </div>
            </Card>
            <Card
              variant="default"
              padding="md"
              className="w-full flex flex-row justify-start relative"
            >
              <div className="flex flex-col w-full">
                <Users className="size-6 mb-4" />
                <span className="text-base">
                  <strong>Scale:</strong> Millions of citizens
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
                Millions of individuals rely on public platforms for services, but managing these services can be complex and inefficient. Before the platform launch, applying for assistance was slow, confusing, and opaque, with beneficiaries struggling to track their status and agents overwhelmed by manual ticket handling. Administrators lacked effective tools to monitor platform activities and manage users efficiently.
              </p>
              <p>
                As the Lead Product Designer, my task was to create a platform that provided admins with an overview of activities, easy beneficiary and user management, and a streamlined support ticket system. The platform needed to automate qualification criteria, manage role-based access, and ensure beneficiaries had clear visibility of their progress, including a simplified recharge flow. The goal was to design a seamless experience for all users—admins, agents, and beneficiaries.
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
                The Energy Subsidy Programme faced critical challenges across
                multiple user groups, each with distinct needs and pain points
                that required a comprehensive digital solution.
              </p>
              <p>Key challenges included:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Beneficiaries:</strong> Confusing application process,
                  long wait times, and lack of status transparency
                </li>
                <li>
                  <strong>Field Agents:</strong> Poor network coverage leading
                  to duplicate data entry and inefficient workflows
                </li>
                <li>
                  <strong>Call Center Staff:</strong> Overwhelmed with
                  repetitive status inquiries and lack of unified information
                  access
                </li>
                <li>
                  <strong>Data Analysts:</strong> Manual data processing with
                  huge CSV files and lack of real-time insights
                </li>
                <li>
                  <strong>Policymakers:</strong> Outdated, incomplete data
                  preventing timely decision-making
                </li>
                <li>
                  <strong>System Integration:</strong> Multiple disconnected
                  systems causing data inconsistencies and workflow
                  inefficiencies
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Immersive Research & Discovery</h4>
              <div className="mb-4">
                <p>
                  From the start, I knew this project could not be solved by
                  sitting at my desk. I went where the work was happening to
                  understand the real challenges faced by every role in the
                  system.
                </p>
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="text-green-600 mb-2 font-semibold">
                    Key research activities
                  </div>
                  <ul className="*:mb-3">
                    <li>
                      <strong>Field Agent Shadowing</strong> – Rode along with
                      field agents visiting rural households, observing them
                      balancing clipboards, pens, and mobile phones in areas
                      with weak or no internet. When connections dropped, they
                      reverted to paper forms—doubling their workload.
                    </li>
                    <li>
                      <strong>Call Center Observation</strong> – Listened in on
                      call centre staff answering endless variations of the same
                      question: &ldquo;What&lsquo;s my status?&ldquo; Most
                      callers didn&lsquo;t understand the difference between
                      &ldquo;application received&ldquo; and
                      &ldquo;approved.&ldquo;
                    </li>
                    <li>
                      <strong>Data Analyst Interviews</strong> – Observed data
                      analysts struggling with huge CSV files that contained far
                      more data than they needed. They spent hours filtering and
                      re-filtering the same fields each week.
                    </li>
                    <li>
                      <strong>Policy Maker Sessions</strong> – Sat with federal
                      policymakers trying to compare state performance using
                      incomplete, outdated charts. They wanted answers quickly,
                      but the tools forced them to export data to Excel, clean
                      it manually, and build their own comparisons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Key Insights & Design Strategy</h4>
              <p>
                Each research session revealed a frustration—and a design
                opportunity. I translated these insights into specific design
                moves that would address the core challenges while building
                trust across all user groups.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">
                  Insight → Design Move Mapping:
                </strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Offline-First Forms:</strong> Agents wasted hours
                    re-entering data after network outages → Forms that sync
                    automatically once back online
                  </li>
                  <li>
                    <strong>Status as a Story:</strong> Beneficiaries felt stuck
                    in &ldquo;pending limbo&ldquo; with vague updates →
                    Plain-language updates that explain the stage and next steps
                  </li>
                  <li>
                    <strong>Multi-Panel Comparisons:</strong> Analysts
                    couldn&lsquo;t compare regions quickly without manual work →
                    Dashboard comparisons right in the interface
                  </li>
                  <li>
                    <strong>One-Click Replacement Flow:</strong> Lost card
                    replacement process was unclear → Streamlined flow with
                    visible delivery estimates
                  </li>
                  <li>
                    <strong>Saved Filter Sets:</strong> Analysts repeatedly
                    filtered massive datasets → Saved filter sets and column
                    picker for efficient data export
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Design Process</h4>
              <p>
                I followed a comprehensive design process that prioritized
                understanding the unique needs of each user group while ensuring
                the platform could scale nationwide. The process involved
                creating role-specific journeys, designing tailored dashboards,
                and building a scalable design system.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Design Process Steps:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Role-Specific Journey Mapping:</strong> Created
                    detailed user journeys for each stakeholder group to
                    understand their unique workflows and pain points
                  </li>
                  <li>
                    <strong>Offline-First Architecture:</strong> Designed forms
                    and interfaces that work seamlessly in low-connectivity
                    environments
                  </li>
                  <li>
                    <strong>Tailored Dashboard Design:</strong> Built
                    specialized interfaces for beneficiaries, field agents, call
                    center staff, and policymakers
                  </li>
                  <li>
                    <strong>Scalable Design System:</strong> Developed a
                    comprehensive component library for nationwide rollout
                  </li>
                  <li>
                    <strong>Technical Feasibility Collaboration:</strong> Worked
                    closely with engineers to ensure the design could be
                    implemented in challenging conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Solutions</h4>
              <p>
                I designed a comprehensive digital platform that addresses the
                unique needs of every stakeholder while building trust and
                ensuring reliability in challenging environments. The solution
                focuses on creating intuitive, accessible interfaces that work
                for everyone from rural grandmothers to federal policymakers.
              </p>
            </div>
          </div>
        </section>

        <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
              Beneficiary Dashboard & Status Updates
              </strong>
              <p>
                Most government systems show a cold, one-word status:
                &ldquo;Pending.&ldquo; We replaced that with plain, friendly
                updates that explain the stage and next steps. The beneficiary
                dashboard provides clear, human-readable status messages that
                build trust and reduce anxiety, leading to fewer support calls.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-01.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-02.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-03.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-04.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-05.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-dash-06.png" alt="Project Details 2" />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
              Support, Recharge & Registration Flow Management
              </strong>
              <p>
                Agents manage tickets with a unified view of conversations, quick access to features, and the knowledge base for efficient resolution. Beneficiaries enjoy a seamless recharge process and are guided through registration with a progress indicator.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-supp-01.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-supp-02.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-supp-03.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-supp-04.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-supp-05.png" alt="Project Details 2" />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 pt-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
              Optimizing Beneficiary Tracking and Incentive Distribution
              </strong>
              <p>
                Admins and support agents can track beneficiary and agent activities through a comprehensive table with detailed profiles, while also using an intuitive drag-and-drop interface to create incentive distribution mechanics, run simulations, and assess impact rates, streamlining workflows and optimizing decision-making.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-sett-01.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-sett-02.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-sett-03.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-sett-04.png" alt="Project Details 2" />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView src="/assets/esp/esp-sett-05.png" alt="Project Details 2" />
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Outcome & Impact</h4>
              <p>
                The Energy Subsidy Programme platform successfully transformed
                how millions of Nigerians access government support. By
                designing for trust and reliability, we created a system that
                works for everyone—from rural grandmothers to federal
                policymakers—while significantly improving efficiency and user
                satisfaction.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4"
              >
                <div className="">27% faster onboarding for field agents</div>
                <div className="">
                  40% fewer duplicate applications thanks to real-time
                  validation
                </div>
                <div className="">
                  19% drop in &ldquo;status-related&ldquo; calls due to clear,
                  human status messages
                </div>
                <div className="">
                  80% of users rated the platform &ldquo;easy&ldquo; or
                  &ldquo;very easy&ldquo; to use
                </div>
                <div className="">
                  Real-time dashboards replaced monthly reporting delays
                </div>
                <div className="">
                  Offline-first design ensures reliability in low-connectivity
                  areas
                </div>
              </Card>
              <p className="mt-4">
                This project taught me that designing for government services
                isn&lsquo;t just about meeting requirements—it&lsquo;s about
                building trust. Every microcopy line, every form question, every
                dashboard chart is an opportunity to reassure the user:
                &ldquo;We see you. We&lsquo;ve got you. You&lsquo;re in
                control.&ldquo; The best UX isn&lsquo;t just
                functional—it&lsquo;s reassuring.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
} 