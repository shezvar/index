import { Button } from "@/components/buttons";

interface ProjectData {
  id: number;
  title: string;
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
    <section className="border-x border-stone-200 w-full px-0 pt-16 pb-12 flex flex-row gap-0 h-min justify-center max-w-6xl mx-auto relative">
      <div className="w-full flex flex-row justify-between relative">
        {prevPost ? (
          <a href={getPostUrl(prevPost)}>
            <Button variant="ghost" size="sm">
              ← Previous: {prevPost.title}
            </Button>
          </a>
        ) : (
          <span />
        )}
        {nextPost ? (
          <a href={getPostUrl(nextPost)}>
            <Button variant="ghost" size="sm">
              Next: {nextPost.title} →
            </Button>
          </a>
        ) : (
          <span />
        )}
      </div>
    </section>
  );
}