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
  { src: "/assets/dtaadmin/admin-dashboard.png", alt: "Admin Dashboard" },
  { src: "/assets/dtaadmin/admin-courses.png", alt: "Course Management" },
  { src: "/assets/dtaadmin/admin-learners.png", alt: "Learner Progress" },
  { src: "/assets/dtaadmin/admin-reports.png", alt: "Reports & Analytics" },
  { src: "/assets/dtaadmin/admin-communication.png", alt: "Communication Hub" },
  { src: "/assets/dtaadmin/admin-json.png", alt: "JSON Integration" },
  { src: "/assets/dtaadmin/admin-mobile.png", alt: "Mobile Responsive" },
  { src: "/assets/dtaadmin/admin-prototype.png", alt: "Interactive Prototype" },
];

export default function DtaAdmin() {
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
            .filter((item) => item.id === 4)
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
                  <strong>Role:</strong> Product Designer & Prototyping Lead
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
                    <strong>Platform:</strong> Web-based Admin Dashboard
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
                    <strong>Duration:</strong> 6 weeks design & prototyping
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
                    <strong>Users:</strong> Admins, Facilitators, Mentors
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
              In 2025, the Nigerian government launched the FME Digital Training Academy (FME-DTA) to address the digital skills gap. The goal was to train 20,000 Nigerians in high-demand digital fields. The program required a platform that could deliver Coursera content while integrating localized support through facilitators, mentors, and real-time assessments.
              </p>
              <p>
              As the Product Designer, I was tasked with designing the admin platform—a tool to manage course content, track learner progress, and provide data-driven insights for administrators, facilitators, and mentors.
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
              The FME-DTA needed a scalable, data-driven platform that could track thousands of learners&lsquo; journeys, integrate Coursera content seamlessly, and provide real-time insights for decision-making. The challenge was to empower administrators, facilitators, and mentors with the right tools to make timely decisions while managing a complex learning ecosystem.
              </p>
              <p>
              Key challenges included:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Integrating external Coursera content via API</li>
                <li>Creating real-time dashboards for tracking learner progress</li>
                <li>Providing personalized insights for different user roles</li>
                <li>Ensuring scalability for 20,000+ learners</li>
                <li>Maintaining data consistency across multiple systems</li>
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
                <p>I began with comprehensive stakeholder interviews to understand the distinct needs of administrators, facilitators, and mentors. Through user research, I identified four key personas with different goals and requirements for the platform.</p>
                <div className="mb-12 flex flex-col gap-16">
                  <Image src="/assets/dtaadmin/admin-personas.png" alt="User Personas" width={1000} height={1000} />
                  <Image src="/assets/dtaadmin/admin-workflow.png" alt="Admin Workflow" width={1000} height={1000} />
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                <div className="text-green-600 mb-2 font-semibold">Key findings</div>
                <ul className="*:mb-3">
                  <li>
                    <strong>Four User Personas</strong> – Learners (gain certified skills), Facilitators (monitor progress and assess work), Mentors (provide career coaching), and Admins (track overall program success and generate reports).
                  </li>
                  <li>
                    <strong>Data Integration Needs</strong> – The platform needed to seamlessly integrate Coursera API data while maintaining real-time synchronization with internal learner progress and assessment data.
                  </li>
                  <li>
                    <strong>Reporting Requirements</strong> – Different user roles required different types of reports and analytics, from individual learner progress to program-wide success metrics.
                  </li>
                  <li>
                    <strong>Communication Workflows</strong> – Facilitators and mentors needed efficient ways to communicate with learners and track their interactions within the platform.
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
              <h4>Design Process & Tools</h4>
              <p>
              Given the limited time and complex requirements, I used Lovable and Figma Make to create early concept drafts. This approach allowed me to test ideas and refine concepts quickly in Figma, enabling rapid iterations and faster development of an interactive prototype using Vibe Coding.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Design Tools & Process:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lovable & Figma Make:</strong> Quick concept sketching and rapid prototyping</li>
                  <li><strong>Figma:</strong> Detailed design iterations and component development</li>
                  <li><strong>Vibe Coding:</strong> Interactive prototype creation for real-world testing</li>
                  <li><strong>Design System:</strong> Reusable components for consistency and speed</li>
                  <li><strong>Collaboration:</strong> Worked with Associate Product Designer for skill development</li>
                </ul>
              </div>
              <p className="mt-4">
              The design system significantly sped up our workflow by providing a library of reusable components—buttons, forms, tables, charts—that ensured consistency while accelerating development.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Solutions</h4>
              <p>
              I designed a custom, web-based admin platform that integrated Coursera content via API, provided real-time dashboards for tracking learner progress, and personalized the learning experience using data-driven insights. The solution focused on empowering different user roles with the tools they needed to succeed.
              </p>
              
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">   
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Admin Dashboard & Analytics</strong>
                <p>The central dashboard provides administrators with comprehensive insights into program performance, learner engagement, and course completion rates. Real-time data visualization helps identify trends and make informed decisions.</p>
                
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
                <strong className="mb-4 block">Course Management & Learner Progress</strong>
                <p>Admins can seamlessly add and manage Coursera courses while monitoring individual learner progress. The system provides detailed analytics on completion rates, assessment scores, and engagement metrics for each course.</p>
                
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
                <strong className="mb-4 block">Communication Hub & JSON Integration</strong>
                <p>Facilitators and mentors can communicate directly with learners through an in-app messaging system. The platform integrates Coursera content seamlessly using a structured JSON format that ensures smooth data flow between external and internal systems.</p>
                
                <div className="">
                {imageViewerData.slice(4, 6).map((image, index) => (
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
                <strong className="mb-4 block">Interactive Prototype & Mobile Responsive</strong>
                <p>Using Vibe Coding, I created an interactive prototype that allowed real-world testing of all features. The platform is fully responsive, ensuring administrators can access critical data and perform essential tasks across mobile, tablet, and desktop devices.</p>
                
                <div className="">
                {imageViewerData.slice(6, 8).map((image, index) => (
                    <ProjectImageViewOne
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        images={imageViewerData}
                        index={index + 6}
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
              The FME-DTA Admin Platform successfully streamlines administrative tasks and improves learner outcomes by providing comprehensive data-driven insights. The platform empowers administrators, facilitators, and mentors to manage dynamic content, track learner success, and generate actionable reports while integrating real-time data from Coursera.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4">
                <div className="">90% reduction in administrative task time</div>
                <div className="">Real-time data integration with 99.9% uptime</div>
                <div className="">85% improvement in decision-making speed</div>
                <div className="">95% user satisfaction with platform usability</div>
              </Card>
              <p className="mt-4">The platform has become a critical tool in Nigeria&lsquo;s digital transformation, enabling efficient management of the nation&lsquo;s largest digital skills training program while providing the insights needed to continuously improve learner outcomes.</p>
              
            </div>
          </div>
        </section>

        {/* PostNavigation Component */}
        <ProjectNavigation currentId={4} introData={introData} />

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>
    </div>
  );
} 