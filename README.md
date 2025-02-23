# Water Guard Web

基于现代Web技术栈构建的智能水质监测系统前端项目。本系统提供实时水质监测、摄像头监控、预警管理等功能，帮助用户更好地进行水质管理和监控。

## 技术栈

- **运行时环境**: [Bun.js](https://bun.sh/) - 超快的JavaScript运行时
- **前端框架**: [Next.js 14](https://nextjs.org/) - React框架，提供服务端渲染和路由功能
- **UI框架**: [React](https://react.dev/) - 用户界面构建库
- **样式解决方案**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- **UI组件**: [shadcn/ui](https://ui.shadcn.com/) - 高质量可重用React组件库

## 主要功能

- 实时数据监控面板
- 多摄像头监控管理
- 水质参数实时监测
- 智能预警系统
- 数据趋势分析
- 监测点位管理

## 快速开始

确保你的开发环境已安装 [Bun](https://bun.sh)，然后按照以下步骤操作：

1. 克隆项目并安装依赖：

```bash
# 克隆项目
git clone <repository-url>
cd water-guard-web

# 安装依赖
bun install
```

2. 启动开发服务器：

```bash
bun dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
water-guard-web/
├── src/
│   ├── app/                 # 页面和路由
│   │   ├── dashboard/      # 仪表盘相关页面
│   │   ├── login/         # 登录页面
│   │   └── layout.tsx     # 根布局
│   ├── components/         # 可重用组件
│   │   ├── ui/            # UI基础组件
│   │   └── ...           # 其他组件
│   └── lib/               # 工具函数和配置
├── public/                # 静态资源
├── tailwind.config.ts    # Tailwind配置
├── next.config.ts        # Next.js配置
└── package.json          # 项目依赖和脚本
```

## 开发指南

- 使用 `bun run dev` 启动开发服务器
- 使用 `bun run build` 构建生产版本
- 使用 `bun run lint` 运行代码检查
- 使用 `bun run format` 格式化代码

## 环境配置

创建 `.env.local` 文件并配置以下环境变量：

```env
NEXT_PUBLIC_API_URL=你的API地址
```

## 部署

本项目可以部署到任何支持Node.js的环境。推荐使用Vercel进行部署：

```bash
bun run build
bun run start
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
