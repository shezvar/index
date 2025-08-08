import React from "react";

export function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center border-x border-stone-200 relative border">
      <div className="text-center px-6 py-16 max-w-2xl mx-auto">

        {/* Content */}
        <h1 className="text-4xl text-stone-900 mb-6">
          Coming Soon
        </h1>
        
        <p className="text-xl text-stone-600 mb-8 leading-relaxed">
          This project is currently in design. I&apos;m working hard to bring you a comprehensive case study with detailed insights, process documentation, and visual designs.
        </p>
      </div>
    </div>
  );
}
