import React from "react";
import { ComingSoon } from "./ComingSoonContent";
import projectData from "@/app/data/project.json";

interface ComingSoonWrapperProps {
  projectId: number;
  children: React.ReactNode;
}

export function ComingSoonWrapper({ projectId, children }: ComingSoonWrapperProps) {
  // Find the project data
  const project = projectData.find((p) => p.id === projectId);
  
  // If project has comingSoon set to true, show the ComingSoon component
  if (project?.comingSoon) {
    return <ComingSoon />;
  }
  
  // Otherwise, show the normal project content
  return <>{children}</>;
}
