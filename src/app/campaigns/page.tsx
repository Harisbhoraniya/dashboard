"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus, Send, Search, Bell, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

// 🔹 Updated Top Navigation
function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">
        {/* 👉 Added Sidebar Trigger + Separator Here */}
        <SidebarTrigger className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted">
          <span className="text-lg leading-none">☰</span>
        </SidebarTrigger>

        <Separator
          orientation="vertical"
          className="mr-2 hidden sm:block h-6"
        />

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            className="pl-9 rounded-full"
          />
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-2">
        {/* 🌗 Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-md relative"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
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

export default function CampaignsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full h-full overflow-x-hidden flex flex-col bg-muted/40">
        <TopNav />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Campaigns
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your email campaigns
              </p>
            </div>

            <Button className="rounded-xl bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>

          {/* Empty State Section */}
          <div className="bg-background rounded-xl border shadow-sm flex flex-col items-center justify-center py-24">
            <Send className="w-20 h-20 text-slate-400 mb-6" strokeWidth={1.5} />
            <h2 className="text-2xl font-semibold mb-2">No campaigns yet</h2>
            <p className="text-muted-foreground max-w-md text-center">
              Create your first email campaign to start reaching out.
            </p>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
