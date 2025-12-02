"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Search,
  Mail,
  Megaphone,
  Users,
  Inbox,
  BarChart3,
  Eye,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Lead Finder",
    href: "/leadfinder",
    icon: Search,
  },
  {
    label: "Email Accounts",
    href: "/emailaccount",
    icon: Mail,
  },
  {
    label: "Campaigns",
    href: "/campaigns",
    icon: Megaphone,
  },
  {
    label: "Lead List",
    href: "/leadlist",
    icon: Users,
  },
  {
    label: "Onebox",
    href: "/onebox",
    icon: Inbox,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  // Agar routes ready ho jaayen to inko bhi use kar sakta hai:
  {
    label: "Website Visitors",
    href: "/websitevisitors",
    icon: Eye,
  },
  {
    label: "Inbox Placement",
    href: "/inboxplacement",
    icon: Target,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-3 py-3">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white font-semibold text-lg">
            L
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight">
              Loopse
            </span>
            <span className="text-xs text-muted-foreground">
              Email automation
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 pt-2 pb-3">
        {/* MAIN SECTION */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
            MAIN
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-1 space-y-1">
              {mainItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(item.href));

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group relative flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 transition-colors duration-200",
                        isActive &&
                          "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-100"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between"
                      >
                        {/* LEFT: icon + label */}
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{item.label}</span>
                        </div>

                        {/* RIGHT: active dot */}
                        <div className="relative flex items-center justify-center">
                          {/* main dot (scale + fade in) */}
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full bg-teal-500 transition-all duration-200 opacity-0 scale-0",
                              isActive && "opacity-100 scale-100"
                            )}
                          />
                          {/* outer ping ring */}
                          {isActive && (
                            <span className="absolute h-4 w-4 rounded-full border border-teal-500/60 animate-ping" />
                          )}
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* BILLING (placeholder) */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
            BILLING
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="mt-2 rounded-2xl border border-teal-100 bg-teal-50 p-3 text-xs leading-relaxed dark:border-teal-900/60 dark:bg-teal-950/40">
              <p className="font-semibold text-teal-800 dark:text-teal-100">
                Need Help?
              </p>
              <p className="text-[11px] text-teal-900/80 dark:text-teal-200/80">
                Check our documentation or contact support.
              </p>
              <button className="mt-3 w-full rounded-xl bg-teal-500 px-3 py-2 text-[11px] font-semibold text-white hover:bg-teal-600">
                Get Support
              </button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-3 py-2 text-xs text-muted-foreground">
        {/* Yaha future me user info / version wagairah rakh sakta hai */}
        <span className="truncate">Logged in as Haris</span>
      </SidebarFooter>

      {/* Collapsed rail for desktop */}
      <SidebarRail />
    </Sidebar>
  );
}
