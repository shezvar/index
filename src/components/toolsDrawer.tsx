'use client'

import { XIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ToolsCard } from './toolsLogo';

interface ToolsDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ToolsDrawer({ open, setOpen }: ToolsDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div>
      {open && (
        <div className="relative z-[60]">
          {/* Overlay */}
          <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:p-4">
                <div
                  ref={drawerRef}
                  className={`pointer-events-auto w-screen max-w-md transform transition-transform duration-1000 ease-out sm:duration-1500 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl rounded-2xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="text-base font-semibold text-gray-900">Tools</div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4">
                      <ToolsCard selectedIds={[]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
