import Button from '../ui/Button'
import Container from '../ui/Container'
import DeviceMock from '../product/DeviceMock'
import styles from './Hero.module.css'

type LinkCta = { label: string; href: string }

type HeroProps = {
  badge?: string
  eyebrow?: string
  titleLines: string[]
  subtitle: string
  highlights: string[]
  primaryCta: LinkCta
  secondaryCta: LinkCta
  priceNote: string
}

/** 首屏：眉题 + 双行大标题 + 主次行动点 + 产品主视觉 + 关键卖点。 */
export default function Hero({
  badge,
  eyebrow,
  titleLines,
  subtitle,
  highlights,
  primaryCta,
  secondaryCta,
  priceNote,
}: HeroProps) {
  return (
    <section id="top" className={styles.hero}>
      <Container>
        <div className={styles.intro}>
          {eyebrow || badge ? (
            <div className={styles.eyebrowRow}>
              {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
              {badge ? <span className={styles.badge}>{badge}</span> : null}
            </div>
          ) : null}
          <h1 className={styles.title}>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="link" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
          <p className={styles.price}>{priceNote}</p>
        </div>

        <div className={styles.visual}>
          <div className={styles.halo} />
          <DeviceMock variant="hero" animated />
        </div>

        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
