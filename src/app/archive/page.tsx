"use client"
import { HeaderMain } from "@/components/header";

export default function Archive() {
    return (
        <div className="bg-white">
            <HeaderMain />
            <main className="relative">
                <div className="bg-white mx-auto max-w-3xl h-[95vh] flex justify-center items-center">
                <div className="flex flex-col gap-6 text-center">
            <h1 className="text-4xl text-slate-800 dark:text-slate-100 font-header font-medium">Hello, I am Segun Oroyo</h1>
            <h4 className="text-slate-600 dark:text-slate-400 text-lg font-medium">Design enthusiast fueled by a passion for user-centricity and efficiency. Currently Product Design Lead at Fullgap to shape Project management lifecycle. Always eager to collaborate on projects with measurable positive impact.</h4>
            <div className="flex items-center mx-auto">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-slate-600 dark:text-slate-400 text-sm font-semibold">BASED IN LONDON, UK</span>
            </div>
          </div>
                </div>

            </main>
        </div>
    )

}