import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'default' | 'inverted'
  size?: 'section' | 'display'
  className?: string
}

/** 区块标题：可选的眉题 + 主标题 + 说明文字，支持居中与反色。 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
  size = 'section',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={[
        styles.heading,
        align === 'center' ? styles.center : styles.left,
        tone === 'inverted' ? styles.inverted : '',
        size === 'display' ? styles.display : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
