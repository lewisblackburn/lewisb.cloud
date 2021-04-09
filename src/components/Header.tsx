import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'

interface HeaderProps {}

const HeaderLink: React.FC<{
  href: string
  icon?: string
  className?: string
  external?: boolean
}> = ({href, icon, className, external = false, children}) => {
  return (
    <Link href={href}>
      <a
        target={`${external ? '_blank' : ''}`}
        className={`button ${className}`}
      >
        {icon && <span className="mr-4">{icon}</span>}
        {children}
      </a>
    </Link>
  )
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-center md:justify-between items-center">
      <HeaderLink href="/" icon="💾" className="font-mono">
        Lewis Blackburn
      </HeaderLink>
      <div className="hidden md:flex items-center">
        <HeaderLink href="https://twitter.com/zxffo" external>
          Twitter
        </HeaderLink>
        <HeaderLink href="https://github.com/lewisblackburn" external>
          Github
        </HeaderLink>
        <HeaderLink href="/404">404</HeaderLink>
        <DarkModeToggle />
      </div>
    </header>
  )
}
