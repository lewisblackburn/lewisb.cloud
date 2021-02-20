import React from 'react'
import Logo from '../Logo'
import DarkModeToggle from './components/DarkModeToggle'
import HeaderLink from './components/HeaderLink'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="relative w-full body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between px-8 py-5 mx-auto md:flex-row max-w-7xl">
        <Logo />
        <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 text-base space-x-2 sm:space-x-5 md:py-0 md:absolute">
          <HeaderLink>Home</HeaderLink>
          <HeaderLink href="/#projects">Projects</HeaderLink>
          <HeaderLink href="/#articles">Articles</HeaderLink>
          <HeaderLink href="/404">Movies</HeaderLink>
          <HeaderLink href="/#faq">FAQ</HeaderLink>
          <HeaderLink href="/resume">Resume</HeaderLink>
        </nav>
        <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
