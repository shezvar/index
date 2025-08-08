import React from 'react';
import LockedPage from './LockedPage';
import { findProjectById } from '@/lib/projectUtils';

interface ProjectLockWrapperProps {
  projectId: number;
  children: React.ReactNode;
}

const ProjectLockWrapper: React.FC<ProjectLockWrapperProps> = ({ projectId, children }) => {
  const projectData = findProjectById(projectId);
  
  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-thin text-stone-900 mb-2">Project not found</h2>
          <p className="text-stone-600">The requested project could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <LockedPage projectData={{ ...projectData, isLock: projectData.isLock || false }}>
      {children}
    </LockedPage>
  );
};

export default ProjectLockWrapper;
