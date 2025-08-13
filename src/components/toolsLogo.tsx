import Image from "next/image";
import { Brain } from "lucide-react";

// Tool logo data directly inside the component
const toolsLogoData = [
  {
    id: 1,
    src: "/assets/tools/chatgpt-6.svg",
    alt: "ChatGPT Icon",
    text: "ChatGPT",
  },
  {
    id: 2,
    src: "/assets/tools/figma-icon.svg",
    alt: "Figma Icon",
    text: "Figma",
  },
  {
    id: 3,
    src: "/assets/tools/lovable-logo-icon.svg",
    alt: "Lovable Icon",
    text: "Lovable",
  },
  {
    id: 4,
    src: "/assets/tools/gemini-icon.svg",
    alt: "Gemini Icon",
    text: "Gemini",
  },
  {
    id: 5,
    src: "/assets/tools/cursor-icon.svg",
    alt: "Cursor Icon",
    text: "Cursor",
  },
  {
    id: 6,
    Icon: Brain,
    alt: "Brain Icon",
    text: "Thought",
  },
  {
    id: 7,
    src: "/assets/tools/notebooklm.svg",
    alt: "NotebookLM Icon",
    text: "NotebookLM",
  },
  {
    id: 8,
    src: "/assets/tools/notion.svg",
    alt: "Notion Icon",
    text: "Notion",
  },
  {
    id: 9,
    src: "/assets/tools/vscode.svg",
    alt: "VSCode Icon",
    text: "VSCode",
  },
  {
    id: 10,
    src: "/assets/tools/wordpress.svg",
    alt: "WordPress Icon",
    text: "WordPress",
  },
  {
    id: 11,
    src: "/assets/tools/v0.svg",
    alt: "V0 Icon",
    text: "V0",
  },
  {
    id: 12,
    src: "/assets/tools/windsurf.svg",
    alt: "Windsurf Icon",
    text: "Windsurf",
  },
];

// Define props for the ToolsCard component
interface ToolsCardProps {
  icons?: typeof toolsLogoData;
  selectedIds: number[];
}

export function ToolsCard({ icons = toolsLogoData, selectedIds }: ToolsCardProps) {
  const iconsToDisplay =
    selectedIds && selectedIds.length > 0
      ? icons.filter((icon) => selectedIds.includes(icon.id))
      : icons;
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {iconsToDisplay.map((icon) => (
      <div
        key={icon.id} 
        className="flex flex-col items-center justify-center bg-white py-4 px-8 rounded-2xl shadow-sm border border-stone-200 gap-2 min-h-[32px] min-w-[32px] transition-shadow duration-200"
      >
        {icon.src ? (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={48}
          height={48}
          className="object-contain h-8 w-8 transition-transform duration-300 hover:scale-110"
          loading="lazy"
          quality={100}
          draggable="false"
          fetchPriority="low"
        />
        ) : icon.Icon ? (
        <icon.Icon
          className="h-8 w-8 transition-transform duration-300 hover:scale-110 text-indigo-700"
        />
        ) : null}
        <span className="text-xs text-stone-500 mt-2">{icon.text}</span>
      </div>
      ))}
    </div>
  );
}
