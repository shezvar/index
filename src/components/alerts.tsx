"use client";

import React, { useState, useEffect } from "react";

export default function ImageAlert() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            {/* Alert */}
            <div className="fixed w-full max-w-md bottom-0 right-4 mb-5 p-4 sm:ps-16 overflow-hidden bg-gradient-to-r from-orange-100 via-purple-200 via-70% to-indigo-200 rounded-lg z-[1000] shadow-lg" role="alert" tabIndex={-1} aria-labelledby="hs-pro-shchal-label">
                <div className="flex items-center gap-x-3">
                    <div className="hidden sm:block absolute -bottom-2 -start-6 -rotate-12">
                        <span className="text-7xl">🖼️</span>
                    </div>
                    <div className="grow">
                        <h4 id="hs-pro-shchal-label" className="font-semibold text-orange-700">
                            Performance Note
                        </h4>
                        <p className="mt-1 text-sm text-gray-800">
                            Images are not yet optimised and may be slow to load. Performance improvements are on the way!
                        </p>
                    </div>

                    <button type="button" onClick={handleClose} className="size-7 inline-flex justify-center items-center gap-x-1 rounded-full text-xs border border-transparent text-gray-800 hover:bg-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-indigo-300">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <span className="sr-only">Remove</span>
                    </button>
                </div>
            </div>
            {/* End Alert */}
        </div>
    )
}