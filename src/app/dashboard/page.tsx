'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Cloud,
  Droplets,
  Eye,
  LineChart,
  MapPin,
  Plus,
  Settings,
  ShieldAlert,
  ThermometerSun,
  Wind,
} from "lucide-react";
import Link from "next/link";

// 模拟数据
const monitoringAreas = [
  {
    id: 1,
    name: "东湖水质监测站",
    location: "东湖中心区域",
    status: "正常",
    cameras: 4,
    lastUpdate: "2分钟前",
    waterQuality: {
      ph: 7.2,
      temperature: 23.5,
      turbidity: 3.2,
      dissolved_oxygen: 8.5,
    },
  },
  {
    id: 2,
    name: "西河监测点",
    location: "西河大桥下游",
    status: "警告",
    cameras: 3,
    lastUpdate: "5分钟前",
    waterQuality: {
      ph: 8.1,
      temperature: 24.2,
      turbidity: 5.7,
      dissolved_oxygen: 6.2,
    },
  },
  {
    id: 3,
    name: "南湾监测站",
    location: "南湾生态公园",
    status: "正常",
    cameras: 5,
    lastUpdate: "1分钟前",
    waterQuality: {
      ph: 7.5,
      temperature: 22.8,
      turbidity: 2.8,
      dissolved_oxygen: 7.8,
    },
  },
];

const recentAlerts = [
  {
    id: 1,
    type: "水质异常",
    location: "西河监测点",
    time: "10分钟前",
    severity: "高",
    message: "pH值超出正常范围",
    status: "未处理",
  },
  {
    id: 2,
    type: "设备离线",
    location: "东湖监测站",
    time: "30分钟前",
    severity: "中",
    message: "摄像头2号离线",
    status: "已处理",
  },
  {
    id: 3,
    type: "水质异常",
    location: "南湾监测站",
    time: "1小时前",
    severity: "低",
    message: "浊度轻微升高",
    status: "已处理",
  },
];

const statistics = {
  totalCameras: 12,
  activeCameras: 11,
  totalAlerts: 8,
  resolvedAlerts: 5,
  averageResponseTime: "15分钟",
  waterQualityScore: 92,
};

// 模拟天气数据
const weatherData = {
  temperature: 25,
  humidity: 65,
  windSpeed: 12,
  condition: "多云",
  forecast: [
    { day: "今天", temp: 25, condition: "多云" },
    { day: "明天", temp: 27, condition: "晴" },
    { day: "后天", temp: 24, condition: "小雨" },
  ]
};

// 模拟水质趋势数据
const waterQualityTrends = {
  ph: [7.2, 7.3, 7.1, 7.4, 7.2, 7.3, 7.2],
  temperature: [23.5, 23.8, 24.1, 23.9, 23.7, 23.5, 23.6],
  turbidity: [3.2, 3.4, 3.1, 3.3, 3.5, 3.2, 3.1],
  dissolved_oxygen: [8.5, 8.3, 8.4, 8.6, 8.5, 8.4, 8.5],
  timestamps: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
};

// 快速操作列表
const quickActions = [
  { id: 1, name: "添加监测点", icon: Plus, color: "text-green-500" },
  { id: 2, name: "系统设置", icon: Settings, color: "text-blue-500" },
  { id: 3, name: "查看报告", icon: LineChart, color: "text-purple-500" },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      {/* 概览卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">监控摄像头</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.activeCameras}/{statistics.totalCameras}</div>
            <p className="text-xs text-muted-foreground">
              {((statistics.activeCameras / statistics.totalCameras) * 100).toFixed(1)}% 在线率
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">预警信息</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.resolvedAlerts}/{statistics.totalAlerts}</div>
            <p className="text-xs text-muted-foreground">
              平均响应时间 {statistics.averageResponseTime}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">水质评分</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.waterQualityScore}</div>
            <p className="text-xs text-muted-foreground">
              优良水质
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">监测点位</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monitoringAreas.length}</div>
            <p className="text-xs text-muted-foreground">
              全部在线
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 天气和趋势图 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">天气状况</CardTitle>
            <CardDescription>实时天气可能影响水质</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Cloud className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
                  <div className="text-sm text-muted-foreground">{weatherData.condition}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4" />
                  <span>风速 {weatherData.windSpeed} km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4" />
                  <span>湿度 {weatherData.humidity}%</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t pt-4">
              {weatherData.forecast.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium">{day.day}</div>
                  <div className="text-lg">{day.temp}°C</div>
                  <div className="text-xs text-muted-foreground">{day.condition}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">水质趋势</CardTitle>
            <CardDescription>最近7小时数据</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              {/* 这里可以集成实际的图表组件，如 recharts */}
              <div className="flex h-full items-end justify-between gap-2">
                {waterQualityTrends.ph.map((value, index) => (
                  <div
                    key={index}
                    className="relative flex w-full flex-col items-center"
                  >
                    <div
                      className="w-full bg-blue-500"
                      style={{
                        height: `${(value / 14) * 100}%`,
                        minHeight: "20px",
                      }}
                    />
                    <span className="mt-2 text-xs">{waterQualityTrends.timestamps[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 快速操作 */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickActions.map((action) => (
          <Card key={action.id} className="cursor-pointer hover:bg-accent">
            <CardContent className="flex items-center gap-4 pt-6">
              <action.icon className={`h-6 w-6 ${action.color}`} />
              <div className="font-medium">{action.name}</div>
              <ArrowUpRight className="ml-auto h-4 w-4" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 监测区域列表 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {monitoringAreas.map((area) => (
          <Card key={area.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">{area.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {area.location}
                </CardDescription>
              </div>
              <Badge variant={area.status === "正常" ? "default" : "destructive"}>
                {area.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ThermometerSun className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">温度</span>
                    <span className="ml-auto font-medium">
                      {area.waterQuality.temperature}°C
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">pH值</span>
                    <span className="ml-auto font-medium">
                      {area.waterQuality.ph}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">浊度</span>
                    <span className="ml-auto font-medium">
                      {area.waterQuality.turbidity} NTU
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">溶解氧</span>
                    <span className="ml-auto font-medium">
                      {area.waterQuality.dissolved_oxygen} mg/L
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="h-4 w-4" />
                  <span>{area.cameras} 个摄像头</span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/dashboard/monitor/${area.id}`}>
                    查看详情
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 预警信息 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">最近预警</CardTitle>
          <CardDescription>实时监控异常情况</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <Alert
                  key={alert.id}
                  variant={alert.severity === "高" ? "destructive" : "default"}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <AlertTitle className="flex items-center gap-2">
                        {alert.type}
                        <Badge variant={alert.status === "已处理" ? "default" : "destructive"}>
                          {alert.status}
                        </Badge>
                      </AlertTitle>
                      <AlertDescription>
                        <div>{alert.message}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {alert.location} · {alert.time}
                        </div>
                      </AlertDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      处理
                    </Button>
                  </div>
                </Alert>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}