"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, X } from "lucide-react";

export function HeaderMain() {
  const pathname = usePathname();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const hero = document.getElementById("hero");
    const heroBottom = hero
      ? hero.getBoundingClientRect().bottom + window.scrollY
      : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolledPastHero(currentScrollY > heroBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  const navigation = [
    { name: "Projects", href: "/projects", target: "_self" },
    { name: "Mentorship", href: "https://www.adplist.org/mentors/segun-michael-oroyo", target: "_blank" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/segunoroyo/", target: "_blank" },
    {
      name: "CV",
      href: "https://drive.google.com/file/d/1046vZMvXbljzhS3w_TVM8GFK0R0B9jkp/view?usp=sharing",
      target: "_blank",
    },
  ];

  return (
    <header className="flex-none fixed md:top-3 z-50 w-full max-w-[68rem] lg:left-[calc(50%-68rem/2)]">
      <div className={`bg-white bg-transparent md:rounded-xl transition-colors duration-300 flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm
        ${scrolledPastHero ? "bg-white/90 backdrop-blur-sm border border-stone-200" : "md:bg-transparent border border-transparent"}
      `}>
        <nav className="relative w-full rounded-2xl mx-2 py-3 md:flex md:items-center md:justify-between md:py-0 md:pl-4 md:pr-2 md:mx-auto">
          <div className="px-4 md:px-0 flex justify-between items-center">
            {/* logo */}
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Ṣẹ́gun"
            >
              <div className="leading-none text-base">
                <span className="text-[1rem] block leading-none text-stone-950">
                  Segun Oroyo
                </span>
                <span className="text-[.8rem] font-normal leading-none text-stone-600">
                  Designer, DS Engineer & Builder
                </span>
              </div>
            </Link>
            {/* logo end */}

            <div className="md:hidden">
              {/* Toggle Button */}
              <button
                type="button"
                className="flex justify-center items-center size-10 text-stone-500 rounded-full hover:bg-stone-200 focus:outline-none focus:bg-transparent"
                aria-label="Toggle navigation"
                aria-expanded={isMobileNavOpen}
                onClick={() => setIsMobileNavOpen((open) => !open)}
              >
                {isMobileNavOpen ? (
                  <X className="shrink-0 size-6" />
                ) : (
                  <LayoutGrid className="shrink-0 size-6" />
                )}
              </button>
              {/* End Toggle Button */}
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <div
            className={
              `md:block transition-all duration-300 basis-full grow ` +
              (isMobileNavOpen
                ? "fixed inset-0 w-full h-screen z-[60] flex flex-col md:static md:w-auto md:h-auto md:bg-transparent md:flex relative"
                : "hidden md:block")
            }
          >
            <div className="relative z-0 flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              {isMobileNavOpen && (
                <div className="absolute inset-0 bg-white z-[-1]" />
              )}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-3">
                {navigation.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  return isExternal ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className={`py-0.5 md:py-4 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 text-xl md:text-sm font-medium focus:outline-none 
                    ${
                        item.href === pathname
                          ? "border-stone-100 text-stone-800"
                          : "border-transparent text-stone-500 hover:text-stone-800"
                      }`}
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      target={item.target}
                      className={`py-0.5 md:py-4 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 text-xl md:text-sm font-medium focus:outline-none 
                    ${
                        item.href === pathname
                          ? "border-stone-100 text-stone-800"
                          : "border-transparent text-stone-500 hover:text-stone-800"
                      }`}
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="ml-4 md:ml-0">
                  <a
                    href="https://cal.com/segun-oroyo"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-pointer p-4 py-3 rounded-xl bg-stone-900 text-white font-semibold hover:bg-stone-700 transition"
                  >
                    Let&lsquo;s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
