import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Reservation",
  description: "Welcom to Lab Reservation",
};

import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.className}>
      <body className="bg-slate-300">{children}</body>
    </html>
  );
}
