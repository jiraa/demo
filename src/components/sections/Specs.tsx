import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import styles from './Specs.module.css'

type Heading = { eyebrow?: string; title: string; description?: string }

export type SpecGroup = {
  title: string
  items: { label: string; value: string }[]
}

type SpecsProps = {
  heading: Heading
  groups: SpecGroup[]
  footnote: string
}

/** 技术规格：按分组渲染定义列表，分组数量由数据决定。 */
export default function Specs({ heading, groups, footnote }: SpecsProps) {
  return (
    <section id="specs" className={styles.section}>
      <Container>
        <Reveal className={styles.headingWrap}>
          <SectionHeading {...heading} />
        </Reveal>

        <div className={styles.grid}>
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className={styles.gridItem}>
              <div className={styles.group}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <dl className={styles.list}>
                  {group.items.map((item) => (
                    <div className={styles.row} key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className={styles.footnote}>{footnote}</p>
      </Container>
    </section>
  )
}
