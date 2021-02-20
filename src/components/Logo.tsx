import Link from 'next/link'
import React from 'react'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link href="/">
      <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none">
        lb.
      </a>
    </Link>
  )
}

export default Logo
