'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// 复用之前定义的数据
const areaNames = {
  riverside: "滨江区域",
  east: "城东区域",
  west: "城西区域",
  north: "城北区域",
  south: "城南区域",
};

const allCameras = {
  cam1: { id: "cam1", name: "1号监控点", location: "滨江大道东段", status: "online", temperature: 25.6, ph: 7.2, turbidity: 12, oxygen: 7.8, area: "riverside" },
  cam2: { id: "cam2", name: "2号监控点", location: "滨江公园北", status: "online", temperature: 25.2, ph: 7.1, turbidity: 15, oxygen: 7.5, area: "riverside" },
  cam3: { id: "cam3", name: "3号监控点", location: "滨江大道中段", status: "offline", temperature: null, ph: null, turbidity: null, oxygen: null, area: "riverside" },
  cam4: { id: "cam4", name: "4号监控点", location: "东湖公园", status: "online", temperature: 26.1, ph: 7.3, turbidity: 10, oxygen: 8.0, area: "east" },
  cam5: { id: "cam5", name: "5号监控点", location: "东部水厂", status: "online", temperature: 25.8, ph: 7.2, turbidity: 11, oxygen: 7.9, area: "east" },
  cam6: { id: "cam6", name: "6号监控点", location: "西湖景区", status: "online", temperature: 25.4, ph: 7.1, turbidity: 13, oxygen: 7.7, area: "west" },
  cam7: { id: "cam7", name: "7号监控点", location: "西部净水厂", status: "offline", temperature: null, ph: null, turbidity: null, oxygen: null, area: "west" },
  cam8: { id: "cam8", name: "8号监控点", location: "北部水库", status: "online", temperature: 24.9, ph: 7.0, turbidity: 14, oxygen: 7.6, area: "north" },
  cam9: { id: "cam9", name: "9号监控点", location: "南湖公园", status: "online", temperature: 26.3, ph: 7.4, turbidity: 9, oxygen: 8.1, area: "south" },
  cam10: { id: "cam10", name: "10号监控点", location: "南部水厂", status: "online", temperature: 25.7, ph: 7.2, turbidity: 12, oxygen: 7.8, area: "south" },
};

export default function CameraDetailPage() {
  const { areaId, cameraId } = useParams();
  const camera = allCameras[cameraId as keyof typeof allCameras];
  const areaName = areaNames[areaId as keyof typeof areaNames];

  if (!camera || camera.area !== areaId) {
    return <div>Camera not found</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <Link 
          href={`/dashboard/monitor/${areaId}`} 
          className="mb-4 flex items-center text-sm text-gray-500 hover:text-gray-900"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          返回{areaName}
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{camera.name}</h1>
            <p className="text-sm text-gray-500">{camera.location}</p>
          </div>
          <Badge variant={camera.status === "online" ? "default" : "secondary"}>
            {camera.status === "online" ? "在线" : "离线"}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 监控画面 */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>实时监控</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 水质数据 */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>水质数据</CardTitle>
            </CardHeader>
            <CardContent>
              {camera.status === "online" ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">温度</div>
                    <div className="text-2xl font-semibold">{camera.temperature}°C</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">pH值</div>
                    <div className="text-2xl font-semibold">{camera.ph}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">浊度</div>
                    <div className="text-2xl font-semibold">{camera.turbidity} NTU</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">溶解氧</div>
                    <div className="text-2xl font-semibold">{camera.oxygen} mg/L</div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  设备离线,暂无数据
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}