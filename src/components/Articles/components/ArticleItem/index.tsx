import {MdxFrontMatter} from 'models/MdxFrontMatter'
import Link from 'next/link'
import React from 'react'
import Image from '../../../Image'
import ArticleDate from './components/ArticleDate'

interface ArticleItemProps {
  post: MdxFrontMatter
}

export const ArticleItem: React.FC<ArticleItemProps> = ({post}) => {
  return (
    <Link href={`/article/${post.slug}`}>
      <a className="transition">
        <div>
          <Image
            src={post.cover}
            alt={post.title}
            className="h-56 rounded-lg"
          />
          <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {post.title}
          </h2>
          <p className="mb-3 text-sm font-normal text-gray-500 truncate">
            {post.description}
          </p>
          <p className="mb-3 text-sm font-normal text-gray-500">
            <span className="mr-1 font-medium text-gray-900 dark:text-gray-100">
              {post.author.name}
            </span>
            • <ArticleDate dateString={post.date} />
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ArticleItem
