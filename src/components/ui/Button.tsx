import type { MouseEventHandler, ReactNode } from 'react'
import Icon, { type IconName } from './Icon'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outline' | 'link' | 'linkLight'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  trailingIcon?: IconName
  className?: string
  ariaLabel?: string
}

/** 按钮 / 文字链接统一出口：传 href 渲染链接，否则渲染按钮。 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  trailingIcon,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const iconName = trailingIcon ?? (variant === 'link' || variant === 'linkLight' ? 'chevronRight' : undefined)
  const classes = [
    styles.button,
    styles[variant],
    size === 'lg' ? styles.lg : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {iconName ? <Icon name={iconName} size={16} className={styles.icon} /> : null}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
