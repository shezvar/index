import projectData from "@/app/data/project.json";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  type: string;
  link: string;
  highlightWord?: string;
  tags?: string[];
  isLock?: boolean;
  comingSoon?: boolean;
}

export const findProjectById = (id: number): ProjectData | undefined => {
  return projectData.find(project => project.id === id);
};

export const getAllProjects = (): ProjectData[] => {
  return projectData;
};

export const getLockedProjects = (): ProjectData[] => {
  return projectData.filter(project => project.isLock === true);
};
