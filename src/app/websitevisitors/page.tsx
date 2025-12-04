"use client";

import { useTheme } from "next-themes";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Search,
  Sun,
  Moon,
  Bell,
  Eye,
  Users,
} from "lucide-react";

// 🔹 Top navigation (same style as dashboard, with theme toggle)
function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">

        {/* 👉 Sidebar Trigger should be here */}
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
            placeholder="Search links, QR codes, analytics..."
            className="pl-9 rounded-full"
          />
        </div>
      </div>

      {/* Right: theme toggle + bell + avatar */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>

        <Avatar className="h-8 w-8 border border-primary">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function WebsiteVisitorsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex flex-col bg-muted/40 min-h-screen">
        <TopNav />

        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Page title */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Website Visitors
            </h1>
            <p className="text-muted-foreground mt-1">
              Track and identify your website visitors
            </p>
          </div>

          {/* Top stats cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Total Visitors */}
            <Card className="rounded-2xl border border-border shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Total Visitors</span>
                  <Eye className="h-4 w-4" />
                </div>
                <div className="text-2xl font-semibold">0</div>
              </CardContent>
            </Card>

            {/* Identified */}
            <Card className="rounded-2xl border border-border shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Identified</span>
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-2xl font-semibold">0</div>
              </CardContent>
            </Card>

            {/* Conversion Rate */}
            <Card className="rounded-2xl border border-border shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Conversion Rate</span>
                  <Eye className="h-4 w-4" />
                </div>
                <div className="text-2xl font-semibold">0%</div>
              </CardContent>
            </Card>
          </div>

          {/* Empty state card */}
          <Card className="rounded-2xl border border-border shadow-sm">
            <CardContent className="py-16 px-4 md:px-10 flex items-center justify-center">
              <div className="flex flex-col items-center text-center gap-3 max-w-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted border border-border">
                  <Eye className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold">
                  No visitor data yet
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Install the tracking code on your website to start identifying
                  visitors
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
