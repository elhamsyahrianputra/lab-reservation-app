"use client";

import { useState } from "react";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarSection({ title, children }: NavSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li>
      <button
        type="button"
        className="group relative flex w-full cursor-pointer pt-4 pr-2 pb-2 pl-3 font-bold text-[11px] text-grey-500 uppercase duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-grey-800 focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <svg
          className={`-left-1 absolute transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"} opacity-0 group-hover:opacity-100`}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1rem"
          height="1rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
          ></path>
        </svg>
        <span className="duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:pl-1">
          {title}
        </span>
      </button>
      <ul
        className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-fit opacity-100" : "max-h-0 overflow-hidden duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"}`}
        aria-hidden={!isOpen}
      >
        {children}
      </ul>
    </li>
  );
}
