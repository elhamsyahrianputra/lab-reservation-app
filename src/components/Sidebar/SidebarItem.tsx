"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/ui/Icon";

interface NavItemProps {
  href: string;
  icon: string;
  title: string;
}

export default function SidebarItem({ href, icon, title }: NavItemProps) {
  const pathname = usePathname() || "/";

  const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
  const isActive = normalize(pathname) === normalize(href);

  const baseClass =
    "flex min-h-11 items-center gap-3 rounded-lg px-1 pr-2 pl-3 font-medium text-[14px] hover:bg-grey-500/[0.08]";
  const activeClass = isActive
    ? "bg-primary/[0.08] text-primary font-semibold hover:bg-primary/[0.16]"
    : "text-grey-600";

  return (
    <li>
      <Link href={href} className={`${baseClass} ${activeClass}`}>
        <Icon
          name={icon}
          className={
            isActive ? "text-primary-600 grayscale-0" : "grayscale-[0.85]"
          }
        />
        <span>{title}</span>
      </Link>
    </li>
  );
}
