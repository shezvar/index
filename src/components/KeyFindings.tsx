import { Caveat } from "next/font/google";
import React from "react";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

interface FindingItem {
  title: string;
  description: React.ReactNode;
}

interface KeyFindingsProps {
  title: string;
  items: FindingItem[];
}

export const KeyFindings: React.FC<KeyFindingsProps> = ({ title, items }) => {
  return (
    <>
      <div className="flex flex-col gap-6 w-full lg:px-48 mt-16">
        <div className="max-w-md">
          <p className="font-semibold">{title}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full mt-1">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none pt-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="relative bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 flex flex-col shadow-lg rounded-lg transform -rotate-2 transition-all duration-300 ease-in-out hover:rotate-0 hover:scale-105 hover:shadow-2xl after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-8 after:bg-stone-300 after:[clip-path:polygon(100%_100%,0_100%,100%_0)] after:shadow-[-3px_-3px_5px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl -rotate-12">📌</span>
                <h5 className={`${caveat.className} font-bold text-2xl mb-0 text-stone-800`}>{item.title}</h5>
              </div>
              <p className={`${caveat.className} text-stone-700 text-xl leading-relaxed mt-2`}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};