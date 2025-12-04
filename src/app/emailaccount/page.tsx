"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Search,
  Download,
  TrendingUp,
  MoreVertical,
  Plus,
  Mail,
  Sun,
  Moon,
  Bell,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes"; // ⭐ theme hook

// 🔹 Common top navigation (with theme toggle)
function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">
        

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search links, QR codes, analytics..."
            className="pl-9 rounded-full"
          />
        </div>
      </div>

      {/* Right: icons */}
      <div className="flex items-center gap-2">
        {/* 🌗 Dark / Light toggle */}
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

        <Avatar className="h-8 w-8 border">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

const emailAccounts = [
  {
    id: 1,
    email: "tanisha@growonlinked.in",
    dailyEmailsSent: "0 of 50",
    bounces: 0,
    warmupEmails: 40,
    healthScore: 99,
  },
  {
    id: 2,
    email: "lisa@growonlinked.in",
    dailyEmailsSent: "0 of 50",
    bounces: 0,
    warmupEmails: 36,
    healthScore: 96,
  },
  {
    id: 3,
    email: "sumit@growonlinked.in",
    dailyEmailsSent: "0 of 50",
    bounces: 0,
    warmupEmails: 65,
    healthScore: 96,
  },
];

export default function LeadsGenerationPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full h-full overflow-x-hidden flex flex-col">
        {/* 🔻 TopNav with toggle */}
        <TopNav />

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6 bg-muted/40 h-full">
          {/* Page Header */}
          <div className="flex items-start h-full justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Email Accounts
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-teal-100  text-teal-700 hover:bg-teal-100"
                >
                  Tutorial
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1">
                Manage your email accounts and warmup settings
              </p>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>

          {/* Filters and Actions */}
          <div className="bg-background rounded-lg border p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full md:max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search email accounts..."
                  className="pl-9"
                />
              </div>

              <div className="flex gap-2 w-full md:w-auto flex-wrap">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Export
                </Button>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="newest">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="health">Health Score</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Health Check
                </Button>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Emails: <span className="font-medium text-foreground">3 / 5</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-background rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase w-[50px]">
                      <Checkbox />
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase">
                      EMAIL ACCOUNT NAME
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase">
                      DAILY EMAILS SENT
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase">
                      BOUNCES
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase">
                      WARMUP EMAILS
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase">
                      HEALTH SCORE
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase w-[50px]" />
                  </tr>
                </thead>
                <tbody>
                  {emailAccounts.map((account) => (
                    <tr
                      key={account.id}
                      className="border-b transition-colors hover:bg-muted/50"
                    >
                      <td className="p-4 align-middle">
                        <Checkbox />
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-white border flex items-center justify-center flex-shrink-0">
                            {/* Google style icon */}
                            <svg viewBox="0 0 24 24" className="w-4 h-4">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">{account.email}</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        {account.dailyEmailsSent}
                      </td>
                      <td className="p-4 align-middle">{account.bounces}</td>
                      <td className="p-4 align-middle">
                        {account.warmupEmails}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">
                            {account.healthScore}
                          </span>
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
