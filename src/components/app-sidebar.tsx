'use client';

import * as React from "react";
import {
  AlertCircle,
  Camera,
  ChevronDown,
  Droplets,
  LineChart,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// 系统导航数据
const navItems = [
  {
    title: "实时监控",
    icon: Camera,
    href: "/dashboard",
  },
  {
    title: "数据分析",
    icon: LineChart,
    href: "/dashboard/analysis",
  },
  {
    title: "预警管理",
    icon: AlertCircle,
    href: "/dashboard/alerts",
  },
  {
    title: "系统管理",
    icon: Settings2,
    href: "/dashboard/settings",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4">
          <Droplets className="h-6 w-6 text-blue-600" />
          <span className="font-semibold">智能河道污染监控系统</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
                flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors
                ${pathname === item.href 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="h-8 w-8 rounded-full bg-gray-100" />
          <div className="flex-1 truncate">
            <div className="text-sm font-medium text-gray-900">管理员</div>
            <div className="text-xs text-gray-500">admin@waterguard.com</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
