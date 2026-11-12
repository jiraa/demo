import type { IconName } from '../components/ui/Icon'
import type { VisualKind } from '../components/product/Visuals'

/** 页面内容全部集中在此，组件只负责呈现，不写死文案。 */

export type LinkCta = { label: string; href: string }

export type Heading = {
  eyebrow?: string
  title: string
  description?: string
}

export type FeatureItem = {
  icon: IconName
  title: string
  description: string
  tint: string
}

export type ShowcaseItem = {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  cta?: LinkCta
  visual: VisualKind
  theme: 'light' | 'dark' | 'tint'
  reverse?: boolean
}

export type ColorOption = {
  id: string
  name: string
  hex: string
  wallpaper: [string, string]
}

export type SpecGroup = {
  title: string
  items: { label: string; value: string }[]
}

export const navigation = {
  brand: 'Aura',
  items: [
    { label: '概览', href: '#top' },
    { label: '设计', href: '#design' },
    { label: '性能', href: '#performance' },
    { label: '影像', href: '#camera' },
    { label: '颜色', href: '#colors' },
    { label: '技术规格', href: '#specs' },
  ] satisfies { label: string; href: string }[],
  cta: { label: '购买', href: '#buy' } satisfies LinkCta,
}

export const hero = {
  badge: '全新',
  eyebrow: 'Aura Pro',
  titleLines: ['轻得不可思议。', '强大得超乎想象。'],
  subtitle:
    '航空级钛金属机身，6.1 英寸超视网膜 XDR 显示屏，A18 仿生芯片。每一个细节，都为非凡体验而重新设计。',
  highlights: ['5 级钛金属', 'A18 仿生芯片', '48MP 影像系统', '最长 27 小时续航'],
  primaryCta: { label: '购买 Aura Pro', href: '#buy' } satisfies LinkCta,
  secondaryCta: { label: '进一步了解', href: '#design' } satisfies LinkCta,
  priceNote: 'RMB 7,999 起，或 24 期分期每月 RMB 333 起',
}

export const featuresHeading: Heading = {
  eyebrow: '亮点',
  title: '每一处，都值得细看。',
  description: '从内到外，重新设计。把复杂留给我们，把简单留给你。',
}

export const features: FeatureItem[] = [
  {
    icon: 'sparkles',
    title: '钛金属设计',
    description: '更轻、更坚固。握在手里的第一感觉，就是不想放下。',
    tint: '#e8e4dc',
  },
  {
    icon: 'display',
    title: '超视网膜 XDR 显示屏',
    description: '2000 尼特峰值亮度，ProMotion 自适应刷新率，明暗细节分毫毕现。',
    tint: '#dcebfb',
  },
  {
    icon: 'chip',
    title: 'A18 仿生芯片',
    description: '第二代 3 纳米制程，性能提升最高 40%，能耗却更低。',
    tint: '#eee4fb',
  },
  {
    icon: 'camera',
    title: '专业级影像系统',
    description: '48MP 主摄配合计算摄影，随手一拍，即是作品。',
    tint: '#fbe4e6',
  },
  {
    icon: 'battery',
    title: '全天候续航',
    description: '一次充电，视频播放最长可达 27 小时。一天，远远不够用尽它。',
    tint: '#e1f4e8',
  },
  {
    icon: 'lock',
    title: '隐私与安全',
    description: '端侧处理，数据只属于你。面容 ID 让解锁自然发生。',
    tint: '#e4eef1',
  },
]

export const showcases: ShowcaseItem[] = [
  {
    id: 'design',
    eyebrow: '设计',
    title: '钛金属。轻，且坚韧。',
    description:
      '我们选用航天领域广泛使用的 5 级钛金属，在强度与重量之间找到恰好的平衡。机身比上一代轻 19 克，握持感从此不同。',
    bullets: ['亚光质感玻璃背板', '更窄的屏幕边框', 'IP68 级抗溅、抗水、防尘'],
    cta: { label: '查看全部设计细节', href: '#specs' },
    visual: 'device',
    theme: 'light',
  },
  {
    id: 'performance',
    eyebrow: '性能',
    title: 'A18 仿生。快得不像话。',
    description:
      '6 核 CPU 与 5 核 GPU 协同工作，配合 16 核神经网络引擎。无论是剪辑 4K 视频，还是运行主机级游戏，都游刃有余。',
    bullets: ['6 核 CPU', '5 核 GPU', '16 核神经网络引擎', '最高 40% 性能提升'],
    cta: { label: '了解芯片', href: '#specs' },
    visual: 'chip',
    theme: 'dark',
    reverse: true,
  },
  {
    id: 'camera',
    eyebrow: '影像',
    title: '把光，握在手里。',
    description:
      '全新 48MP 主摄搭载传感器位移式防抖，配合新一代计算摄影。暗光、逆光、运动瞬间，都能还原你眼中所见。',
    bullets: ['48MP ƒ/1.6 主摄', '5 倍光学变焦', '4K 120fps 杜比视界', '新一代人像模式'],
    cta: { label: '探索影像系统', href: '#specs' },
    visual: 'camera',
    theme: 'tint',
  },
]

export const colorsHeading: Heading = {
  eyebrow: '颜色',
  title: '五种质感，一种态度。',
  description: '每一种配色，都由材质本身呈现，而非涂层。',
}

export const colors: ColorOption[] = [
  { id: 'midnight', name: '午夜色', hex: '#2c2e35', wallpaper: ['#4d6ba8', '#0a1020'] },
  { id: 'starlight', name: '星光色', hex: '#e9e2d5', wallpaper: ['#f6d9ad', '#c9866a'] },
  { id: 'natural', name: '原色钛金属', hex: '#9c958b', wallpaper: ['#a7a29a', '#3b3935'] },
  { id: 'blue', name: '深海蓝', hex: '#3d5b8e', wallpaper: ['#3f86cf', '#102d59'] },
  { id: 'purple', name: '暮光紫', hex: '#b39ab4', wallpaper: ['#b774bd', '#3a1c55'] },
]

export const specsHeading: Heading = {
  eyebrow: '技术规格',
  title: '数字，也很动人。',
  description: '每一项参数背后，都是一次对体验的重新思考。',
}

export const specGroups: SpecGroup[] = [
  {
    title: '显示屏',
    items: [
      { label: '尺寸', value: '6.1 英寸全面屏' },
      { label: '分辨率', value: '2556 × 1179 像素' },
      { label: '刷新率', value: '1–120Hz ProMotion' },
      { label: '峰值亮度', value: '2000 尼特（户外）' },
    ],
  },
  {
    title: '芯片与续航',
    items: [
      { label: '芯片', value: 'A18 仿生' },
      { label: '视频播放', value: '最长 27 小时' },
      { label: '充电', value: 'USB-C / MagSafe' },
      { label: '内存', value: '8GB' },
    ],
  },
  {
    title: '影像',
    items: [
      { label: '主摄', value: '48MP ƒ/1.6' },
      { label: '超广角', value: '12MP' },
      { label: '长焦', value: '12MP / 5 倍' },
      { label: '视频', value: '4K 120fps 杜比视界' },
    ],
  },
  {
    title: '机身',
    items: [
      { label: '材质', value: '5 级钛金属' },
      { label: '防护', value: 'IP68' },
      { label: '重量', value: '187 克' },
      { label: '容量', value: '128GB 起' },
    ],
  },
]

export const specsFootnote = '以上规格为 Aura Pro 标称值，实际表现可能因使用环境而异。'

export const callToAction = {
  eyebrow: 'Aura Pro',
  title: '准备好，遇见下一代。',
  description: '现在下单，享免费刻字、两年保修与旧机抵扣服务。',
  price: 'RMB 7,999 起',
  primaryCta: { label: '立即购买', href: '#buy' } satisfies LinkCta,
  secondaryCta: { label: '预约到店体验', href: '#stores' } satisfies LinkCta,
  footnote: '价格含增值税。实际价格与供应情况以购买页面为准。',
}

export const footer = {
  note: '部分功能、配色与价格可能因地区而异。屏幕尺寸按对角线测量。产品图片仅供示意。',
  columns: [
    { title: '选购与了解', links: ['商店', 'Aura Pro', 'Aura', '配件', '以旧换新'] },
    { title: '服务', links: ['Aura Care', '技术支持', '维修', '保修查询'] },
    { title: '账户', links: ['管理你的 Aura ID', '商店账户', '云服务'] },
    { title: '关于 Aura', links: ['新闻稿', '工作机会', '环境责任', '联系我们'] },
  ],
  bottomLinks: ['隐私政策', '使用条款', '销售政策', '法律信息', '网站地图'],
  legal: 'Copyright © 2026 Aura Inc. 保留所有权利。',
}
