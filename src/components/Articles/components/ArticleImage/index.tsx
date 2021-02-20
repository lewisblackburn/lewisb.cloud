import Link from 'next/link'
import React from 'react'
import Image, {ImageProps} from '../../../Image'

interface ArticleImageProps extends ImageProps {
  href: string
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  href = '/',
  src,
  alt,
  loading,
  className,
}) => {
  return (
    <Link href={href}>
      <a className="transform-gpu hover:scale-105 transition">
        <Image src={src} alt={alt} loading={loading} className={className} />
      </a>
    </Link>
  )
}

export default ArticleImage
