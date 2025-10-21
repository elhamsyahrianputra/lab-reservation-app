"use client";

import { Public_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
      <div>
        <header className="sticky top-0 flex h-16 items-center bg-white :px-6 px-4 md:bg-transparent lg:fixed">
          <Link href="#">
            <Image
              src="/img/logo/logo-blue.svg"
              width={40}
              height={40}
              alt="Spacio Logo"
            />
          </Link>
        </header>
        <main>{children}</main>
      </div>
    </body>
  );
}
