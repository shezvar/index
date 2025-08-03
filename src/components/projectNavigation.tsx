import { Button } from "@/components/buttons";
import { BgPattern } from "./bgPattern";

interface ProjectData {
  id: number;
  alt: string;
  link: string;
}

interface ProjectNavigationProps {
  currentId: number;
  introData: ProjectData[];
}

export default function ProjectNavigation({ currentId, introData }: ProjectNavigationProps) {
  // Find previous and next posts in introData
  const prevPost = introData.find((item: ProjectData) => item.id === currentId - 1);
  const nextPost = introData.find((item: ProjectData) => item.id === currentId + 1);

  // Helper to get post URL
  const getPostUrl = (item: ProjectData) =>
    item?.link || `/projects/${item?.id ?? ""}`;

  return (
    <section className="border-x border-stone-200 w-full px-0 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative -mb-4">
      <div className="w-full flex flex-row justify-between relative">
        {prevPost ? (
          <a href={getPostUrl(prevPost)} className="relative p-6">
            <BgPattern />
            <Button variant="ghost" size="sm" className="relative">
              ← {prevPost.alt}
            </Button>
          </a>
        ) : (
          <span />
        )}
        {nextPost ? (
          <a href={getPostUrl(nextPost)} className="relative p-6">
            <BgPattern />
            <Button variant="ghost" size="sm" className="relative">
               {nextPost.alt} →
            </Button>
          </a>
        ) : (
          <span />
        )}
      </div>
    </section>
  );
}