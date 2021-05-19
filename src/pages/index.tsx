import {NowPlaying} from 'components/NowPlaying'
import {Layout} from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import React from 'react'

interface IndexProps {
  posts: MdxFrontMatter[]
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const files: MdxFrontMatter[] = await getAllFilesFrontMatter('articles')
  const posts = files.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  )
  return {props: {posts}}
}

// const Map = dynamic(() => import('../components/Map'), {
//   loading: () => <div className={'w-full h-full bg-gray-100'}></div>,
//   ssr: false,
// })

export const Index: React.FC<IndexProps> = ({posts}) => {
  return (
    <Layout>
      <div className="flex items-center space-x-2">
        <img
          className="w-16 h-16 rounded-full"
          src="https://pbs.twimg.com/profile_images/1388587656246878217/LzMeoefq_400x400.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-5 my-10 w-96">
        <h1 className="font-semibold">
          Hey! Nice to meet you. I'm Lewis J.A Blackburn, a FullStack Web
          Developer from the UK.
        </h1>
        <div className="flex flex-col space-y-5 text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
            nesciunt autem ipsum animi sapiente! Et neque ut libero, autem nisi
            distinctio eveniet aperiam repudiandae error, incidunt temporibus,
            eius quasi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quis placeat magnam voluptates maiores, delectus inventore corrupti
            itaque quos. Officia similique temporibus quia voluptatibus
            necessitatibus repellendus quos omnis incidunt reiciendis?
          </p>
          <div className="flex space-x-5">
            <a href="">Twitter</a>
            <a href="">Discord</a>
            <a href="">Github</a>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Projects</h1>
          <div className="flex flex-col space-y-5 my-5">
            <Link href="">
              <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                typegraphql-prisma-apollo-react
              </a>
            </Link>
            <Link href="">
              <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                lewisb.cloud
              </a>
            </Link>

            <Link href="">
              <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                ilistened-to
              </a>
            </Link>
            <Link href="">
              <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                tweetah
              </a>
            </Link>
            <Link href="">
              <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                dotfiles
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Articles</h1>
          <div className="flex flex-col space-y-5 my-5">
            {posts.map((post, index) => (
              <Link href={`article/${post.slug}`}>
                <a className="px-5 py-2 bg-gray-900 rounded-md" href="">
                  {post.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <NowPlaying />
      </div>
    </Layout>
  )
}

export default Index
