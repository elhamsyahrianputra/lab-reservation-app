"use client";

import Image from "next/image";
import SimpleBar from "simplebar-react";
import { useSidebarStore } from "@/store";

interface SidebarWrapperProps {
  children: React.ReactNode;
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  const sidebarIsOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <>
      <button
        type="button"
        className={`fixed z-1000 h-screen w-screen bg-grey-800/48 xl:hidden ${sidebarIsOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></button>

      <aside
        role="dialog"
        aria-hidden={!sidebarIsOpen}
        className={`fixed z-1000 block h-screen border-r border-r-grey-500/12 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] xl:translate-x-0 ${
          sidebarIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-5 pb-2 pl-7">
          <Image src="/img/logo/logo-blue.svg" height={40} width={40} alt="Logo" />
        </div>
        <div className="relative z-1000 flex h-full w-72 flex-col border-r border-r-grey-500/12 bg-white xl:w-75">
          <nav className="flex-1">
            <SimpleBar autoHide={true} className="max-h-[calc(100vh-70px)]">
              <ul className="flex flex-col gap-1 px-4">{children}</ul>
            </SimpleBar>
          </nav>
        </div>
      </aside>
    </>
  );
}
