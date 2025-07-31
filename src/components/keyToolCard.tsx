import Image from "next/image";

interface KeyToolsCardProps {
  title: string;
  description: string;
  icons: { src: string; alt: string }[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function KeyToolsCard({
  title,
  description,
  icons,
  primaryAction,
  secondaryAction,
}: KeyToolsCardProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-[1]">
      {/* Left: Content */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        {/* <span className="inline-block mb-4 px-4 py-1 rounded-full bg-stone-100 text-stone-700 text-sm font-medium w-fit">
          <span className="inline-block align-middle mr-2">🧩</span> App store
        </span> */}
        <h2 className="text-4xl font-extrabold text-stone-400">
                These are some{" "}
                <span className="text-stone-900">
                  projects I&apos;ve worked on
                </span>{" "}
                trying to put my dent in the universe
              </h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4 leading-tight font-sans hidden">
          {title}
        </h2>
        <p className="text-lg text-stone-500 mb-8 max-w-xl hidden">{description}</p>
        <div className="flex gap-3">
          {primaryAction && (
            <a
              href={primaryAction.href}
              className="px-5 py-2 rounded-lg bg-stone-900 text-white font-semibold hover:bg-stone-700 transition text-base"
            >
              {primaryAction.label}
            </a>
          )}
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="px-5 py-2 rounded-lg bg-stone-100 text-stone-900 font-semibold hover:bg-stone-200 transition text-base"
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>

      {/* Right: Icon grid */}
      <div className="flex-1 flex items-center justify-center ml-auto">
        <div className="grid grid-cols-3 grid-rows-2 gap-10 overflow-hidden">
          {icons.slice(0, 9).map((icon, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              style={{ minHeight: "32px", minWidth: "32px" }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={48}
                height={48}
                className="object-contain h-12 w-12 md:h-12 md:w-12 transition-transform duration-300 hover:scale-110"
                loading="lazy"
                quality={100}
                style={{ objectFit: "contain" }}
                draggable="false"
                unoptimized={true} // Use this if you want to avoid Next.js image optimization
                fetchPriority="low"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}