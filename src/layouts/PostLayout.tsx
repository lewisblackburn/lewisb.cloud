import ArticleImage from 'components/Articles/components/ArticleImage'
import ArticleDate from 'components/Articles/components/ArticleItem/components/ArticleDate'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {ArticleJsonLd, NextSeo} from 'next-seo'
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
  } = frontMatter
  const url = `https://lewisb.cloud/article/${slug}`
  const image = {
    url: cover,
    alt: title,
  }

  console.log(readingTime)

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
        <div className={'article max-w-4xl mx-auto py-20 px-8 md:px-0'}>
          <div className={'flex flex-col text-center mb-10'}>
            <ArticleImage href="/" src={cover} alt={title} size="sm" />
            <h1 className={'font-semibold text-5xl'}>{title}</h1>
            <div className={'flex flex-col gap-3'}>
              <ArticleDate dateString={date} />
              <div>
                <a
                  style={{textDecoration: 'none'}}
                  className={'text-blue-500 font-semibold'}
                  href={`https://twitter.com/${author.twitter}`}
                  target="_blank"
                >
                  @{author.twitter}
                </a>
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
