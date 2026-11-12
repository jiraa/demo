import { useState, type CSSProperties } from 'react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import DeviceMock from '../product/DeviceMock'
import ColorSwatches from '../product/ColorSwatches'
import styles from './ColorsSection.module.css'

type Heading = { eyebrow?: string; title: string; description?: string }

export type ColorOption = {
  id: string
  name: string
  hex: string
  wallpaper: [string, string]
}

type ColorsSectionProps = {
  heading: Heading
  colors: ColorOption[]
}

/** 颜色展示区：交互状态在本组件内，切换后同步更新设备壁纸。 */
export default function ColorsSection({ heading, colors }: ColorsSectionProps) {
  const [selectedId, setSelectedId] = useState(() => colors[0]?.id ?? '')
  const selected = colors.find((color) => color.id === selectedId) ?? colors[0]

  if (colors.length === 0 || !selected) return null

  return (
    <section id="colors" className={styles.section}>
      <Container>
        <Reveal>
          <SectionHeading {...heading} />
        </Reveal>

        <div className={styles.stage}>
          <div className={styles.glow} style={{ '--glow': selected.hex } as CSSProperties} />
          <DeviceMock wallpaper={selected.wallpaper} variant="showcase" />
        </div>

        <Reveal delay={100} className={styles.controls}>
          <ColorSwatches colors={colors} selectedId={selectedId} onSelect={setSelectedId} />
        </Reveal>
      </Container>
    </section>
  )
}
