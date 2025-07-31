import Image from "next/image";

interface ToolsCardProps {
  icons: { src: string; alt: string }[];
}

export function ToolsCard({
  icons,
}: ToolsCardProps) {
  return (
    <>
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
          </>
  );
}