import type { CSSProperties } from 'react'
import styles from './ColorSwatches.module.css'

export type Swatch = { id: string; name: string; hex: string }

type ColorSwatchesProps = {
  colors: Swatch[]
  selectedId: string
  onSelect: (id: string) => void
}

/** 机身颜色选择器：无状态组件，选中值由使用方持有。 */
export default function ColorSwatches({ colors, selectedId, onSelect }: ColorSwatchesProps) {
  const current = colors.find((color) => color.id === selectedId)?.name ?? ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.list} role="group" aria-label="选择机身颜色">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            className={styles.swatch}
            style={{ '--swatch-color': color.hex } as CSSProperties}
            aria-label={color.name}
            aria-pressed={color.id === selectedId}
            onClick={() => onSelect(color.id)}
          />
        ))}
      </div>
      <p className={styles.current} aria-live="polite">
        {current}
      </p>
    </div>
  )
}
