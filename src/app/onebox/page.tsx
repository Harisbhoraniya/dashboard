"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Inbox, Search, Sun, Moon, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";   // ⬅️ Button import upar aagya
import { useTheme } from "next-themes";            // ⬅️ Dark/light hook

// 🔹 Common Top Navbar (dark/light support)
function TopNav() {
  const { theme, setTheme } = useTheme(); // ⬅️ yaha se current theme milega

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="hidden sm:block h-6" />

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-9 rounded-full"
          />
        </div>
      </div>

      {/* Right: theme toggle + bell + avatar */}
      <div className="flex items-center gap-2">
        {/* 🌗 Dark / Light Toggle */}
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

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full h-full overflow-x-hidden flex flex-col bg-muted/40">
        {/* Top nav */}
        <TopNav />

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Page title */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Onebox</h1>
            <p className="text-muted-foreground mt-1">
              Unified inbox for all your email conversations
            </p>
          </div>

          {/* Empty inbox card */}
          <Card className="rounded-2xl border border-slate-200 shadow-sm">
            <CardContent className="py-16 px-4 md:px-10 flex items-center justify-center">
              <div className="flex flex-col items-center text-center gap-3 max-w-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
                  <Inbox className="h-7 w-7 text-slate-500" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold">
                  Your inbox is empty
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  All your email conversations will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
