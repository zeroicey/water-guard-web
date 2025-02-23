'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const areaNames = {
  riverside: "滨江区域",
  east: "城东区域",
  west: "城西区域",
  north: "城北区域",
  south: "城南区域",
};

const cameras = {
  riverside: [
    { id: "cam1", name: "1号监控点", location: "滨江大道东段", status: "online", temperature: 25.6, ph: 7.2, turbidity: 12, oxygen: 7.8 },
    { id: "cam2", name: "2号监控点", location: "滨江公园北", status: "online", temperature: 25.2, ph: 7.1, turbidity: 15, oxygen: 7.5 },
    { id: "cam3", name: "3号监控点", location: "滨江大道中段", status: "offline", temperature: null, ph: null, turbidity: null, oxygen: null },
  ],
  east: [
    { id: "cam4", name: "4号监控点", location: "东湖公园", status: "online", temperature: 26.1, ph: 7.3, turbidity: 10, oxygen: 8.0 },
    { id: "cam5", name: "5号监控点", location: "东部水厂", status: "online", temperature: 25.8, ph: 7.2, turbidity: 11, oxygen: 7.9 },
  ],
  west: [
    { id: "cam6", name: "6号监控点", location: "西湖景区", status: "online", temperature: 25.4, ph: 7.1, turbidity: 13, oxygen: 7.7 },
    { id: "cam7", name: "7号监控点", location: "西部净水厂", status: "offline", temperature: null, ph: null, turbidity: null, oxygen: null },
  ],
  north: [
    { id: "cam8", name: "8号监控点", location: "北部水库", status: "online", temperature: 24.9, ph: 7.0, turbidity: 14, oxygen: 7.6 },
  ],
  south: [
    { id: "cam9", name: "9号监控点", location: "南湖公园", status: "online", temperature: 26.3, ph: 7.4, turbidity: 9, oxygen: 8.1 },
    { id: "cam10", name: "10号监控点", location: "南部水厂", status: "online", temperature: 25.7, ph: 7.2, turbidity: 12, oxygen: 7.8 },
  ],
};

export default function AreaMonitorPage() {
  const { areaId } = useParams();
  const areaName = areaNames[areaId as keyof typeof areaNames];
  const areaCameras = cameras[areaId as keyof typeof cameras] || [];

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areaCameras.map((camera) => (
          <Link key={camera.id} href={`/dashboard/monitor/${areaId}/${camera.id}`}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">
                  {camera.name}
                </CardTitle>
                <Badge variant={camera.status === "online" ? "default" : "secondary"}>
                  {camera.status === "online" ? "在线" : "离线"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="mb-3 text-sm text-gray-500">
                  <Camera className="mr-2 inline-block h-4 w-4" />
                  {camera.location}
                </div>
                {camera.status === "online" && (
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500">温度</div>
                      <div className="font-medium">{camera.temperature}°C</div>
                    </div>
                    <div>
                      <div className="text-gray-500">pH值</div>
                      <div className="font-medium">{camera.ph}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">浊度</div>
                      <div className="font-medium">{camera.turbidity} NTU</div>
                    </div>
                    <div>
                      <div className="text-gray-500">溶解氧</div>
                      <div className="font-medium">{camera.oxygen} mg/L</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}