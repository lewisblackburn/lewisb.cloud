import LazyImage, {ImageProps} from 'components/LazyImage'
import Link from 'next/link'
import React from 'react'

interface ArticleImageProps extends ImageProps {
  href: string
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  href = '/',
  src,
  alt,
  size,
  className,
}) => {
  return (
    <Link href={href}>
      <a className="transform-gpu hover:scale-105 transition">
        <LazyImage src={src} alt={alt} className={className} size={size} />
      </a>
    </Link>
  )
}

export default ArticleImage
