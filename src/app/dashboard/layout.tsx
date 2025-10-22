"use client";

import { Public_Sans } from "next/font/google";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Sidebar from "@/layouts/SidebarLayout";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`${publicSans.className}`}>
      <Sidebar />
      <div className="xl:pl-75">
        <Navbar />
        <main className="px-10">{children}</main>
      </div>
    </body>
  );
}
