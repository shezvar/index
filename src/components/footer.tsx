"use client";

import { Linkedin, Twitter, ArrowUp } from "lucide-react";

export function Footer() {
  // Scroll to top handler
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-8 flex gap-2 mt-8 justify-between max-w-6xl mx-auto">
      
      <div className="">
        <div className="flex gap-4 mb-2">
          <a
            href="https://linkedin.com/in/segunoroyo"
            className="hover:text-blue-700"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/segunoroyo"
            className="hover:text-blue-400"
          >
            <Twitter size={20} />
          </a>
        </div>
        <div className="text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Segun Oroyo
        </div>
      </div>

      <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-md">
        <button
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="hover:text-stone-700 transition-colors"
          type="button"
        >
          <ArrowUp size={20} />
        </button>
      </div>

    </footer>
  );
}
