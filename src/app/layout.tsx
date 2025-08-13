import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { HeaderMain } from "@/components/header";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ImageAlert from "@/components/alerts";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Add more weights if needed
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "Segun Oroyo",
  description: "My personal website",
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    images: ['/assets/hero-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Preload critical images */}


        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${manrope.variable} relative antialiased box-border bg-main text-stone-950`}>
        {/* HEADER */}
        <HeaderMain />
        {/* MAIN CONTENT */}
        <main className="flex-1 w-full flex flex-col items-center justify-center mx-auto px-0 min-h-[70vh]">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <ImageAlert />
      </body>
    </html>
  );
}
