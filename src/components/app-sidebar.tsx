'use client';

import {
  Camera,
  LineChart,
  AlertTriangle,
  Settings,
  ChevronDown,
  BarChart2,
  History,
  Settings2,
  LayoutDashboard,
  Droplets,
  ScrollText,
  AlertCircle,
  ShieldAlert,
  FileBarChart,
  UserCog,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

interface SubMenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

interface MenuItem {
  title: string;
  icon: LucideIcon;
  href?: string;
  description: string;
  items?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "实时监控",
    icon: LayoutDashboard,
    href: "/dashboard",
    description: "实时监控数据和摄像头画面",
  },
  {
    title: "数据分析",
    icon: LineChart,
    description: "水质数据分析和趋势报告",
    items: [
      { 
        title: "趋势分析", 
        href: "/dashboard/analysis/trends", 
        icon: BarChart2,
        description: "水质数据趋势分析"
      },
      { 
        title: "历史数据", 
        href: "/dashboard/analysis/history", 
        icon: History,
        description: "历史水质数据查询"
      },
      { 
        title: "统计报表", 
        href: "/dashboard/analysis/reports", 
        icon: FileBarChart,
        description: "数据统计和报表生成"
      },
    ],
  },
  {
    title: "预警管理",
    icon: AlertTriangle,
    description: "水质预警和告警管理",
    items: [
      { 
        title: "实时预警", 
        href: "/dashboard/alerts/realtime", 
        icon: AlertCircle,
        description: "实时预警监控"
      },
      { 
        title: "预警规则", 
        href: "/dashboard/alerts/rules", 
        icon: ShieldAlert,
        description: "预警规则配置"
      },
      { 
        title: "处理记录", 
        href: "/dashboard/alerts/history", 
        icon: ScrollText,
        description: "预警处理历史记录"
      },
    ],
  },
  {
    title: "系统管理",
    icon: Settings,
    description: "系统设置和用户管理",
    items: [
      { 
        title: "用户管理", 
        href: "/dashboard/system/users", 
        icon: UserCog,
        description: "用户账号管理"
      },
      { 
        title: "权限设置", 
        href: "/dashboard/system/roles", 
        icon: Lock,
        description: "用户权限配置"
      },
      { 
        title: "系统配置", 
        href: "/dashboard/system/settings", 
        icon: Settings2,
        description: "系统参数配置"
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<string[]>(
    menuItems.filter(item => item.items).map(item => item.title)
  );

  const toggleItem = (title: string) => {
    setOpenItems(current =>
      current.includes(title)
        ? current.filter(i => i !== title)
        : [...current, title]
    );
  };

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-6 py-4">
          <Droplets className="h-6 w-6 text-primary" />
          <div className="text-lg font-semibold">河道污染监控系统</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleItem(item.title)}
                        className={cn(
                          "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                          openItems.includes(item.title) && "bg-accent/50",
                          item.href && pathname.startsWith(item.href) && "bg-accent"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        <ChevronDown className={cn(
                          "ml-auto h-4 w-4 transition-transform duration-200",
                          openItems.includes(item.title) && "rotate-180"
                        )} />
                      </SidebarMenuButton>
                      {openItems.includes(item.title) && (
                        <SidebarMenu>
                          {item.items.map((subItem) => (
                            <SidebarMenuItem key={subItem.href}>
                              <SidebarMenuButton
                                asChild
                                className={cn(
                                  "relative flex items-center gap-2 rounded-lg px-8 py-2 text-sm transition-colors hover:bg-accent",
                                  pathname === subItem.href && "bg-accent"
                                )}
                              >
                                <Link href={subItem.href}>
                                  <subItem.icon className="h-4 w-4" />
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                        pathname === item.href && "bg-accent"
                      )}
                    >
                      <Link href={item.href!}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
