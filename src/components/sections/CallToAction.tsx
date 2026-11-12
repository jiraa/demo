import Button from '../ui/Button'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import styles from './CallToAction.module.css'

type LinkCta = { label: string; href: string }

type CallToActionProps = {
  eyebrow: string
  title: string
  description: string
  price: string
  primaryCta: LinkCta
  secondaryCta: LinkCta
  footnote: string
}

/** 底部购买转化区：深色背景 + 主次两个行动点。 */
export default function CallToAction({
  eyebrow,
  title,
  description,
  price,
  primaryCta,
  secondaryCta,
  footnote,
}: CallToActionProps) {
  return (
    <section id="buy" className={styles.section}>
      <div className={styles.glow} />
      <Container size="narrow">
        <Reveal>
          <div className={styles.inner}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price}</p>
            <div className={styles.actions}>
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
            <p className={styles.footnote}>{footnote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
