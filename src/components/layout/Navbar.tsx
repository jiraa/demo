import { useState } from 'react'
import Brand from './Brand'
import Icon from '../ui/Icon'
import styles from './Navbar.module.css'

type NavItem = { label: string; href: string }

type NavbarProps = {
  brand: string
  items: NavItem[]
  cta: NavItem
}

/** 毛玻璃顶部导航，桌面端平铺链接，移动端折叠为菜单。 */
export default function Navbar({ brand, items, cta }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brandLink} aria-label={`${brand} 首页`} onClick={() => setMenuOpen(false)}>
          <Brand name={brand} size={19} />
        </a>

        <nav className={styles.desktopNav} aria-label="主导航">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={cta.href} className={styles.buy}>
            {cta.label}
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="移动端导航">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={cta.href} className={styles.mobileBuy} onClick={() => setMenuOpen(false)}>
            {cta.label}
          </a>
        </nav>
      ) : null}
    </header>
  )
}
