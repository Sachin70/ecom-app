import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import type React from "react"; // Added import for React
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce App",
  description: "A Next.js E-commerce Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
