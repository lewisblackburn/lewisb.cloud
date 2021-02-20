import Button, {ButtonProps} from 'components/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  textColor,
  bgColor,
  className,
  children,
}) => {
  return (
    <Link href={href}>
      <a>
        <Button textColor={textColor} bgColor={bgColor} className={className}>
          {children}
        </Button>
      </a>
    </Link>
  )
}

export default ButtonLink
