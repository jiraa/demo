# Aura Pro 产品首页

一个遵循 Apple Human Interface Guidelines 视觉语言的 React 单页产品站。页面完全由组件拼装，文案与配置集中在 `src/data/home.ts`，改内容不需要改组件。

## 运行

```bash
npm install
npm run dev      # 本地开发
npm run build    # 类型检查 + 生产构建
npm run preview  # 预览构建产物
```

## 组件结构

```
src/
├── App.tsx                    # 只负责「拼装」页面
├── data/home.ts               # 全站内容与配置（数据驱动）
├── styles/                    # 设计令牌 + 全局样式
└── components/
    ├── ui/                    # 通用原语：Container / Button / SectionHeading / Icon / Reveal
    ├── layout/                # 页面框架：Navbar / Footer / Brand
    ├── product/               # 产品视觉：DeviceMock / ProductVisual / ColorSwatches
    └── sections/              # 内容区块：Hero / FeatureGrid / Showcase / ColorsSection / Specs / CallToAction
```

新增一个区块时：写好 `sections/` 下的组件，在 `data/home.ts` 补数据，再到 `App.tsx` 里加一行即可。
