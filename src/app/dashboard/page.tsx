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
  Link2,
  QrCode,
  MousePointerClick,
  Eye,
  BarChart3,
  Bot,
} from "lucide-react";

function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">
        <SidebarTrigger className="-ml-1" />
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

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full relative"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>

        {/* Avatar */}
        <Avatar className="h-8 w-8 border">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function Page() {
  const stats = [
    { label: "Total Links", icon: <Link2 />, color: "bg-sky-500" },
    { label: "QR Codes", icon: <QrCode />, color: "bg-purple-500" },
    { label: "Total Clicks", icon: <MousePointerClick />, color: "bg-green-500" },
    { label: "Total Views", icon: <Eye />, color: "bg-orange-500" },
  ];

  const actions = [
    { label: "Create Link", icon: <Link2 />, color: "bg-sky-500" },
    { label: "Create QR", icon: <QrCode />, color: "bg-purple-500" },
    { label: "AI Assistant", icon: <Bot />, color: "bg-green-500" },
    { label: "View Analytics", icon: <BarChart3 />, color: "bg-orange-500" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex flex-col bg-muted/40">
        <TopNav />

        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here’s an overview of your email automation
              platform.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item, i) => (
              <Card key={i} className="rounded-xl">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <h2 className="text-2xl font-semibold">0</h2>
                    </div>
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center text-white ${item.color}`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-xs text-green-500">+0% from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions + Recent */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Quick Actions */}
            <Card className="rounded-xl md:col-span-2">
              <CardContent className="p-5 space-y-4">
                <h2 className="font-semibold">Quick Actions</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {actions.map((action, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-3 p-4 border rounded-xl bg-background hover:shadow-sm transition"
                    >
                      <div
                        className={`h-10 w-10 flex items-center justify-center text-white rounded-xl ${action.color}`}
                      >
                        {action.icon}
                      </div>
                      <span className="font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="rounded-xl">
              <CardContent className="p-5 flex items-center justify-center text-muted-foreground">
                No recent activity
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
