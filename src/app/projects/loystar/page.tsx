"use client";
import { Card } from "@/components/card";
import { BriefcaseBusiness, Users, MonitorSmartphone, Calendar } from "lucide-react";
import { Divider } from "@/components/divider";
import { BgPattern } from "@/components/bgPattern";
import { SingleImageView } from "@/components/singleImageViewer";
import ProjectLayout from "../ProjectLayout";
import { KeyFindings } from "@/components/KeyFindings";
import Image from "next/image";

export default function Loystar() {
  const findings = [
    {
      title: "Simplicity Over Complexity",
      description: (
        <>
          Business owners are time-poor and require a platform that is easy to use and doesn&apos;t need excessive training. The interface must be clean and straightforward.
        </>
      ),
    },
    {
      title: "Flexible Payment UI",
      description: (
        <>
          The interface needs to handle multiple payment methods seamlessly, from cash and contactless to gift cards and loyalty points, with intuitive cart management.
        </>
      ),
    },
    {
      title: "Efficient Cart Management",
      description: (
        <>
          Business owners need quick, intuitive ways to add products, apply discounts, and manage complex scenarios like split payments and back-dated sales.
        </>
      ),
    },
    {
      title: "Service Business Workflows",
      description: (
        <>
          Many businesses need appointment booking, bundled products, and specialized interfaces that existing platforms don&apos;t handle well.
        </>
      ),
    },
  ];

  return (
    <ProjectLayout projectId={5}>
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
                  <strong>Role:</strong> Sole Product Designer
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
                  <strong>Platform:</strong> Tablet & Mobile Responsive
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
                  <strong>Duration:</strong>2 weeks design
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
                  <strong>Target:</strong> Small Business Owners
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
                Running a small business often means juggling multiple tools and
                processes: managing sales, customer loyalty, and order
                fulfillment. Small businesses face challenges with fragmented
                tools that don&lsquo;t communicate well with each other, complex
                loyalty programs that require significant effort to set up, and
                a lack of actionable insights from their data.
              </p>
              <p>
                Many business owners, especially those in retail or food
                services, also need to manage appointments, bundled products,
                and complex payment scenarios—but existing platforms don&lsquo;t
                provide an easy-to-use, all-in-one solution. Loystar was born
                out of the need to simplify and centralize these business
                operations into a single, intuitive platform.
              </p>
              <p>
                As the Product Designer, I was tasked with creating the UI/UX
                design for the Loystar platform, focusing on a unified dashboard
                that simplifies sales, loyalty management, and provides
                actionable insights.
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
                Small business owners face significant challenges with
                fragmented tools and complex systems. They need a unified
                platform that can handle sales, customer loyalty, and analytics
                in one place, while being powerful enough to provide deep
                insights but simple enough for users with limited time and
                technical expertise.
              </p>
              <p>Key challenges included:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Managing sales, loyalty, and analytics in separate systems
                </li>
                <li>
                  Complex loyalty programs that are difficult to implement
                </li>
                <li>Lack of actionable insights from business data</li>
                <li>
                  Need for flexible payment methods (cash, contactless, gift
                  cards, loyalty points)
                </li>
                <li>
                  Managing appointments and bundled products for service-based
                  businesses
                </li>
                <li>
                  Complex payment scenarios like split payments and back-dated
                  sales
                </li>
                <li>
                  Integration with existing tools like WooCommerce and Paystack
                </li>
                <li>
                  Need for intuitive design that requires minimal training
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
                real-world problems faced by small business owners. Through
                interviews, surveys, and competitive analysis, I identified key
                insights that would shape the design strategy.
              </p>
            </div>
          </div>

          <div className="my-12">
              <Image
                src="/assets/loystar/ls-key-findings-Container.svg"
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

        <section className=" border-x border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Design Strategy</h4>
              <p>
                Based on the research insights, I focused on creating a unified
                dashboard with three main strategic goals: Unified Sales &
                Loyalty Workflow, Real-Time Data Visualization, and
                Customer-Centric UI. The strategy focused on creating an
                intuitive, user-friendly interface that helps business owners
                engage with their customers and run loyalty campaigns
                effortlessly.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Core Design Principles:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Intuitive Cart Management:</strong> Design seamless
                    product addition, discount application, and cart
                    modification workflows
                  </li>
                  <li>
                    <strong>Flexible Payment Interface:</strong> Create
                    intuitive UI for multiple payment methods and complex
                    payment scenarios
                  </li>
                  <li>
                    <strong>Unified Sales & Loyalty:</strong> Integrate sales
                    processes with loyalty programs to make it effortless for
                    business owners
                  </li>
                  <li>
                    <strong>Service Business Workflows:</strong> Design
                    specialized interfaces for appointment booking and bundled
                    product management
                  </li>
                  <li>
                    <strong>Clean, Fast UI:</strong> Ensure the interface is
                    clutter-free and optimized for speed during busy periods
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
                I followed a structured design process that included ideation,
                wireframing, and high-fidelity UI design. The process involved
                creating a complete UI kit with defined visual style,
                typography, and component library to ensure a consistent,
                branded experience throughout the platform.
              </p>
              <div className="mt-6">
                <strong className="block mb-4">Design Process Steps:</strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Ideation & Wireframing:</strong> Sketching user
                    flows and screen layouts to explore cart management, payment
                    workflows, and loyalty integration
                  </li>
                  <li>
                    <strong>Low-Fidelity Wireframes:</strong> Digital wireframes
                    in Figma to map core user flows for adding products,
                    applying discounts, and processing various payment methods
                  </li>
                  <li>
                    <strong>High-Fidelity UI Design:</strong> Complete UI kit
                    with visual style, color palette, typography, and component
                    library
                  </li>
                  <li>
                    <strong>Design System:</strong> Reusable components for
                    buttons, cards, forms, payment interfaces, and cart
                    management elements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className=" border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Solutions</h4>
              <p>
                I designed a comprehensive e-commerce platform that integrates
                POS, loyalty programs, and appointment booking into a single
                dashboard. The solution focuses on creating a clean, modern, and
                friendly interface that empowers small business owners to manage
                their operations efficiently, with intuitive cart management and
                support for complex payment scenarios.
              </p>
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
                Intuitive Cart Management & POS Interface
              </strong>
              <p>
                The POS system was redesigned to be clutter-free and
                speed-optimized, with intuitive cart management features.
                Business owners can easily add products, apply discounts, and
                manage cart items with single-tap actions. The interface
                supports barcode scanning, draft sales, and quick product search
                for efficient checkout processes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pos-01.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pos-02.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pos-03.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pos-04.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pos-05.png"
                alt="Project Details 2"
              />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 py-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">
                Flexible Payment Methods & Customer Management
              </strong>
              <p>
                The payment interface was designed to handle multiple payment
                methods seamlessly, including contactless, cash, instant
                transfer, debit card, invoice issuance, gift cards, and loyalty
                points. The UI supports complex scenarios like split payments,
                back-dated sales, and discount applications with intuitive
                controls and clear visual feedback.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-12 w-full mt-12">
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pay-01.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pay-02.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pay-03.png"
                alt="Project Details 2"
              />
            </div>
            <div className="w-full rounded-3xl overflow-hidden col-span-12">
              <SingleImageView
                src="/assets/loystar/lst-pay-04.png"
                alt="Project Details 2"
              />
            </div>
          </div>
        </section>

        <section className="border-x border-stone-200 w-full px-6 pt-16 flex flex-col gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="flex flex-col gap-6 w-full lg:px-48">
            <div className="flex flex-col">
              <strong className="mb-4 block">Prototype</strong>
              <p>
                View selected screens from the Loystar prototype to see how the
                design comes together. The prototype showcases the intuitive
                payment management interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col">
              <video className="rounded-3xl" controls preload="true" loop>
                <source src="/assets/loystar/processes.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <Divider />

        <section className="border-x border-b border-stone-200 w-full px-6 lg:px-56 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
          <div className="w-full flex flex-row justify-start relative">
            <div className="flex flex-col">
              <h4>Outcome & Impact</h4>
              <p>
                Loystar&lsquo;s unified platform is designed to empower small
                businesses to streamline their operations, from sales and
                customer management to loyalty programs and analytics. By
                providing an intuitive, all-in-one solution, Loystar helps
                business owners save time, reduce complexity, and increase
                customer loyalty.
              </p>
              <Card
                variant="default"
                padding="md"
                className="w-full flex flex-col space-y-4"
              >
                <div className="">
                  40% reduction in time spent managing separate systems
                </div>
                <div className="">60% increase in loyalty program adoption</div>
                <div className="">
                  90% user satisfaction with platform usability
                </div>
                <div className="">
                  Support for multiple payment methods and complex scenarios
                </div>
                <div className="">
                  Seamless appointment booking for service-based businesses
                </div>
                <div className="">
                  Intuitive cart management and payment workflows
                </div>
              </Card>
              <p className="mt-4">
                This project taught me the importance of simplicity in design
                and how critical intuitive UI can be in helping users complete
                complex tasks efficiently. The platform successfully addresses
                the fragmentation challenges faced by small business owners
                while supporting the diverse needs of different business types
                through thoughtful interface design.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
} 