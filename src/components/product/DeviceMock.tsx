import type { CSSProperties } from 'react'
import styles from './DeviceMock.module.css'

type DeviceMockProps = {
  wallpaper?: [string, string]
  variant?: 'hero' | 'showcase' | 'compact'
  animated?: boolean
  className?: string
}

/** 纯 CSS 绘制的设备模型，壁纸颜色可通过 props 切换，不依赖任何图片资源。 */
export default function DeviceMock({
  wallpaper = ['#4d6ba8', '#0a1020'],
  variant = 'hero',
  animated = false,
  className = '',
}: DeviceMockProps) {
  const customProperties = {
    '--wall-from': wallpaper[0],
    '--wall-to': wallpaper[1],
  } as CSSProperties

  return (
    <div
      className={[
        styles.root,
        styles[variant],
        animated ? styles.animated : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={customProperties}
      aria-hidden="true"
    >
      <div className={styles.frame}>
        <span className={`${styles.sideButton} ${styles.sideButtonTop}`} />
        <span className={`${styles.sideButton} ${styles.sideButtonBottom}`} />
        <span className={`${styles.sideButton} ${styles.sideButtonRight}`} />
        <div className={styles.screen}>
          <div className={styles.wallpaper} />
          <div className={styles.glow} />
          <div className={styles.island} />
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="4.5" y="6" width="3" height="6" rx="1" />
                <rect x="9" y="3.5" width="3" height="8.5" rx="1" />
                <rect x="13.5" y="1" width="3" height="11" rx="1" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M1.2 4.2a9.5 9.5 0 0 1 13.6 0M3.6 6.7a6 6 0 0 1 8.8 0M6.2 9.2a2.4 2.4 0 0 1 3.6 0" />
                <circle cx="8" cy="11" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                <rect x="0.6" y="0.6" width="20" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" />
                <rect x="2.2" y="2.2" width="15" height="7.6" rx="1.8" fill="currentColor" />
                <path d="M22.2 4.2v3.6a2 2 0 0 0 0-3.6Z" fill="currentColor" fillOpacity="0.6" />
              </svg>
            </span>
          </div>
          <div className={styles.lockScreen}>
            <div className={styles.lockTime}>9:41</div>
            <div className={styles.lockDate}>11月12日 星期四</div>
          </div>
          <div className={styles.quickActions}>
            <span className={styles.quickAction}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 9.6 8.4H3l5.3 4-2 6.6L12 15l5.7 4-2-6.6 5.3-4h-6.6L12 2Z" />
              </svg>
            </span>
            <span className={styles.quickAction}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="6" width="18" height="14" rx="3" />
                <circle cx="12" cy="13" r="3.2" />
                <path d="M8 6l1.2-2h5.6L16 6" />
              </svg>
            </span>
          </div>
          <div className={styles.homeBar} />
        </div>
        <div className={styles.reflection} />
      </div>
    </div>
  )
}
