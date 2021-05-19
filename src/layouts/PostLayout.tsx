import LazyImage from 'components/LazyImage'
import dayjs from 'dayjs'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {ArticleJsonLd, NextSeo} from 'next-seo'
import Link from 'next/link'
import React from 'react'
import {Toaster} from 'react-hot-toast'
import {Layout} from '../layouts/Layout'

interface PostLayoutProps {
  frontMatter: MdxFrontMatter
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  children,
  frontMatter,
}) => {
  const {
    title,
    description,
    date,
    cover,
    author,
    readingTime,
    slug,
    tags,
  } = frontMatter
  const url = `https://lewisb.cloud/article/${slug}`
  const image = {
    url: cover,
    alt: title,
  }

  console.log(tags, readingTime)

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <NextSeo
        title={`${title} – ${author.name}`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: description,
          images: [image],
        }}
      />
      <ArticleJsonLd
        authorName={author.name}
        dateModified={date}
        datePublished={date}
        description={description}
        images={[image.url]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={author.name}
        title={title}
        url={url}
      />
      <Layout>
        <div className={'article max-w-5xl mx-auto px-5 xl:p-0 xl:pb-10'}>
          <div className={'flex flex-col text-center'}>
            <LazyImage src={cover} alt={title} size="sm" />
            <h1 className={'font-semibold text-5xl'}>{title}</h1>
            <div className={'flex items-center flex-col gap-3'}>
              <p className="flex space-x-1">
                by
                <a
                  className="font-mono font-medium mx-2"
                  href={`https://twitter.com/${author.twitter}`}
                  target="_blank"
                >
                  {author.name}
                </a>
                on
                <time className="font-mono">
                  {dayjs(date).format('MMMM DD, YYYY')}
                </time>
              </p>
              <div className="flex space-x-4">
                {tags.map((tag, index) => (
                  <Link href={`/tag/${tag}`}>
                    <a className="button bg-gray-50" key={index}>
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {children}
        </div>
      </Layout>
    </div>
  )
}

export default PostLayout
