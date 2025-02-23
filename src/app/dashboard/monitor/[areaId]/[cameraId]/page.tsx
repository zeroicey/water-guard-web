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
  RotateCcw,
  Maximize2,
  Volume2,
  VolumeX,
  Download,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// 模拟数据
const cameraData = {
  id: 1,
  name: "东湖1号摄像头",
  location: "东湖中心区域",
  status: "在线",
  type: "高清摄像头",
  resolution: "1920x1080",
  lastMaintenance: "2024-02-15",
  description: "用于监控东湖中心区域的水质情况，配备高清摄像头和水质传感器。",
  coordinates: {
    latitude: "30.5728° N",
    longitude: "114.2714° E",
  },
  specs: {
    model: "DS-2CD2385G1-I",
    manufacturer: "海康威视",
    installDate: "2023-12-01",
    warranty: "2026-12-01",
    storage: "支持128GB TF卡",
    network: "10/100M自适应以太网口",
    power: "DC12V/PoE",
  },
  waterQuality: {
    temperature: 23.5,
    ph: 7.2,
    turbidity: 3.2,
    dissolved_oxygen: 8.5,
    lastUpdate: "2024-02-23 15:55",
  },
  recentEvents: [
    {
      time: "2024-02-23 15:45",
      type: "状态变更",
      description: "摄像头参数自动调整",
    },
    {
      time: "2024-02-23 15:30",
      type: "水质数据",
      description: "水温升高0.3°C",
    },
    {
      time: "2024-02-23 15:00",
      type: "系统维护",
      description: "完成定时数据备份",
    },
    {
      time: "2024-02-23 14:30",
      type: "预警信息",
      description: "水质参数恢复正常",
    },
  ],
};

export default function CameraPage() {
  const params = useParams();
  const { areaId, cameraId } = params;

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* 摄像头信息头部 */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{cameraData.name}</h1>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{cameraData.location}</span>
            <Badge variant={cameraData.status === "在线" ? "default" : "destructive"}>
              {cameraData.status}
            </Badge>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {cameraData.description}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div>经度：{cameraData.coordinates.longitude}</div>
          <div>纬度：{cameraData.coordinates.latitude}</div>
        </div>
      </div>

      {/* 主要内容区 */}
      <Tabs defaultValue="monitor" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monitor">实时监控</TabsTrigger>
          <TabsTrigger value="data">水质数据</TabsTrigger>
          <TabsTrigger value="info">设备信息</TabsTrigger>
          <TabsTrigger value="history">历史记录</TabsTrigger>
        </TabsList>

        <TabsContent value="monitor" className="space-y-4">
          {/* 视频监控区域 */}
          <Card>
            <CardContent className="p-6">
              <div className="relative aspect-video w-full bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white opacity-20" />
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 实时数据 */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">温度</CardTitle>
                <ThermometerSun className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {cameraData.waterQuality.temperature}°C
                </div>
                <p className="text-xs text-muted-foreground">
                  最后更新：{cameraData.waterQuality.lastUpdate}
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
                  {cameraData.waterQuality.ph}
                </div>
                <p className="text-xs text-muted-foreground">
                  最后更新：{cameraData.waterQuality.lastUpdate}
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
                  {cameraData.waterQuality.turbidity} NTU
                </div>
                <p className="text-xs text-muted-foreground">
                  最后更新：{cameraData.waterQuality.lastUpdate}
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
                  {cameraData.waterQuality.dissolved_oxygen} mg/L
                </div>
                <p className="text-xs text-muted-foreground">
                  最后更新：{cameraData.waterQuality.lastUpdate}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          {/* 水质数据趋势图 */}
          <Card>
            <CardHeader>
              <CardTitle>水质数据趋势</CardTitle>
              <CardDescription>
                显示最近24小时的水质数据变化趋势
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[2/1] w-full rounded-lg border bg-gradient-to-b from-muted/50 to-muted p-6">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    图表区域 - 这里将显示水质数据趋势图
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 数据导出 */}
          <Card>
            <CardHeader>
              <CardTitle>数据导出</CardTitle>
              <CardDescription>
                导出历史水质数据记录
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  导出Excel
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  导出CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>设备规格</CardTitle>
              <CardDescription>
                摄像头详细规格参数
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">设备型号</span>
                    <span>{cameraData.specs.model}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">制造商</span>
                    <span>{cameraData.specs.manufacturer}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">安装日期</span>
                    <span>{cameraData.specs.installDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">保修期限</span>
                    <span>{cameraData.specs.warranty}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">存储</span>
                    <span>{cameraData.specs.storage}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">网络接口</span>
                    <span>{cameraData.specs.network}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">电源</span>
                    <span>{cameraData.specs.power}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">分辨率</span>
                    <span>{cameraData.resolution}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>维护信息</CardTitle>
              <CardDescription>
                设备维护和保养记录
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">最近维护</span>
                  <span>{cameraData.lastMaintenance}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">下次维护</span>
                  <span>2024-03-15</span>
                </div>
                <Button className="mt-4" variant="outline">
                  <Settings2 className="mr-2 h-4 w-4" />
                  查看维护计划
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>最近事件</CardTitle>
              <CardDescription>
                显示最近的操作和数据变化记录
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cameraData.recentEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <History className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{event.type}</p>
                        <time className="text-sm text-muted-foreground">
                          {event.time}
                        </time>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
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