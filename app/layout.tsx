import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";
import '@/app/ui/global.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pepe Silva",
  description: "Build your own conspiracy board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><SpeedInsights/></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-5 z-10 text-right mr-5">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn"
            aria-label="Open drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content relative">
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side z-20">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-20">
              {/* Sidebar content here */}
              <li className="prose"><h1>Pepe Silvia</h1></li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/board">The conspiracy board</Link></li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
