'use client';

import { useParams, usePathname } from "next/navigation";

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

export function PageTitle() {
  const params = useParams();
  const pathname = usePathname();
  
  const areaId = params.areaId as string;
  const cameraId = params.cameraId as string;

  if (cameraId) {
    const cameraName = allCameras[cameraId as keyof typeof allCameras]?.name || cameraId;
    return <span className="text-lg font-medium">{cameraName}实时监控</span>;
  }

  if (areaId) {
    const areaName = areaNames[areaId as keyof typeof areaNames] || areaId;
    return <span className="text-lg font-medium">{areaName}监控点</span>;
  }

  return <span className="text-lg font-medium">监控区域总览</span>;
}
