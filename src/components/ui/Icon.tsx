import type { ReactNode } from 'react'

export type IconName =
  | 'sparkles'
  | 'display'
  | 'chip'
  | 'camera'
  | 'battery'
  | 'lock'
  | 'sun'
  | 'drop'
  | 'check'
  | 'chevronRight'
  | 'chevronDown'
  | 'arrowRight'
  | 'play'
  | 'bag'
  | 'menu'
  | 'close'

const shapes: Record<IconName, ReactNode> = {
  sparkles: (
    <>
      <path d="M11 3.5l1.7 4.6L17.3 9.8l-4.6 1.7L11 16.1l-1.7-4.6L4.7 9.8l4.6-1.7L11 3.5Z" />
      <path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  display: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2.2" />
      <path d="M9 20h6M12 17v3" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  camera: (
    <>
      <path d="M2.8 8.6A2.6 2.6 0 0 1 5.4 6h2.1l1.2-2h6.6l1.2 2h2.1a2.6 2.6 0 0 1 2.6 2.6v8.8a2.6 2.6 0 0 1-2.6 2.6H5.4a2.6 2.6 0 0 1-2.6-2.6V8.6Z" />
      <circle cx="12" cy="13" r="3.6" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="17" height="10" rx="2.6" />
      <path d="M22 10.5v3M11.5 9.5l-3 4h3l-1 2.5 4-4.5h-3l1-2" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="11" rx="2.6" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.4" r="1.1" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
    </>
  ),
  drop: <path d="M12 2.8s6.4 6.7 6.4 10.9a6.4 6.4 0 0 1-12.8 0C5.6 9.5 12 2.8 12 2.8Z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
  arrowRight: <path d="M3.5 12h16M13 5.5l6.5 6.5-6.5 6.5" />,
  play: <path d="M8 5.2v13.6L19 12 8 5.2Z" />,
  bag: (
    <>
      <path d="M4 8h16l-1.1 12H5.1L4 8Z" />
      <path d="M9 8V6.2a3 3 0 0 1 6 0V8" />
    </>
  ),
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
}

type IconProps = {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
  title?: string
}

/** 统一的线性图标集，风格接近 SF Symbols。 */
export default function Icon({ name, size = 24, strokeWidth = 1.6, className, title }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {shapes[name]}
    </svg>
  )
}
