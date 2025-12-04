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
  ChevronDown,
} from "lucide-react";

function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-6 border-b bg-background">
      {/* Left: sidebar trigger + search */}
      <div className="flex items-center gap-3 flex-1">
        {/* 👇 Sidebar trigger with ☰ icon */}
        <SidebarTrigger className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted">
          <span className="text-lg leading-none">☰</span>
        </SidebarTrigger>

        <Separator
          orientation="vertical"
          className="mr-2 hidden sm:block h-6"
        />

        <div className="relative flex-1 max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search links, QR codes, analytics..."
            className="pl-10 rounded-full bg-muted border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
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

        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>

        <Avatar className="h-8 w-8 border border-border">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function Page() {
  const stats = [
    {
      label: "Total Links",
      icon: <Link2 className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-sky-400 to-sky-500",
    },
    {
      label: "QR Codes",
      icon: <QrCode className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-pink-400 to-purple-500",
    },
    {
      label: "Total Clicks",
      icon: <MousePointerClick className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-emerald-400 to-emerald-500",
    },
    {
      label: "Total Views",
      icon: <Eye className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-orange-400 to-orange-500",
    },
  ];

  const actions = [
    {
      label: "Create Link",
      icon: <Link2 className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-sky-400 to-sky-500",
    },
    {
      label: "Create QR",
      icon: <QrCode className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-pink-400 to-purple-500",
    },
    {
      label: "AI Assistant",
      icon: <Bot className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-emerald-400 to-emerald-500",
    },
    {
      label: "View Analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-orange-400 to-orange-500",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex min-h-screen flex-col bg-muted/40 dark:bg-background">
        <TopNav />

        <main className="flex-1 px-6 py-5 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here&apos;s an overview of your email automation
              platform.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item, i) => (
              <Card
                key={i}
                className="rounded-2xl border border-border shadow-sm bg-card"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <h2 className="text-2xl font-semibold mt-1 text-foreground">
                        0
                      </h2>
                    </div>
                    <div
                      className={`h-11 w-11 rounded-2xl flex items-center justify-center text-white ${item.color}`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-xs text-emerald-500 dark:text-emerald-400">
                    +0% from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions + Recent (50 / 50) */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Quick Actions */}
            <Card className="rounded-2xl border border-border shadow-sm bg-card">
              <CardContent className="p-6 space-y-4">
                <h2 className="font-semibold text-lg text-foreground">
                  Quick Actions
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {actions.map((action, i) => (
                    <button
                      key={i}
                      className="flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-2xl border border-border bg-background hover:shadow-sm transition"
                    >
                      <div
                        className={`h-12 w-12 flex items-center justify-center text-white rounded-2xl ${action.color}`}
                      >
                        {action.icon}
                      </div>
                      <span className="font-medium text-sm text-foreground">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="rounded-2xl border border-border shadow-sm bg-card">
              <CardContent className="p-6 h-full flex flex-col">
                <h2 className="font-semibold text-lg mb-4 text-foreground">
                  Recent Activity
                </h2>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    No recent activity
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Overview */}
          <Card className="rounded-2xl border border-border shadow-sm bg-card">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg text-foreground">
                  Performance Overview
                </h2>

                <Button
                  variant="outline"
                  className="h-9 rounded-full border-border bg-background text-sm font-medium px-4 shadow-none hover:bg-muted"
                >
                  Last 7 days
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-3 rounded-2xl border-2 border-dashed border-border/60 dark:border-border h-64 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Chart will be displayed here
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
