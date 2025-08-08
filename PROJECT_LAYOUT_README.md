# Project Layout System

This document explains how to use the new project layout system to create consistent and maintainable project pages.

## Overview

The project layout system consists of reusable components that eliminate repetition and ensure consistency across all project pages. It includes:

- **ProjectLayout**: Main wrapper that handles common structure
- **ProjectSections**: Reusable section components
- **ProjectTemplate**: Template for creating new project pages

## Components

### ProjectLayout

The main wrapper component that handles:
- Lock functionality (if project is locked)
- Common page structure
- Project intro section
- Navigation and footer

```tsx
import ProjectLayout from "@/components/ProjectLayout";

export default function MyProject() {
  return (
    <ProjectLayout projectId={1}>
      {/* Your project content here */}
    </ProjectLayout>
  );
}
```

**Props:**
- `projectId`: The ID of the project from the JSON file
- `children`: The project content
- `showProjectIntro`: Whether to show the project intro (default: true)
- `showProjectNavigation`: Whether to show navigation (default: true)
- `showFooterCTA`: Whether to show footer CTA (default: true)

### ProjectSections

Reusable section components for common project page patterns:

#### ProjectSection
Standard content section with left-aligned text:

```tsx
import { ProjectSection } from "@/components/ProjectSections";

<ProjectSection>
  <h4>Overview</h4>
  <p>Your content here...</p>
</ProjectSection>
```

#### ProjectSectionCentered
Section with centered content and wider padding:

```tsx
import { ProjectSectionCentered } from "@/components/ProjectSections";

<ProjectSectionCentered>
  <div className="flex flex-col">
    <h4>Research & Discovery</h4>
    <p>Your content here...</p>
  </div>
</ProjectSectionCentered>
```

#### ProjectImageSection
Section with grid layout for images:

```tsx
import { ProjectImageSection, ProjectImage } from "@/components/ProjectSections";

<ProjectImageSection>
  <div className="flex flex-col">
    <strong className="mb-4 block">Feature Name</strong>
    <ul className="list-disc pl-6 *:mb-3">
      <li>Feature description...</li>
    </ul>
  </div>
  <ProjectImage src="/assets/project/image1.png" alt="Image 1" />
  <ProjectImage src="/assets/project/image2.png" alt="Image 2" />
</ProjectImageSection>
```

#### ProjectResearchSection
Complete research section with process flow and findings:

```tsx
import { ProjectResearchSection } from "@/components/ProjectSections";

<ProjectResearchSection
  title="Research & Discovery"
  description={<p>Your research description...</p>}
  processFlowSrc="/assets/project/process-flow.svg"
  problemSolutionSrc="/assets/project/problem-solution.svg"
  findings={findings}
/>
```

#### ProjectOutcomeSection
Outcome section with bottom border:

```tsx
import { ProjectOutcomeSection } from "@/components/ProjectSections";

<ProjectOutcomeSection title="Outcome & Impact">
  <p>Your outcome content...</p>
</ProjectOutcomeSection>
```

## Creating a New Project Page

### Method 1: Using ProjectTemplate

For simple projects, use the template:

```tsx
import { ProjectTemplate } from "@/components/ProjectTemplate";

export default function MyNewProject() {
  const findings = [
    {
      title: "Finding 1",
      description: (
        <>
          Description of your first key finding.
        </>
      ),
    },
    {
      title: "Finding 2",
      description: (
        <>
          Description of your second key finding.
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId={4} findings={findings} />;
}
```

### Method 2: Custom Layout

For more complex projects, build your own layout:

```tsx
import ProjectLayout from "@/components/ProjectLayout";
import { 
  ProjectSection, 
  ProjectImageSection, 
  ProjectImage 
} from "@/components/ProjectSections";
import { Divider } from "@/components/divider";

export default function MyCustomProject() {
  return (
    <ProjectLayout projectId={5}>
      {/* Overview */}
      <ProjectSection>
        <h4>Overview</h4>
        <p>Your project overview...</p>
      </ProjectSection>

      <Divider />

      {/* Challenges */}
      <ProjectSection>
        <h4>Challenges</h4>
        <p>Your challenges description...</p>
      </ProjectSection>

      <Divider />

      {/* Solutions with images */}
      <ProjectImageSection>
        <div className="flex flex-col">
          <strong className="mb-4 block">Key Features</strong>
          <ul className="list-disc pl-6 *:mb-3">
            <li><span className="font-bold pr-2">Feature 1:</span>Description...</li>
            <li><span className="font-bold pr-2">Feature 2:</span>Description...</li>
          </ul>
        </div>
        <ProjectImage src="/assets/project/feature1.png" alt="Feature 1" />
        <ProjectImage src="/assets/project/feature2.png" alt="Feature 2" />
      </ProjectImageSection>
    </ProjectLayout>
  );
}
```

## Benefits

### 1. Consistency
- All project pages follow the same structure
- Consistent spacing, typography, and layout
- Unified navigation and footer

### 2. Maintainability
- Changes to common elements only need to be made in one place
- Easy to update styling across all projects
- Reduced code duplication

### 3. Development Speed
- Quick to create new project pages
- Reusable components reduce boilerplate
- Template provides starting point

### 4. Lock System Integration
- Automatic lock functionality for protected projects
- Consistent lock screen across all projects
- Easy to add/remove locks

## Migration Guide

### From Old Structure to New

**Before:**
```tsx
export default function OldProject() {
  return (
    <ProjectLockWrapper projectId={1}>
      <div className="min-h-screen flex flex-col w-full">
        <main className="flex w-full flex-col flex-nowrap gap-0 relative p-0 justify-center min-h-0">
          <section className="py-10 w-full border-x border-stone-200 max-w-6xl mx-auto relative" id="hero"></section>
          <ProjectIntro id={1} introData={introData} />
          <Divider />
          {/* Content sections */}
          <ProjectNavigation currentId={1} introData={introData} />
          <Divider />
          <FooterCTA />
          <Divider />
        </main>
      </div>
    </ProjectLockWrapper>
  );
}
```

**After:**
```tsx
export default function NewProject() {
  return (
    <ProjectLayout projectId={1}>
      {/* Your content sections */}
    </ProjectLayout>
  );
}
```

## Customization

### Styling
All section components accept a `className` prop for custom styling:

```tsx
<ProjectSection className="custom-class">
  {/* Content */}
</ProjectSection>
```

### Conditional Sections
You can conditionally show sections:

```tsx
<ProjectLayout 
  projectId={1}
  showProjectIntro={false}
  showFooterCTA={false}
>
  {/* Content */}
</ProjectLayout>
```

### Custom Images
Use the `ProjectImage` component for consistent image handling:

```tsx
<ProjectImage 
  src="/assets/project/image.png" 
  alt="Description"
  className="col-span-6" // Custom grid span
/>
```

## Best Practices

1. **Use the template** for simple projects
2. **Customize sections** for complex layouts
3. **Keep content organized** in logical sections
4. **Use consistent naming** for images and assets
5. **Test lock functionality** when adding new projects
6. **Update project JSON** with correct IDs and lock status

## File Structure

```
src/
├── components/
│   ├── ProjectLayout.tsx          # Main layout wrapper
│   ├── ProjectSections.tsx        # Reusable section components
│   ├── ProjectTemplate.tsx        # Template for new projects
│   └── ProjectLockWrapper.tsx     # Lock functionality
├── app/
│   └── projects/
│       ├── fullgap/
│       │   └── page.tsx          # Example using new layout
│       └── dtalearner/
│           └── page.tsx          # Example using new layout
└── lib/
    └── projectUtils.ts           # Project data utilities
```
