import styles from './Brand.module.css'

type BrandProps = {
  name: string
  size?: number
  className?: string
}

/** 品牌标识：圆环 + 中心点，颜色继承父级 currentColor。 */
export default function Brand({ name, size = 20, className = '' }: BrandProps) {
  return (
    <span className={`${styles.brand} ${className}`.trim()}>
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      </svg>
      <span className={styles.name}>{name}</span>
    </span>
  )
}
