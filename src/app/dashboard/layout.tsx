'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4 mb-4">
          <SidebarTrigger />
          <span className="text-lg font-medium">智能河道污染监控系统</span>
        </div>
        <Separator className="mb-6" />
        <div className="px-2">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
