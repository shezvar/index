"use client";
import { Card } from "@/components/card";
import { BriefcaseBusiness, Users, MonitorSmartphone, Calendar } from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { SingleImageView } from "@/components/singleImageViewer";
import { KeyFindings } from "@/components/KeyFindings";
import ProjectLayout from "../ProjectLayout";

export default function DtaLearner() {
  const findings = [
    {
      title: "Learner Persona",
      description: (
        <>
          Three primary learner types were identified: Beginners (new to digital skills), Intermediate (some experience), and Advanced (seeking certification). Each group required different levels of support and guidance.
        </>
      ),
    },
    {
      title: "Accessibility Challenges",
      description: (
        <>
          Many learners had limited internet access and varying device types. The platform needed to work seamlessly across mobile, tablet, and desktop with offline capabilities.
        </>
      ),
    },
    {
      title: "Motivation Factors",
      description: (
        <>
          Learners needed clear progress indicators, peer comparison, and regular feedback to stay engaged. Visual progress tracking and achievement systems were crucial for retention.
        </>
      ),
    },
    {
      title: "Support Requirements",
      description: (
        <>
          Direct access to facilitators and mentors was essential for learner success. In-app messaging and scheduled support sessions were highly valued.
        </>
      ),
    },
  ];

  return (
    <ProjectLayout projectId={3}>
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
                    <strong>Role:</strong> UX Research, UI Design, & Product
                    Strategy
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
                    <strong>Platform:</strong> Web & Mobile Responsive
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
                    <strong>Duration:</strong> 6 weeks design & development
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
                    <strong>Target:</strong> 20,000 Nigerian learners
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
                  In 2025, the FME Digital Training Academy (FME-DTA) was launched
                  to bridge the digital skills gap in Nigeria. The program aimed
                  to upskill 20,000 Nigerians in high-demand digital fields.
                  However, there was a major hurdle—accessibility. Many potential
                  learners had limited internet access, and others needed more
                  than just digital content—they required personalized support and
                  guidance to truly succeed.
                </p>
                <p>
                  The challenge for us as designers was to build a platform that
                  could provide both world-class content from Coursera and
                  human-centered support. Our solution needed to be
                  learner-focused, offering a clear, guided learning path with
                  easy access to facilitators and mentors.
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
                  Nigeria faces a significant digital skills gap, with many
                  citizens lacking access to quality education and career
                  opportunities. Traditional learning platforms often fail to
                  provide the personalized support and motivation needed for
                  learners to succeed, especially in a context with limited
                  internet access and varying technical proficiency levels.
                </p>
                <p>The FME-DTA needed a platform that could:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    Integrate Coursera&lsquo;s world-class content with
                    personalized learning pathways
                  </li>
                  <li>Provide real-time support from facilitators and mentors</li>
                  <li>Offer clear progress tracking and motivation systems</li>
                  <li>
                    Ensure accessibility across different devices and internet
                    conditions
                  </li>
                  <li>
                    Create a seamless journey from registration to certification
                    and career placement
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Divider />

          <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <h4>Research & Discovery</h4>
                <p>
                  I began with comprehensive user research to understand the
                  diverse needs of Nigerian learners. Through interviews,
                  surveys, and field studies, I mapped user workflows, pain
                  points, and motivations to create a learner-centric design
                  approach.
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

            <KeyFindings title="My key findings" items={findings} />
          </section>

          <Divider />

          <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="w-full flex flex-row justify-start relative">
              <div className="flex flex-col">
                <h4>Design Strategy</h4>
                <p>
                  Based on the research insights, I developed a learner-centric
                  design strategy focused on creating a personalized, supportive
                  learning ecosystem. The platform would guide learners
                  step-by-step from onboarding to skill acquisition,
                  certification, and career readiness.
                </p>
                <div className="mt-6">
                  <strong className="block mb-4">Core Design Principles:</strong>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personalization:</strong> Dynamic pre-assessment and
                      adaptive learning pathways
                    </li>
                    <li>
                      <strong>Clarity:</strong> Clear, step-by-step learning
                      progression with visual feedback
                    </li>
                    <li>
                      <strong>Support:</strong> Easy access to facilitators,
                      mentors, and technical support
                    </li>
                    <li>
                      <strong>Motivation:</strong> Data-driven progress tracking
                      and achievement systems
                    </li>
                    <li>
                      <strong>Accessibility:</strong> Responsive design optimized
                      for various devices and connection speeds
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
                  With a clear understanding of learner needs, I designed a
                  comprehensive learning platform that integrates Coursera content
                  with personalized support systems. The solution features a
                  competency-based assessment framework, data-driven progress
                  tracking, and seamless communication tools.
                </p>
              </div>
            </div>
          </section>

          <section className="border-x border-t border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Personalized Onboarding & Dashboard
                </strong>
                <p>
                  The platform begins with a dynamic pre-assessment that places
                  learners on the right pathway based on their initial skills. The
                  central dashboard provides a comprehensive view of progress,
                  upcoming tasks, and personalized recommendations.
                </p>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-nin.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-assess.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-home-1.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-home-2.png" alt="Project Details 2" />
              </div>
            </div>
          </section>

          <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Session Management & Support
                </strong>
                <p>
                  I designed a session management view that allows learners to easily access events they have subscribed to and view other available sessions. This feature provides a seamless experience, and I also integrated a direct line to the support team to ensure learners have easy access to technical assistance whenever they encounter platform issues.
                </p>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-session-01.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-session-02.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-support-01.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-support-02.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-support-03.png" alt="Project Details 2" />
              </div>
            </div>
          </section>

          <section className="border-x border-stone-200 w-full px-6 pt-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="flex flex-col gap-6 w-full lg:px-48">
              <div className="flex flex-col">
                <strong className="mb-4 block">
                  Progress Tracking & Communication
                </strong>
                <p>
                  The platform features engaging data visualizations including
                  progress rings, radar charts, and peer comparisons. In-app
                  messaging enables direct communication between learners and
                  their facilitators or mentors, ensuring support is always
                  accessible.
                </p>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-12 w-full mt-12">
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-01.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-02.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-03.png" alt="Project Details 2" />
              </div>
              <div className="w-full rounded-3xl overflow-hidden col-span-12">
                <SingleImageView src="/assets/dtalearner/fme-learner-04.png" alt="Project Details 2" />
              </div>
            </div>
          </section>

          <Divider />

          <section className="border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
            <div className="w-full flex flex-row justify-start relative">
              <div className="flex flex-col">
                <h4>Outcome & Impact</h4>
                <p>
                  The FME-DTA Learner Platform successfully provides Nigerians
                  with a personalized, supported learning experience that blends
                  world-class content with real-time support. By leveraging
                  data-driven insights and motivational design, we&lsquo;re not
                  just teaching skills—we&lsquo;re shaping the future of the
                  nation&lsquo;s workforce.
                </p>
                <p>
                  The platform is currently in beta testing, with plans to scale
                  to 20,000 learners by the end of 2025. Early feedback has been
                  overwhelmingly positive, with users praising the personalized
                  support and clear progress tracking.
                </p>
              </div>
            </div>
          </section>
      </div>
    </ProjectLayout>
  );
} 