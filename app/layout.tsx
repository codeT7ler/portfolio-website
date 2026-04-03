import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AmbientBackground } from "@/components/ambient-background";
import { Cursor } from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yash Menat | Technical Designer",
  description: "Dark cinematic AAA-style portfolio for Technical Game Designer Yash Menat."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AmbientBackground />
        <Cursor />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
