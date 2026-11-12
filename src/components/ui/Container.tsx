import type { ReactNode } from 'react'
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode
  size?: 'default' | 'wide' | 'narrow'
  className?: string
}

/** 统一的内容宽度容器，负责水平居中与两侧安全边距。 */
export default function Container({ children, size = 'default', className = '' }: ContainerProps) {
  const sizeClass = size === 'wide' ? styles.wide : size === 'narrow' ? styles.narrow : ''
  return <div className={`${styles.container} ${sizeClass} ${className}`.trim()}>{children}</div>
}
