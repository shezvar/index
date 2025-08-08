"use client";
import React from 'react';
import { Divider } from "@/components/divider";
import { FooterCTA } from "@/components/footerCTA";
import introData from "@/app/data/project.json";
import ProjectNavigation from "@/components/projectNavigation";
import ProjectLockWrapper from '../../components/ProjectLockWrapper';
import { ProjectIntro } from '../../components/ProjectIntro';
import { ComingSoonWrapper } from '@/components/ComingSoonWrapper';

interface ProjectLayoutProps {
  projectId: number;
  children: React.ReactNode;
  showProjectIntro?: boolean;
  showProjectNavigation?: boolean;
  showFooterCTA?: boolean;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  projectId,
  children,
  showProjectIntro = true,
  showProjectNavigation = true,
  showFooterCTA = true,
}) => {
  return (
    <ProjectLockWrapper projectId={projectId}>
      <div className="min-h-screen flex flex-col w-full">
        <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
          {/* HERO SECTION */}
          <section
            className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative"
            id="hero"
          ></section>

          {/* Project Intro Section */}
          {showProjectIntro && (
            <>
              <ProjectIntro id={projectId} introData={introData} />
              <Divider />
            </>
          )}

          {/* Project Content */}
          <ComingSoonWrapper projectId={projectId}>
            {children}
          </ComingSoonWrapper>

          {/* Project Navigation */}
          {showProjectNavigation && (
            <>
              <ProjectNavigation currentId={projectId} introData={introData} />
              <Divider />
            </>
          )}

          {/* Footer CTA */}
          {showFooterCTA && (
            <>
              <FooterCTA />
              <Divider />
            </>
          )}
        </main>
      </div>
    </ProjectLockWrapper>
  );
};

export default ProjectLayout;
