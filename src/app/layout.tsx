import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { HeaderMain } from "@/components/header";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Add more weights if needed
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "Segun Oroyo",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" cz-shortcut-listen="true">
      <body className={`${manrope.variable} relative antialiased box-border bg-main`}>
        {/* HEADER */}
        <HeaderMain />
        {/* MAIN CONTENT */}
        <main className="flex-1 w-full flex flex-col items-center justify-center mx-auto px-0 min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
