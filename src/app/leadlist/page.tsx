"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Plus, Users, Search, Bell, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes"; // ⭐ theme hook

// 🔹 Reusable Top Navigation (same across pages)
function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 sm:px-6 md:px-10 md:pl-14 border-b bg-background">
      {/* Left: sidebar trigger + search */}
      <div className="flex items-center gap-2 flex-1">
        {/* 👉 Added Sidebar Trigger */}
        <SidebarTrigger className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted">
          <span className="text-lg leading-none">☰</span>
        </SidebarTrigger>

        <Separator
          orientation="vertical"
          className="hidden sm:block h-6 mr-2"
        />

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search leads..." className="pl-9 rounded-full" />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-2">
        {/* 🌗 Dark / Light toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {/* Light icon */}
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Dark icon */}
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>

        <Avatar className="h-8 w-8 border">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function LeadListPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full h-full overflow-x-hidden flex flex-col">
        {/* 🔻 TopNav used */}
        <TopNav />

        {/* Content */}
        <main className="flex-1 px-6 py-5 space-y-6 sm:px-6 md:pl-12">
          {/* Page Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Lead List
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your leads and prospects
              </p>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Leads
            </Button>
          </div>

          {/* Empty State */}
          <div className="bg-background rounded-lg border">
            <div className="flex flex-col items-center justify-center py-24 px-4">
              <div className="mb-6">
                <Users className="w-20 h-20 text-slate-400" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No leads yet</h2>
              <p className="text-muted-foreground text-center max-w-md">
                Import or add leads to start your outreach campaigns
              </p>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
