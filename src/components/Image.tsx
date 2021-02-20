import React from 'react'

export interface ImageProps {
  src: string
  alt: string
  loading?: 'lazy' | null
  className?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  loading = 'lazy',
  className,
}) => {
  return (
    <img
      src={src}
      className={`object-cover w-full bg-center rounded ${className}`}
      alt={alt}
      loading="lazy"
    />
  )
}

export default Image
