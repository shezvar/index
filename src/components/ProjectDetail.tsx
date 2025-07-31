import React from 'react';
import Image from "next/image";

interface ProjectDetailProps {
  project: {
    title: string | { rendered: string };
    image?: string;
    description?: string | { rendered: string };
    content?: string | { rendered: string };
    [key: string]: string | number | boolean | undefined | { rendered: string };
  };
}

const getRendered = (field: unknown): string | number | boolean | undefined => {
  if (typeof field === "object" && field !== null && "rendered" in field) {
    // @ts-expect-error: We checked for rendered property
    return field.rendered;
  }
  if (
    typeof field === "string" ||
    typeof field === "number" ||
    typeof field === "boolean"
  ) {
    return field;
  }
  // Skip arrays and other objects
  return undefined;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const contentHtml =
    typeof project.content === "object" && project.content !== null && "rendered" in project.content
      ? project.content.rendered
      : undefined;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {project.image && (
        <Image
          src={project.image}
          alt={getRendered(project.title) as string}
          width={800}
          height={256}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{getRendered(project.title)}</h1>
      <p className="text-gray-700 mb-4">
        {getRendered(project.description) || "No description available."}
      </p>
      {/* Render other fields if needed */}
      {Object.entries(project).map(([key, value]) => {
        if (["title", "image", "description", "content"].includes(key)) return null;
        const rendered = getRendered(value);
        if (rendered === undefined) return null;
        return (
          <div key={key} className="mb-2">
            <span className="font-semibold capitalize">{key}:</span>{" "}
            {rendered}
          </div>
        );
      })}
      {contentHtml && typeof contentHtml === "string" && contentHtml.trim() && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
      )}
    </div>
  );
};

export default ProjectDetail; 