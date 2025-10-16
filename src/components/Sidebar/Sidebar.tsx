"use client";

import Image from "next/image";
import SimpleBar from "simplebar-react";
import { useSidebarStore } from "@/store";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

  return (
    <aside
      role="dialog"
      aria-hidden={!sidebarIsOpen}
      className={`fixed top-0 left-0 z-9999 h-dvh w-72 border-r border-r-grey-500/12 bg-white transition-transform duration-300 ease-[cubic-bezier(0,0,0.2,1)] xl:w-75 ${sidebarIsOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
    >
      <div className="pt-5 pb-2 pl-7">
        {/* <Icon name="dashboard" width={40} height={40} /> */}
        <Image src={`/logo_single.svg`} height={40} width={40} alt="Logo" />
      </div>
      <nav>
        <SimpleBar autoHide={true} className="max-h-[calc(100vh-70px)]">
          <ul className="flex flex-col gap-1 px-4">{children}</ul>
        </SimpleBar>
      </nav>
    </aside>
  );
}
