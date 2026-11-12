import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import FeatureCard, { type FeatureCardProps } from './FeatureCard'
import styles from './FeatureGrid.module.css'

type Heading = { eyebrow?: string; title: string; description?: string }

type FeatureGridProps = {
  heading: Heading
  features: FeatureCardProps[]
}

/** 亮点网格：由若干 FeatureCard 组合而成，数量由数据决定。 */
export default function FeatureGrid({ heading, features }: FeatureGridProps) {
  return (
    <section id="highlights" className={styles.section}>
      <Container>
        <Reveal className={styles.headingWrap}>
          <SectionHeading {...heading} />
        </Reveal>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70} className={styles.gridItem}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
