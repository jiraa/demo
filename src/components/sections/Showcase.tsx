import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ProductVisual, { type VisualKind } from '../product/Visuals'
import styles from './Showcase.module.css'

type LinkCta = { label: string; href: string }

export type ShowcaseProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  cta?: LinkCta
  visual: VisualKind
  theme: 'light' | 'dark' | 'tint'
  reverse?: boolean
  wallpaper?: [string, string]
}

/** 通用左右分栏展示区：同一组件通过 props 复用于多个章节与不同主题。 */
export default function Showcase({
  id,
  eyebrow,
  title,
  description,
  bullets,
  cta,
  visual,
  theme,
  reverse = false,
  wallpaper,
}: ShowcaseProps) {
  const inverted = theme === 'dark'

  return (
    <section
      id={id}
      className={[styles.section, styles[theme], reverse ? styles.reverse : ''].filter(Boolean).join(' ')}
    >
      <Container size="wide">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <Reveal>
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
                align="left"
                tone={inverted ? 'inverted' : 'default'}
              />
            </Reveal>

            {bullets.length > 0 ? (
              <Reveal delay={100}>
                <ul className={styles.bullets}>
                  {bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {cta ? (
              <Reveal delay={160}>
                <Button href={cta.href} variant={inverted ? 'linkLight' : 'link'}>
                  {cta.label}
                </Button>
              </Reveal>
            ) : null}
          </div>

          <div className={styles.visual}>
            <Reveal delay={80}>
              <ProductVisual kind={visual} wallpaper={wallpaper} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
