import React from 'react'

interface ExternalLinkProps {
  href: string
  className?: string
  sr?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
  sr,
}) => (
  <a
    className={`text-sm text-gray-400 dark:text-white transition ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <span className="sr-only">{sr}</span>
    {children}
  </a>
)

export default ExternalLink
