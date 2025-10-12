"use client";

import Image from "next/image";
import SimpleBar from "simplebar-react";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="sticky top-0 h-dvh w-[288px] bg-white">
      <div className="pt-5 pb-2 pl-7">
        {/* <Icon name="dashboard" width={40} height={40} /> */}
        <Image src={`/logo_single.svg`} height={40} width={40} alt="" />
      </div>
      <nav>
        <SimpleBar autoHide={true} className="max-h-[calc(100vh-70px)]">
          <ul className="flex flex-col gap-1 px-4">{children}</ul>
        </SimpleBar>
      </nav>
    </aside>
  );
}
