'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Bell, 
  BarChart, 
  Shield, 
  Camera, 
  LineChart,
  AlertCircle,
  CheckCircle2,
  Timer
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12 text-center">
        <Badge className="mb-4" variant="secondary">智能监控 · 实时预警</Badge>
        <h1 className="text-5xl font-bold mb-3 text-gray-900">
          智能河道污染监控系统
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          通过实时图像处理与自动化预警机制，提升河道管理与污染防治的效率
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            asChild
            variant="default"
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            <Link href="/login">
              管理员登录
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="lg"
          >
            了解更多
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">全天候监控</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
            <p className="text-gray-600">识别准确率</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">&lt;1s</h3>
            <p className="text-gray-600">响应时间</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">核心功能</h2>
          <p className="text-gray-600">全方位的河道污染监控解决方案</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <Activity className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">实时污染检测</h3>
              <p className="text-gray-600 mb-3">
                采用先进的深度学习模型，如YOLO或Faster R-CNN等算法，实时检测和识别河道中的污染物。
              </p>
              <Progress value={90} className="h-2" />
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <Bell className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">自动化预警</h3>
              <p className="text-gray-600 mb-3">
                基于WebSocket的实时通信，确保污染事件第一时间被发现和处理。
              </p>
              <Progress value={85} className="h-2" />
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <BarChart className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">数据可视化</h3>
              <p className="text-gray-600 mb-3">
                提供污染趋势分析、历史数据查询等多维度数据展示。
              </p>
              <Progress value={95} className="h-2" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">系统特点</h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem value="item-1" className="accordion-item">
                  <AccordionTrigger className="accordion-trigger px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">安全可靠的监控系统</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content">
                    <p className="text-gray-600">
                      采用先进的安全防护措施，确保系统稳定运行和数据安全。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="accordion-item">
                  <AccordionTrigger className="accordion-trigger px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <Camera className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">多点位协同监控</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content">
                    <p className="text-gray-600">
                      支持多个监控点位的协同工作，实现全方位无死角监控。
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="accordion-item">
                  <AccordionTrigger className="accordion-trigger px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50">
                        <LineChart className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">智能分析报告</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content">
                    <p className="text-gray-600">
                      自动生成分析报告，帮助决策者快速了解污染状况。
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Card className="border border-gray-200 shadow-md">
                <CardHeader className="py-4">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    实时预警
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">污染物检测</span>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <Separator className="bg-gray-200" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">系统状态</span>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <Separator className="bg-gray-200" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">预警响应</span>
                      <Timer className="h-5 w-5 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
