"use client";

import { Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import SidebarDropdownItem from "@/components/Sidebar/SidebarDropdownItem";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import { useSidebarStore } from "@/store";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarIsOpen = useSidebarStore((state) => state.isOpen);

  return (
    <body
      className={`${publicSans.className} ${sidebarIsOpen ? "overflow-hidden" : "overflow-auto"}`}
    >
      <Sidebar>
        <SidebarSection title="overview">
          <SidebarItem href="/admin/" icon="dashboard" title="App" />
          <SidebarItem
            href="/admin/e-commerce"
            icon="ecommerce"
            title="Ecommerce"
          />
          <SidebarItem
            href="/admin/analytics"
            icon="analytics"
            title="Analytics"
          />
          <SidebarItem href="/admin/banking" icon="banking" title="Banking" />
          <SidebarItem href="/admin/booking" icon="booking" title="Booking" />
          <SidebarItem href="/admin/file" icon="file" title="File" />
          <SidebarItem href="/admin/course" icon="course" title="Course" />
        </SidebarSection>
        <SidebarSection title="management">
          <SidebarDropdown title="User" icon="user">
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
          </SidebarDropdown>
          <SidebarDropdown title="Product" icon="product">
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
          </SidebarDropdown>
          <SidebarDropdown title="Order" icon="order">
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
          </SidebarDropdown>
          <SidebarDropdown title="Invoice" icon="invoice">
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
            <SidebarDropdownItem href="/" title="Create" />
            <SidebarDropdownItem href="/" title="Update" />
          </SidebarDropdown>
        </SidebarSection>
      </Sidebar>
      <div className="xl:pl-75">
        <Navbar />
        <main className="h-[2000px]">{children}</main>
      </div>
    </body>
  );
}
