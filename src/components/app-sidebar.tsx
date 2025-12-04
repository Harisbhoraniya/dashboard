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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Search,
  Mail,
  Megaphone,
  Users,
  Inbox,
  BarChart3,
  Eye,
  Target,
  ChevronLeft,
  Sparkles,
  CreditCard,
  WalletCards,
  Receipt,
  HomeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainItems = [
  { label: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { label: "Lead Finder", href: "/leadfinder", icon: Search },
  { label: "Email Accounts", href: "/emailaccount", icon: Mail },
  { label: "Campaigns", href: "/campaigns", icon: Megaphone },
  { label: "Lead List", href: "/leadlist", icon: Users },
  { label: "Onebox", href: "/onebox", icon: Inbox },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Website Visitors", href: "/websitevisitors", icon: Eye },
  { label: "Inbox Placement", href: "/inboxplacement", icon: Target },
];

const billingItems = [
  { label: "AI Credits", href: "/ai-credits", icon: Sparkles },
  { label: "Overview", href: "/overview", icon: CreditCard },
  { label: "Subscriptions", href: "/subscriptions", icon: WalletCards },
  { label: "Transactions", href: "/transactions", icon: Receipt },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar, state } = useSidebar(); // 👈 state se pata chalega collapsed/expanded

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="icon"
      className="border-r bg-background text-foreground"
    >
      {/* HEADER */}
      <SidebarHeader className="px-4 py-3 border-b border-border">
        {isCollapsed ? (
          // ✅ Collapsed: sirf center me round toggle button
          <div className="flex items-center justify-center">
            <button
              onClick={toggleSidebar}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        ) : (
          // ✅ Expanded: L + Loopse + arrow
          <div className="flex items-center justify-between gap-2">
            <Link href="/dashboard" className="flex items-center gap-3">
              {/* LOGO BOX */}
              <div className="flex items-center justify-center rounded-xl bg-teal-500 text-white font-semibold text-lg h-10 w-10">
                L
              </div>

              <span className="text-[21px] font-semibold text-teal-500 tracking-tight">
                Loopse
              </span>
            </Link>

            <button
              onClick={toggleSidebar}
              className="inline-flex h-8 w-8 items-center justify-center 
  border border-border text-muted-foreground hover:bg-muted transition
  rounded-md md:rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 pt-3 pb-3">
        {/* MAIN SECTION */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[12px] font-semibold tracking-[0.15em] text-muted-foreground group-data-[collapsible=icon]:hidden">
            MAIN
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="mt-1 space-y-1">
              {mainItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group relative flex items-center gap-4 rounded-xl px-3 py-3 text-[15px] font-medium transition",
                        // 👇 collapse me content (icon) center ho jayega
                        "group-data-[collapsible=icon]:justify-center",
                        isActive
                          ? "bg-gradient-to-r from-[#c9f7f3] to-[#e8fbff] dark:from-[#043f3e] dark:to-[#0b2d2d] text-teal-600 border border-teal-400/50"
                          : "hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            className={cn(
                              "h-5 w-5",
                              isActive
                                ? "text-teal-500"
                                : "text-muted-foreground"
                            )}
                          />
                          {/* Label collapse me chhup jayega */}
                          <span className=" font-normal text-[15px] group-data-[collapsible=icon]:hidden">
                            {item.label}
                          </span>
                        </div>

                        {/* Dot bhi collapse me chhupa hua */}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500 group-data-[collapsible=icon]:hidden" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* BILLING SECTION */}
        <SidebarGroup className="mt-4 group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="px-3 text-[12px] font-semibold tracking-[0.15em] text-muted-foreground">
            BILLING
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="mt-2 space-y-1 text-[15px]">
              {billingItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-3 py-3 font-medium text-[15px] transition",
                        isActive && item.label === "AI Credits"
                          ? "bg-gradient-to-r from-[#c9f7f3] to-[#effbff] text-teal-600 border border-[#8ae1d8]"
                          : isActive
                          ? "bg-muted text-foreground"
                          : "hover:bg-muted text-foreground/80"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            className={cn(
                              "h-5 w-5",
                              isActive && item.label === "AI Credits"
                                ? "text-teal-500"
                                : "text-muted-foreground"
                            )}
                          />
                          {item.label}
                        </div>

                        {isActive && item.label === "AI Credits" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>

            {/* NEED HELP BOX */}
            <div className="mt-4 rounded-xl border border-teal-300/30 bg-teal-50 dark:bg-[#062524] dark:border-[#144442] p-3 text-xs">
              <p className="font-semibold text-teal-700 dark:text-teal-300">
                Need Help?
              </p>
              <p className="text-[11px] text-teal-900/70 dark:text-gray-300">
                Check documentation or contact support.
              </p>

              <button className="mt-3 w-full rounded-md bg-teal-500 px-3 py-2 text-[11px] font-semibold text-white hover:bg-teal-600 dark:hover:bg-teal-400">
                Get Support
              </button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border px-3 py-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
        Logged in as Haris
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
