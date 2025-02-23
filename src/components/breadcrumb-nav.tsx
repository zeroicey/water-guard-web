'use client';

import * as React from "react";
import { Fragment } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const areaNames = {
  riverside: "滨江区域",
  east: "城东区域",
  west: "城西区域",
  north: "城北区域",
  south: "城南区域",
};

const allCameras = {
  cam1: { name: "1号监控点" },
  cam2: { name: "2号监控点" },
  cam3: { name: "3号监控点" },
  cam4: { name: "4号监控点" },
  cam5: { name: "5号监控点" },
  cam6: { name: "6号监控点" },
  cam7: { name: "7号监控点" },
  cam8: { name: "8号监控点" },
  cam9: { name: "9号监控点" },
  cam10: { name: "10号监控点" },
};

interface BreadcrumbSegment {
  href: string;
  label: string;
}

export function BreadcrumbNav() {
  const params = useParams();
  const pathname = usePathname();
  
  const areaId = params.areaId as string;
  const cameraId = params.cameraId as string;
  
  const segments: BreadcrumbSegment[] = [
    { href: "/dashboard", label: "监控区域" },
    ...(areaId ? [{ 
      href: `/dashboard/monitor/${areaId}`, 
      label: areaNames[areaId as keyof typeof areaNames] || areaId 
    }] : []),
    ...(cameraId ? [{ 
      href: `/dashboard/monitor/${areaId}/${cameraId}`, 
      label: allCameras[cameraId as keyof typeof allCameras]?.name || cameraId 
    }] : [])
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          
          return (
            <Fragment key={segment.href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{segment.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={segment.href}>{segment.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
