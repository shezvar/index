"use client";
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProjectBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="lg:px-4 py-4 flex uppercase text-stone-500"
    >
      <ChevronLeft className='size-6 mr-2' /> Go To Previous
    </button>
  );
} 

// "use client";
// import { ChevronLeft } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function ProjectBackButton() {
//   const router = useRouter();
//   const handleBack = () => {
//     router.push("/projects");
//     // Scroll to top after navigation
//     if (typeof window !== "undefined") {
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <button
//       onClick={handleBack}
//       className="lg:px-4 py-4 flex uppercase text-stone-500"
//     >
//       <ChevronLeft className='size-6 mr-2' /> Go To Previous
//     </button>
//   );
// } 