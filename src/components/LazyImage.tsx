import React from 'react'
import Image from 'next/image'

export interface ImageProps {
  src: string
  alt: string
  size?: string
  className?: string
}

const LazyImage: React.FC<ImageProps> = ({
  src,
  alt,
  size = 'lg',
  className,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-center bg-cover shadow-xl ${
        size === 'lg' ? 'h-80' : 'h-64'
      } rounded-md sm:rounded-xl`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={className}
      />
    </div>
  )
}

export default LazyImage
