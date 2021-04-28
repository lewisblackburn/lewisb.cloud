import dayjs from 'dayjs'
import {Layout} from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticProps} from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, {Fragment} from 'react'

interface IndexProps {
  posts: MdxFrontMatter[]
}

// "https://www.figma.com/file/MNbvOwgE5ghxlHEFB9OzZ4/Untitled"

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const files: MdxFrontMatter[] = await getAllFilesFrontMatter('articles')
  const posts = files.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  )
  return {props: {posts}}
}

const Map = dynamic(() => import('../components/Map'), {
  loading: () => <div className={'w-full h-full bg-gray-100'}></div>,
  ssr: false,
})

export const Index: React.FC<IndexProps> = ({posts}) => {
  return (
    <Fragment>
      <Layout>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col space-y-5">
              <h1 className="font-mono font-bold tracking-normal text-4xl">
                I'm Lewis Blackburn.
              </h1>
              <p className="text-xl">
                Hi, I'm Lewis, A Full-Stack React, Typescript and GraphQL web
                developer focusing in backend development using PostgreSQL,
                Prisma and Node. This website is a collection of projects and
                things I've learnt over the years.
              </p>
            </div>

            <div>img later</div>
          </div>
        </div>
        <div>
          <div className="grid place-items-center max-w-6xl mx-auto px-6 py-12">
            {posts.map((post, number) => (
              <Link href={`/article/${post.slug}`}>
                <a
                  key={number}
                  className="button grid grid-cols-2 items-center w-full"
                  style={{gridTemplateColumns: '100px 1fr'}}
                >
                  <time>{dayjs(post.date).format('MMM D')}</time>
                  <span className="font-medium">{post.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="grid place-items-center max-w-6xl mx-auto px-6 py-12">
            {[0, 0, 0, 0].map((project: any, number) => (
              <Link href={``}>
                <a
                  key={number}
                  className="button grid grid-cols-2 items-center w-full"
                  style={{gridTemplateColumns: '100px 1fr'}}
                >
                  <span>title</span>
                  <span className="font-medium">description</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-white">
          <div className="grid place-items-center max-w-6xl mx-auto px-6 py-12 h-96">
            <Map />
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Index
