"use client";
import Image from "next/image";
import { Card } from "@/components/card";
import { ArrowRight } from "lucide-react";

export function ProjectsCardHome(props: {
  image: string;
  type: string;
  title: string;
  description: string;
  link: string;
  bgColor: string;
}) {
  const { image, title, description, link, bgColor } = props;
  return (
    <Card variant="default" padding="sm" className="">
      <div className="w-full">
        <div className="relative">
          <div className="flex flex-col lg:gap-16 gap-8">
            <div className={`bg-${bgColor} w-full relative overflow-hidden lg:h-[32rem] h-[32rem] rounded-2xl ring-1 ring-slate-400/30`}>
              {/* Lazy Load with Next.js Image */}
              <Image
                src={image} // Your image source
                alt="" // Provide descriptive alt text
                width={100}
                height={100} // Set width and height to prevent layout shift
                loading="lazy" // Lazy load the image
                style={{ objectFit: "cover" }} // Ensure the image covers the container
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" // Responsive sizes
                quality={90} // Set image quality
                placeholder="blur" // Use blur-up placeholder
                blurDataURL={image} // Use the same image for the blur effect
                unoptimized={false} // Use Next.js optimization
                fill // Fill the parent container
                priority={false} // Set to 'true' for important images above the fold
                className="object-cover origin-center object-center h-full w-full rounded-2xl" // Styling
              />
            </div>

            <div className="w-full flex flex-col gap-6">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="lg:text-4xl text-3xl text-slate-800 font-header lg:font-medium font-thin">
                    {title}
                  </h2>
                  <p className="text-slate-600 lg:text-2xl text-xl">
                    {description}
                  </p>
                </div>
                <a href={link} className="group inline-flex text-center w-full">
                  <button
                    type="button"
                    className="lg:w-[12rem] w-full text-center flex items-center justify-center bg-slate-950 px-8 lg:py-4 py-5 text-white font-semibold rounded-3xl hover:bg-slate-800 transition-all duration-300"
                  >
                    View more
                    <span className="absolute right-0 invisible opacity-0 group-hover:ml-3 group-hover:relative group-hover:visible group-hover:opacity-100 transition-all duration-500">
                      <ArrowRight className="" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
