import Link from "next/link";

interface SidebarDropdownItemProps {
  title: string;
  href: string;
}

export default function SidebarDropdownItem({
  title,
  href,
}: SidebarDropdownItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="before:width-3 relative flex min-h-9 items-center rounded-lg pr-2 pl-3 font-medium text-[14px] text-grey-600 before:absolute before:top-0 before:right-full before:block before:h-5 before:w-3 before:rounded-bl-lg before:border-grey-300 before:border-b-2 before:border-l-2 before:content-[''] hover:bg-grey-500/[0.08]"
      >
        <span>{title}</span>
      </Link>
    </li>
  );
}
