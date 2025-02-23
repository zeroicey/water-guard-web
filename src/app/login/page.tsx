import { LoginForm } from "@/components/login-form";
import { Droplets } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute inset-0 bg-grid-blue-500/[0.05] -z-10" />
      <div className="absolute w-[500px] h-[500px] -right-32 -top-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute w-[500px] h-[500px] -left-32 -bottom-32 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container relative flex min-h-svh w-full items-center justify-center p-6 md:grid md:grid-cols-2 md:p-10">
        {/* 左侧品牌区域 */}
        <div className="hidden md:flex md:flex-col md:items-start md:gap-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Droplets className="h-10 w-10" />
            <span className="text-2xl font-bold">Water Guard</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            智能河道污染监控系统
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            通过先进的图像识别技术，实时监控和预警河道污染情况
          </p>
        </div>

        {/* 登录表单区域 */}
        <div className="w-full max-w-sm md:ml-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
