"use client";

import React, { useState } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Search,
  Filter,
  Users,
  Building2,
  Sun,
  Moon,
  Bell,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes"; // ⭐ theme hook

// 🔹 Common Top Navbar (with theme toggle)
function TopNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 border-b bg-background">
      {/* Left: sidebar + search */}
      <div className="flex items-center gap-3 flex-1">
        
        <Separator orientation="vertical" className="hidden sm:block h-6" />

        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads, companies, contacts..."
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

export default function LeadsGenerationPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full h-full overflow-x-hidden flex flex-col">
        {/* 🔻 Purana breadcrumb header hata diya, yaha TopNav hai */}
        <TopNav />

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6 bg-muted/40">
          {/* Page title */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Lead Finder</h1>
            <p className="text-muted-foreground mt-1">
              Discover and connect with potential leads using advanced search.
            </p>
          </div>

          {/* Search + Filters card */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-4 md:p-5">
              {/* Top search row */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                {/* Search input */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 rounded-2xl border-2 border-teal-500 bg-background px-4 py-2">
                    <Search className="h-5 w-5 text-teal-600 shrink-0" />
                    <Input
                      className="border-0 shadow-none px-0 py-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Search by name, job title, company..."
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 md:ml-3 md:w-auto w-full">
                  <Button
                    variant="outline"
                    className="flex-1 md:flex-none rounded-xl"
                    onClick={() => setShowFilters((prev) => !prev)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button className="flex-1 md:flex-none rounded-xl bg-teal-600 hover:bg-teal-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search Leads
                  </Button>
                </div>
              </div>

              {/* Filter panel */}
              {showFilters && (
                <div className="mt-5 border-t pt-6 space-y-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    {/* Job Title */}
                    <div className="space-y-1.5">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g., Marketing Director"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="e.g., Microsoft" />
                    </div>

                    {/* Location */}
                    <div className="space-y-1.5">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g., San Francisco, CA"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {/* Industry */}
                    <div className="space-y-1.5">
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger id="industry" className="rounded-xl">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="it">
                            Information Technology
                          </SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Company Size */}
                    <div className="space-y-1.5">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select>
                        <SelectTrigger id="companySize" className="rounded-xl">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1–10</SelectItem>
                          <SelectItem value="11-50">11–50</SelectItem>
                          <SelectItem value="51-200">51–200</SelectItem>
                          <SelectItem value="200+">200+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email Status */}
                    <div className="space-y-1.5">
                      <Label htmlFor="emailStatus">Email Status</Label>
                      <Select defaultValue="all">
                        <SelectTrigger id="emailStatus" className="rounded-xl">
                          <SelectValue placeholder="All Emails" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Emails</SelectItem>
                          <SelectItem value="verified">
                            Verified Only
                          </SelectItem>
                          <SelectItem value="unverified">Unverified</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="ghost" className="rounded-xl">
                      Clear Filters
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Empty state section */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="py-10 md:py-12 px-4 md:px-10 flex flex-col items-center text-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <Search className="h-7 w-7 text-teal-600" />
              </div>

              <div className="space-y-2 max-w-xl">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Start Finding Your Perfect Leads
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Use our advanced search and filters to discover potential
                  customers. Search by job title, company, location, and more.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full">
                <div className="rounded-2xl border bg-muted/40 px-6 py-4 flex flex-col items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <div className="text-sm font-medium">50M+ Contacts</div>
                </div>
                <div className="rounded-2xl border bg-muted/40 px-6 py-4 flex flex-col items-center gap-2">
                  <Building2 className="h-5 w-5 text-teal-600" />
                  <div className="text-sm font-medium">10M+ Companies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
