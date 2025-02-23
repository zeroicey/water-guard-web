'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  ThermometerSun,
  Droplets,
  Eye,
  LineChart,
  MapPin,
  Video,
  History,
  Settings2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// 模拟数据
const areaData = {
  id: 1,
  name: "东湖水质监测站",
  location: "东湖中心区域",
  status: "正常",
  description: "位于东湖中心区域的综合水质监测站，配备多个监测点位和摄像头，实时监控水质变化。",
  lastUpdate: "2分钟前",
  coordinates: {
    latitude: "30.5728° N",
    longitude: "114.2714° E",
  },
  waterQuality: {
    current: {
      ph: 7.2,
      temperature: 23.5,
      turbidity: 3.2,
      dissolved_oxygen: 8.5,
      conductivity: 452,
      total_nitrogen: 1.2,
      total_phosphorus: 0.08,
    },
    thresholds: {
      ph: { min: 6.5, max: 8.5 },
      temperature: { min: 15, max: 30 },
      turbidity: { min: 0, max: 5 },
      dissolved_oxygen: { min: 5, max: 12 },
      conductivity: { min: 250, max: 800 },
      total_nitrogen: { min: 0, max: 2 },
      total_phosphorus: { min: 0, max: 0.2 },
    },
  },
  cameras: [
    {
      id: 1,
      name: "东湖1号摄像头",
      status: "在线",
      type: "高清摄像头",
      resolution: "1920x1080",
      lastMaintenance: "2024-02-15",
    },
    {
      id: 2,
      name: "东湖2号摄像头",
      status: "在线",
      type: "红外摄像头",
      resolution: "1280x720",
      lastMaintenance: "2024-02-10",
    },
    {
      id: 3,
      name: "东湖3号摄像头",
      status: "离线",
      type: "高清摄像头",
      resolution: "1920x1080",
      lastMaintenance: "2024-02-01",
    },
    {
      id: 4,
      name: "东湖4号摄像头",
      status: "在线",
      type: "全景摄像头",
      resolution: "3840x2160",
      lastMaintenance: "2024-02-20",
    },
  ],
  recentHistory: [
    {
      time: "2024-02-23 15:30",
      type: "水质数据",
      description: "pH值略有上升，在正常范围内",
    },
    {
      time: "2024-02-23 14:45",
      type: "设备状态",
      description: "3号摄像头离线，已通知维护人员",
    },
    {
      time: "2024-02-23 13:20",
      type: "水质数据",
      description: "溶解氧含量达到日最高值",
    },
    {
      time: "2024-02-23 12:00",
      type: "系统维护",
      description: "完成日常设备检查",
    },
  ],
};

export default function AreaPage() {
  const params = useParams();
  const areaId = params.areaId;

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* 区域信息头部 */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{areaData.name}</h1>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{areaData.location}</span>
            <Badge variant={areaData.status === "正常" ? "default" : "destructive"}>
              {areaData.status}
            </Badge>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {areaData.description}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div>更新时间：{areaData.lastUpdate}</div>
          <div>经度：{areaData.coordinates.longitude}</div>
          <div>纬度：{areaData.coordinates.latitude}</div>
        </div>
      </div>

      {/* 主要内容区 */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="cameras">摄像头</TabsTrigger>
          <TabsTrigger value="history">历史记录</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* 水质参数卡片 */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">温度</CardTitle>
                <ThermometerSun className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {areaData.waterQuality.current.temperature}°C
                </div>
                <p className="text-xs text-muted-foreground">
                  正常范围：{areaData.waterQuality.thresholds.temperature.min}-
                  {areaData.waterQuality.thresholds.temperature.max}°C
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">pH值</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {areaData.waterQuality.current.ph}
                </div>
                <p className="text-xs text-muted-foreground">
                  正常范围：{areaData.waterQuality.thresholds.ph.min}-
                  {areaData.waterQuality.thresholds.ph.max}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">浊度</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {areaData.waterQuality.current.turbidity} NTU
                </div>
                <p className="text-xs text-muted-foreground">
                  正常范围：{areaData.waterQuality.thresholds.turbidity.min}-
                  {areaData.waterQuality.thresholds.turbidity.max} NTU
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">溶解氧</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {areaData.waterQuality.current.dissolved_oxygen} mg/L
                </div>
                <p className="text-xs text-muted-foreground">
                  正常范围：{areaData.waterQuality.thresholds.dissolved_oxygen.min}-
                  {areaData.waterQuality.thresholds.dissolved_oxygen.max} mg/L
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 其他水质参数 */}
          <Card>
            <CardHeader>
              <CardTitle>其他水质参数</CardTitle>
              <CardDescription>
                监测站采集的其他重要水质指标
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-sm font-medium">电导率</div>
                  <div className="text-2xl font-bold">
                    {areaData.waterQuality.current.conductivity} μS/cm
                  </div>
                  <div className="text-xs text-muted-foreground">
                    正常范围：{areaData.waterQuality.thresholds.conductivity.min}-
                    {areaData.waterQuality.thresholds.conductivity.max} μS/cm
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">总氮</div>
                  <div className="text-2xl font-bold">
                    {areaData.waterQuality.current.total_nitrogen} mg/L
                  </div>
                  <div className="text-xs text-muted-foreground">
                    正常范围：{areaData.waterQuality.thresholds.total_nitrogen.min}-
                    {areaData.waterQuality.thresholds.total_nitrogen.max} mg/L
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">总磷</div>
                  <div className="text-2xl font-bold">
                    {areaData.waterQuality.current.total_phosphorus} mg/L
                  </div>
                  <div className="text-xs text-muted-foreground">
                    正常范围：{areaData.waterQuality.thresholds.total_phosphorus.min}-
                    {areaData.waterQuality.thresholds.total_phosphorus.max} mg/L
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cameras" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {areaData.cameras.map((camera) => (
              <Card key={camera.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-lg">{camera.name}</CardTitle>
                    <CardDescription>{camera.type}</CardDescription>
                  </div>
                  <Badge variant={camera.status === "在线" ? "default" : "destructive"}>
                    {camera.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">分辨率</span>
                      <span>{camera.resolution}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">最近维护</span>
                      <span>{camera.lastMaintenance}</span>
                    </div>
                    <Button className="mt-4 w-full" variant="outline" asChild>
                      <Link href={`/dashboard/monitor/${areaId}/${camera.id}`}>
                        查看监控
                        <Video className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>操作历史</CardTitle>
              <CardDescription>
                显示最近的操作和数据变化记录
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {areaData.recentHistory.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <History className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{record.type}</p>
                        <time className="text-sm text-muted-foreground">
                          {record.time}
                        </time>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {record.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}