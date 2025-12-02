"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Search,
  Mail,
  Megaphone,
  ListChecks,
  Inbox,
  BarChart3,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Simple menu items
const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Leads Finder",
    url: "/dashboard/leadfinder",
    icon: Search,
  },
  {
    title: "Email Accounts",
    url: "/dashboard/emailaccount",
    icon: Mail,
  },
  {
    title: "Campaigns",
    url: "/dashboard/campaigns",
    icon: Megaphone,
  },
  {
    title: "Leads List",
    url: "/dashboard/leadlist",
    icon: ListChecks,
  },
  {
    title: "Onebox",
    url: "/dashboard/onebox",
    icon: Inbox,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: BarChart3,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header – yaha tu apna logo / app name rakh sakta hai */}
      <SidebarHeader>
        <div className="flex items-center gap-2 p-3 border-b">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white text-lg font-bold">
            L
          </div>
          <span className="font-semibold text-sm">Loopse</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="pl-3">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Collapsed state ke liye rail */}
      <SidebarRail />
    </Sidebar>
  );
}
