import type { CSSProperties } from 'react'
import Icon, { type IconName } from '../ui/Icon'
import styles from './FeatureCard.module.css'

export type FeatureCardProps = {
  icon: IconName
  title: string
  description: string
  tint: string
}

/** 单个亮点卡片，底色由外部数据传入，可复用在任何网格中。 */
export default function FeatureCard({ icon, title, description, tint }: FeatureCardProps) {
  return (
    <article className={styles.card} style={{ '--card-tint': tint } as CSSProperties}>
      <div className={styles.iconWrap}>
        <Icon name={icon} size={30} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
