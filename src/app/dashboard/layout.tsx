'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { PageTitle } from "@/components/page-title";

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
          <PageTitle />
        </div>
        <Separator className="mb-4" />
        <div className="mb-6">
          <BreadcrumbNav />
        </div>
        <div className="px-2">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
