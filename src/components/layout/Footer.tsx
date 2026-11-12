import Container from '../ui/Container'
import Brand from './Brand'
import styles from './Footer.module.css'

type FooterColumn = { title: string; links: string[] }

type FooterProps = {
  brand: string
  note: string
  columns: FooterColumn[]
  bottomLinks: string[]
  legal: string
}

/** 苹果风格的多列页脚：免责说明 + 链接组 + 法律信息。 */
export default function Footer({ brand, note, columns, bottomLinks, legal }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.note}>{note}</p>

        <div className={styles.columns}>
          {columns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Brand name={brand} size={16} className={styles.brandMark} />
            <span>{legal}</span>
          </div>
          <ul className={styles.bottomLinks}>
            {bottomLinks.map((link) => (
              <li key={link}>
                <a href="#top">{link}</a>
              </li>
            ))}
          </ul>
          <span className={styles.region}>中国大陆</span>
        </div>
      </Container>
    </footer>
  )
}
