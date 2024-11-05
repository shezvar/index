import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Add more weights if needed
  variable: '--font-montserrat' 
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Add more weights if needed
  variable: '--font-open-sans' 
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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased box-border`}>
          <div className={`${openSans.className} `}>{children}</div> {/* Apply Open Sans to the main content area */}
        <PrelineScript />
      </body>
    </html>
  );
}
