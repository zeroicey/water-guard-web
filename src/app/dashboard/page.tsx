import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    id: "riverside",
    name: "滨江区域",
    description: "沿江岸线水质监测点",
    cameras: 12,
    alerts: 2,
  },
  {
    id: "east",
    name: "城东区域", 
    description: "城东主要河道",
    cameras: 8,
    alerts: 0,
  },
  {
    id: "west",
    name: "城西区域",
    description: "城西水系监测",
    cameras: 10,
    alerts: 1,
  },
  {
    id: "north",
    name: "城北区域",
    description: "北部水域监控",
    cameras: 6,
    alerts: 0,
  },
  {
    id: "south", 
    name: "城南区域",
    description: "南部水系监测点",
    cameras: 9,
    alerts: 1,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Link key={area.id} href={`/dashboard/monitor/${area.id}`}>
            <Card className="hover:bg-gray-50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">
                  {area.name}
                </CardTitle>
                <MapPin className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  {area.description}
                </CardDescription>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-medium">{area.cameras}</span> 个监控点
                  </div>
                  {area.alerts > 0 && (
                    <div className="text-red-600">
                      <span className="font-medium">{area.alerts}</span> 个预警
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}