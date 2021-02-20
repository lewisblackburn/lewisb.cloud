import Link from 'next/link'
import React from 'react'

const HeaderLink: React.FC<{href?: string}> = ({href = '/', children}) => {
  return (
    <Link href={href}>
      <a className="relative font-medium text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-600 leading-6 transition duration-150 ease-out">
        <span className="block">{children}</span>
        <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
          <span
            x-show="hover"
            className="absolute inset-0 inline-block w-full h-1 h-full bg-gray-900 transform"
            style={{display: 'none'}}
          />
        </span>
      </a>
    </Link>
  )
}
export default HeaderLink
