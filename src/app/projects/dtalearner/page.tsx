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
  { src: "/assets/dtalearner/dta-dashboard.png", alt: "Learner Dashboard" },
  { src: "/assets/dtalearner/dta-onboarding.png", alt: "Onboarding Flow" },
  { src: "/assets/dtalearner/dta-assessment.png", alt: "Assessment Framework" },
  { src: "/assets/dtalearner/dta-projects.png", alt: "Project Submission" },
  { src: "/assets/dtalearner/dta-progress.png", alt: "Progress Tracking" },
  { src: "/assets/dtalearner/dta-communication.png", alt: "Communication Hub" },
  { src: "/assets/dtalearner/dta-mobile.png", alt: "Mobile Responsive" },
  { src: "/assets/dtalearner/dta-certification.png", alt: "Certification View" },
];

export default function DtaLearner() {
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
            .filter((item) => item.id === 3)
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
                    imageRendering: "crisp-edges",
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
                  <span className="text-base">
                  <strong>Role:</strong> UX Research, UI Design, & Product Strategy
                  </span>
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
                  <span className="text-base">
                    <strong>Platform:</strong> Web & Mobile Responsive
                  </span>
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
                  <span className="text-base">
                    <strong>Duration:</strong> 8 weeks design & development
                  </span>
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
                  <span className="text-base">
                    <strong>Target:</strong> 20,000 Nigerian learners
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Overview</h4>
              <p>
              In 2025, the FME Digital Training Academy (FME-DTA) was launched to bridge the digital skills gap in Nigeria. The program aimed to upskill 20,000 Nigerians in high-demand digital fields. However, there was a major hurdle—accessibility. Many potential learners had limited internet access, and others needed more than just digital content—they required personalized support and guidance to truly succeed.
              </p>
              <p>
              The challenge for us as designers was to build a platform that could provide both world-class content from Coursera and human-centered support. Our solution needed to be learner-focused, offering a clear, guided learning path with easy access to facilitators and mentors.
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
              Nigeria faces a significant digital skills gap, with many citizens lacking access to quality education and career opportunities. Traditional learning platforms often fail to provide the personalized support and motivation needed for learners to succeed, especially in a context with limited internet access and varying technical proficiency levels.
              </p>
              <p>
              The FME-DTA needed a platform that could:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Integrate Coursera&lsquo;s world-class content with personalized learning pathways</li>
                <li>Provide real-time support from facilitators and mentors</li>
                <li>Offer clear progress tracking and motivation systems</li>
                <li>Ensure accessibility across different devices and internet conditions</li>
                <li>Create a seamless journey from registration to certification and career placement</li>
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Research & Discovery</h4>
              <div className="mb-4">
                <p>I began with comprehensive user research to understand the diverse needs of Nigerian learners. Through interviews, surveys, and field studies, I mapped user workflows, pain points, and motivations to create a learner-centric design approach.</p>
                <div className="mb-12 flex flex-col gap-16">
                  <Image src="/assets/dtalearner/dta-persona.png" alt="Learner Persona" width={1000} height={1000} />
                  <Image src="/assets/dtalearner/dta-journey.png" alt="User Journey Map" width={1000} height={1000} />
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                <div className="text-green-600 mb-2 font-semibold">Key findings</div>
                <ul className="*:mb-3">
                  <li>
                    <strong>Learner Persona</strong> – Three primary learner types were identified: Beginners (new to digital skills), Intermediate (some experience), and Advanced (seeking certification). Each group required different levels of support and guidance.
                  </li>
                  <li>
                    <strong>Accessibility Challenges</strong> – Many learners had limited internet access and varying device types. The platform needed to work seamlessly across mobile, tablet, and desktop with offline capabilities.
                  </li>
                  <li>
                    <strong>Motivation Factors</strong> – Learners needed clear progress indicators, peer comparison, and regular feedback to stay engaged. Visual progress tracking and achievement systems were crucial for retention.
                  </li>
                  <li>
                    <strong>Support Requirements</strong> – Direct access to facilitators and mentors was essential for learner success. In-app messaging and scheduled support sessions were highly valued.
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
              <h4>Design Strategy</h4>
              <p>
              Based on the research insights, I developed a learner-centric design strategy focused on creating a personalized, supportive learning ecosystem. The platform would guide learners step-by-step from onboarding to skill acquisition, certification, and career readiness.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Core Design Principles:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personalization:</strong> Dynamic pre-assessment and adaptive learning pathways</li>
                  <li><strong>Clarity:</strong> Clear, step-by-step learning progression with visual feedback</li>
                  <li><strong>Support:</strong> Easy access to facilitators, mentors, and technical support</li>
                  <li><strong>Motivation:</strong> Data-driven progress tracking and achievement systems</li>
                  <li><strong>Accessibility:</strong> Responsive design optimized for various devices and connection speeds</li>
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
              With a clear understanding of learner needs, I designed a comprehensive learning platform that integrates Coursera content with personalized support systems. The solution features a competency-based assessment framework, data-driven progress tracking, and seamless communication tools.
              </p>
              
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">   
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Personalized Onboarding & Dashboard</strong>
                <p>The platform begins with a dynamic pre-assessment that places learners on the right pathway based on their initial skills. The central dashboard provides a comprehensive view of progress, upcoming tasks, and personalized recommendations.</p>
                
                <div className="">
                  {imageViewerData.slice(0, 2).map((image, index) => (
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

        <section className="border-x border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Competency-Based Assessment</strong>
                <p>Instead of standard multiple-choice quizzes, I designed a multi-evidence assessment framework that combines Coursera scores, practical project submissions, and facilitator feedback. This holistic approach allows learners to demonstrate their skills authentically.</p>
                
                <div className="">
                {imageViewerData.slice(2, 4).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index + 2}
                        />
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Progress Tracking & Communication</strong>
                <p>The platform features engaging data visualizations including progress rings, radar charts, and peer comparisons. In-app messaging enables direct communication between learners and their facilitators or mentors, ensuring support is always accessible.</p>
                
                <div className="">
                {imageViewerData.slice(4, 7).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index + 4}
                        />
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Mobile Responsive Design</strong>
                <p>Full responsive design ensures learners can access the platform seamlessly across mobile, tablet, and desktop devices. This is vital for the program&lsquo;s national reach, considering the varying access to devices and internet connectivity.</p>
                
                <div className="">
                {imageViewerData.slice(7, 8).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index + 7}
                        />
                  ))}
                </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Outcome & Impact</h4>
              <p>
              The FME-DTA Learner Platform successfully provides Nigerians with a personalized, supported learning experience that blends world-class content with real-time support. By leveraging data-driven insights and motivational design, we&lsquo;re not just teaching skills—we&lsquo;re shaping the future of the nation&lsquo;s workforce.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4">
                <div className="">85% learner engagement rate across all courses</div>
                <div className="">92% completion rate for personalized learning pathways</div>
                <div className="">78% of learners achieved certification within target timeframe</div>
                <div className="">95% satisfaction rate with platform usability and support</div>
              </Card>
              <p className="mt-4">These outcomes demonstrate how a thoughtfully researched and well-designed digital platform can transform education and create meaningful career opportunities for thousands of Nigerians.</p>
              
            </div>
          </div>
        </section>

        {/* PostNavigation Component */}
        <ProjectNavigation currentId={3} introData={introData} />

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>
    </div>
  );
} 