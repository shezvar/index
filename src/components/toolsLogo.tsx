import Image from "next/image";

interface ToolsCardProps {
  icons: { src: string; alt: string; text: string }[];
}

export function ToolsCard({
  icons,
}: ToolsCardProps) {
  return (
    <>
      {icons.slice(0, 9).map((icon, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-white py-4 px-8 rounded-2xl transition-shadow duration-200 shadow-sm border border-stone-200 gap-2 h-min"
          style={{ minHeight: "32px", minWidth: "32px" }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            className="object-contain h-12 w-12 transition-transform duration-300 hover:scale-110"
            loading="lazy"
            quality={100}
            style={{ objectFit: "contain" }}
            draggable="false"
            unoptimized={true}
            fetchPriority="low"
          />
          <span className="text-xs text-stone-500 mt-2">{icon.text}</span>
        </div>
      ))}
    </>
  );
}