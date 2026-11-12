import DeviceMock from './DeviceMock'
import styles from './Visuals.module.css'

export type VisualKind = 'device' | 'chip' | 'camera' | 'battery'

type ProductVisualProps = {
  kind: VisualKind
  wallpaper?: [string, string]
}

function ChipVisual() {
  const pinPositions = Array.from({ length: 8 }, (_, index) => 34 + index * 30)

  return (
    <div className={styles.chipStage}>
      <div className={styles.chipGlow} />
      <svg className={styles.pins} viewBox="0 0 300 300" aria-hidden="true">
        {pinPositions.map((position) => (
          <g key={position} stroke="rgba(125, 175, 255, 0.7)" strokeWidth="6" strokeLinecap="round">
            <path d={`M${position} 26v18`} />
            <path d={`M${position} 274v-18`} />
            <path d={`M26 ${position}h18`} />
            <path d={`M274 ${position}h-18`} />
          </g>
        ))}
      </svg>
      <div className={styles.chipBody}>
        <div className={styles.chipGrid} />
        <div className={styles.chipCore}>
          <span className={styles.chipName}>A18</span>
          <span className={styles.chipSub}>BIONIC</span>
        </div>
      </div>
    </div>
  )
}

function CameraVisual() {
  return (
    <div className={styles.cameraStage}>
      <div className={styles.cameraGlow} />
      <div className={styles.cameraPlate}>
        <div className={styles.cameraModule}>
          <span className={`${styles.lens} ${styles.lensOne}`}>
            <span className={styles.lensGlass} />
          </span>
          <span className={`${styles.lens} ${styles.lensTwo}`}>
            <span className={styles.lensGlass} />
          </span>
          <span className={`${styles.lens} ${styles.lensThree}`}>
            <span className={styles.lensGlass} />
          </span>
          <span className={styles.flash} />
        </div>
        <span className={styles.plateLogo}>aura</span>
      </div>
    </div>
  )
}

function BatteryVisual() {
  return (
    <div className={styles.batteryStage}>
      <div className={styles.ring}>
        <div className={styles.ringInner}>
          <span className={styles.ringNumber}>27</span>
          <span className={styles.ringLabel}>小时视频播放</span>
        </div>
      </div>
    </div>
  )
}

/** 按 kind 分发的产品视觉组件，让 Showcase 只关心排版，不关心画面内容。 */
export default function ProductVisual({ kind, wallpaper }: ProductVisualProps) {
  switch (kind) {
    case 'device':
      return <DeviceMock wallpaper={wallpaper} variant="showcase" animated />
    case 'chip':
      return <ChipVisual />
    case 'camera':
      return <CameraVisual />
    case 'battery':
      return <BatteryVisual />
    default:
      return null
  }
}
