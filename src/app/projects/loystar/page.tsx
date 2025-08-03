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
  { src: "/assets/loystar/ls-dashboard.png", alt: "Business Dashboard" },
  { src: "/assets/loystar/ls-pos.png", alt: "POS Interface" },
  { src: "/assets/loystar/ls-analytics.png", alt: "Customer Analytics" },
  { src: "/assets/loystar/ls-customers.png", alt: "Customer Profiles" },
  { src: "/assets/loystar/ls-loyalty.png", alt: "Loyalty Program" },
  { src: "/assets/loystar/ls-reports.png", alt: "Business Reports" },
  { src: "/assets/loystar/ls-mobile.png", alt: "Mobile Responsive" },
  { src: "/assets/loystar/ls-wireframes.png", alt: "Design Process" },
];

export default function Loystar() {
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
            .filter((item) => item.id === 5)
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
                  <strong>Role:</strong> Product Designer & UI/UX Lead
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
                    <strong>Duration:</strong> 10 weeks design & development
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
                    <strong>Target:</strong> Small Business Owners
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
              Running a small business often means juggling multiple tools and processes: managing sales, customer loyalty, and order fulfillment. Small businesses face challenges with fragmented tools that don&lsquo;t communicate well with each other, complex loyalty programs that require significant effort to set up, and a lack of actionable insights from their data.
              </p>
              <p>
              Many business owners, especially those in retail or food services, also need to manage appointments, bundled products, and complex payment scenarios—but existing platforms don&lsquo;t provide an easy-to-use, all-in-one solution. Loystar was born out of the need to simplify and centralize these business operations into a single, intuitive platform.
              </p>
              <p>
              As the Product Designer, I was tasked with creating the UI/UX design for the Loystar platform, focusing on a unified dashboard that simplifies sales, loyalty management, and provides actionable insights.
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
              Small business owners face significant challenges with fragmented tools and complex systems. They need a unified platform that can handle sales, customer loyalty, and analytics in one place, while being powerful enough to provide deep insights but simple enough for users with limited time and technical expertise.
              </p>
              <p>
              Key challenges included:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Managing sales, loyalty, and analytics in separate systems</li>
                <li>Complex loyalty programs that are difficult to implement</li>
                <li>Lack of actionable insights from business data</li>
                <li>Need for flexible payment methods (cash, contactless, gift cards, loyalty points)</li>
                <li>Managing appointments and bundled products for service-based businesses</li>
                <li>Complex payment scenarios like split payments and back-dated sales</li>
                <li>Integration with existing tools like WooCommerce and Paystack</li>
                <li>Need for intuitive design that requires minimal training</li>
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
                <p>I began with comprehensive user research to understand the real-world problems faced by small business owners. Through interviews, surveys, and competitive analysis, I identified key insights that would shape the design strategy.</p>
                <div className="mb-12 flex flex-col gap-16">
                  <Image src="/assets/loystar/ls-personas.png" alt="User Personas" width={1000} height={1000} />
                  <Image src="/assets/loystar/ls-competitive.png" alt="Competitive Analysis" width={1000} height={1000} />
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                <div className="text-green-600 mb-2 font-semibold">Key findings</div>
                <ul className="*:mb-3">
                  <li>
                    <strong>Simplicity Over Complexity</strong> – Business owners are time-poor and require a platform that is easy to use and doesn&lsquo;t need excessive training. The interface must be clean and straightforward.
                  </li>
                  <li>
                    <strong>Flexible Payment UI</strong> – The interface needs to handle multiple payment methods seamlessly, from cash and contactless to gift cards and loyalty points, with intuitive cart management.
                  </li>
                  <li>
                    <strong>Efficient Cart Management</strong> – Business owners need quick, intuitive ways to add products, apply discounts, and manage complex scenarios like split payments and back-dated sales.
                  </li>
                  <li>
                    <strong>Service Business Workflows</strong> – Many businesses need appointment booking, bundled products, and specialized interfaces that existing platforms don&lsquo;t handle well.
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
              Based on the research insights, I focused on creating a unified dashboard with three main strategic goals: Unified Sales & Loyalty Workflow, Real-Time Data Visualization, and Customer-Centric UI. The strategy focused on creating an intuitive, user-friendly interface that helps business owners engage with their customers and run loyalty campaigns effortlessly.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Core Design Principles:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Intuitive Cart Management:</strong> Design seamless product addition, discount application, and cart modification workflows</li>
                  <li><strong>Flexible Payment Interface:</strong> Create intuitive UI for multiple payment methods and complex payment scenarios</li>
                  <li><strong>Unified Sales & Loyalty:</strong> Integrate sales processes with loyalty programs to make it effortless for business owners</li>
                  <li><strong>Service Business Workflows:</strong> Design specialized interfaces for appointment booking and bundled product management</li>
                  <li><strong>Clean, Fast UI:</strong> Ensure the interface is clutter-free and optimized for speed during busy periods</li>
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
              I followed a structured design process that included ideation, wireframing, and high-fidelity UI design. The process involved creating a complete UI kit with defined visual style, typography, and component library to ensure a consistent, branded experience throughout the platform.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Design Process Steps:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ideation & Wireframing:</strong> Sketching user flows and screen layouts to explore cart management, payment workflows, and loyalty integration</li>
                  <li><strong>Low-Fidelity Wireframes:</strong> Digital wireframes in Figma to map core user flows for adding products, applying discounts, and processing various payment methods</li>
                  <li><strong>High-Fidelity UI Design:</strong> Complete UI kit with visual style, color palette, typography, and component library</li>
                  <li><strong>Design System:</strong> Reusable components for buttons, cards, forms, payment interfaces, and cart management elements</li>
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
              I designed a comprehensive e-commerce platform that integrates POS, loyalty programs, and appointment booking into a single dashboard. The solution focuses on creating a clean, modern, and friendly interface that empowers small business owners to manage their operations efficiently, with intuitive cart management and support for complex payment scenarios.
              </p>
              
            </div>
          </div>
        </section>

        <section className="border-x border-y border-stone-200 w-full px-6 lg:px-56 py-16 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">   
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
                <strong className="mb-4 block">Intuitive Cart Management & POS Interface</strong>
                <p>The POS system was redesigned to be clutter-free and speed-optimized, with intuitive cart management features. Business owners can easily add products, apply discounts, and manage cart items with single-tap actions. The interface supports barcode scanning, draft sales, and quick product search for efficient checkout processes.</p>
                
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
                <strong className="mb-4 block">Flexible Payment Methods & Customer Management</strong>
                <p>The payment interface was designed to handle multiple payment methods seamlessly, including contactless, cash, instant transfer, debit card, invoice issuance, gift cards, and loyalty points. The UI supports complex scenarios like split payments, back-dated sales, and discount applications with intuitive controls and clear visual feedback.</p>
                
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
                <strong className="mb-4 block">Loyalty Integration & Service Business Features</strong>
                <p>The loyalty program is seamlessly integrated into the checkout process, allowing customers to be enrolled with a single tap. The interface also includes specialized features for service-based businesses, with intuitive appointment booking, cancellation, and rescheduling workflows that integrate smoothly with the main POS system.</p>
                
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
                <strong className="mb-4 block">Mobile Responsive & UI Design System</strong>
                <p>The platform is fully responsive, ensuring business owners can manage their store on the go. The UI design uses a modern, functional, and inviting interface with clean icons for key features to improve scannability and reduce cognitive load. The design system includes reusable components for payment interfaces, cart management, and service workflows that maintain consistency across all touchpoints.</p>
                
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
              Loystar&lsquo;s unified platform is designed to empower small businesses to streamline their operations, from sales and customer management to loyalty programs and analytics. By providing an intuitive, all-in-one solution, Loystar helps business owners save time, reduce complexity, and increase customer loyalty.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4">
                <div className="">40% reduction in time spent managing separate systems</div>
                <div className="">60% increase in loyalty program adoption</div>
                <div className="">90% user satisfaction with platform usability</div>
                <div className="">Support for multiple payment methods and complex scenarios</div>
                <div className="">Seamless appointment booking for service-based businesses</div>
                <div className="">Intuitive cart management and payment workflows</div>
              </Card>
              <p className="mt-4">This project taught me the importance of simplicity in design and how critical intuitive UI can be in helping users complete complex tasks efficiently. The platform successfully addresses the fragmentation challenges faced by small business owners while supporting the diverse needs of different business types through thoughtful interface design.</p>
              
            </div>
          </div>
        </section>

        {/* PostNavigation Component */}
        <ProjectNavigation currentId={5} introData={introData} />

        <Divider />

        {/* CALL TO ACTION SECTION */}
        <FooterCTA />
        <Divider />
      </main>
    </div>
  );
} 