// ProblemSolutionCard.js

interface ProblemSolutionCardProps {
  count: string;
  problemTitle: string;
  solutionTitle: string;
  solutionDescription: string;
}

export default function ProblemSolutionCard({ count, problemTitle, solutionTitle, solutionDescription }: ProblemSolutionCardProps) {
  return (
    <div className="flex flex-col bg-white relative border border-stone-200 rounded-3xl p-6 overflow-hidden">
      <div className="text-7xl text-stone-300 absolute -top-4 -left-1">{count}</div>
      <span className="border border-stone-200 inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200 max-w-fit mt-12">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
          <circle r="3" cx="3" cy="3" />
        </svg>
        Problem
      </span>
      <h4 className="text-base mt-2">{problemTitle}</h4>
      <div className="mt-4">
        <span className="border border-stone-200 inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-gray-900 inset-ring inset-ring-gray-200 max-w-fit">
          <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500">
            <circle r="3" cx="3" cy="3" />
          </svg>
          Solution
        </span>
        <h4 className="text-base mt-2 mb-1">{solutionTitle}</h4>
        <p className="text-stone-700 text-sm mb-0">
          {solutionDescription}
        </p>
      </div>
    </div>
  );
}
// src/components/researchData.tsx