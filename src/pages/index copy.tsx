import {Layout} from 'layouts/Layout'
import fetcher from 'lib/fetcher'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {Track} from 'models/Track'
import {GetStaticProps} from 'next'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'

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
  const {data}: {data?: Track} = useSWR('/api/now-playing', fetcher)
  const [url, setURL] = useState('')

  useEffect(() => {
    if (data?.isPlaying) setURL(data?.albumImageUrl)
  }, [data?.isPlaying, data?.albumImageUrl])

  return (
    <Layout bg={url}>
      {/* <div className="flex items-center space-x-5">
        <img
          className="w-16 h-16 rounded-full"
          src="assets/authors/lb2.jpeg"
          alt=""
        />
        <NowPlaying />
      </div> */}
      <div className="flex flex-col space-y-5 my-10 w-full xl:w-1/2">
        {/* <h1 className="font-semibold">
          Hey! Nice to meet you. I'm Lewis J.A Blackburn, a FullStack Web
          Developer from the UK.
        </h1> */}
        <div className="flex flex-col space-y-5 text-gray-500">
          {/* <p>
            People always ask me, Lewis? Yeah. A fun fact about me is that my
            favourite TV shows are the ones that tell you when to laugh! Apart
            from being a full-time comedian, I first developed my interest in
            web development through learning p5.js which has also lead to my
            love of open source projects as well. You can checkout mine on my
            Github below.
          </p> */}
          {/* <div className="flex space-x-5">
            <a className="button" href="https://github.com/lewisblackburn">
              <SiGithub />
            </a>
            <a className="button" href="https://instagram.com/lewis.svg">
              <SiInstagram />
            </a>
            <a className="button" href="https://www.linkedin.com/in/zxffo">
              <SiLinkedin />
            </a>
            <a className="button" href="https://twitter.com/zxffo">
              <SiTwitter />
            </a>
          </div> */}
        </div>
        {/* <div>
          <h1 className="font-semibold">Projects</h1>
          <div className="flex flex-col space-y-5 my-5">
            <Link href="">
              <a className="button" href="">
                typegraphql-prisma-apollo-react
              </a>
            </Link>
            <Link href="">
              <a className="button" href="">
                lewisb.cloud
              </a>
            </Link>

            <Link href="">
              <a className="button" href="">
                ilistened-to
              </a>
            </Link>
            <Link href="">
              <a className="button" href="">
                tweetah
              </a>
            </Link>
            <Link href="">
              <a className="button" href="">
                dotfiles
              </a>
            </Link>
          </div>
        </div> */}
        {/* <div>
          <h1 className="font-semibold">Articles</h1>
          <div className="flex flex-col space-y-5 my-5">
            {posts.map((post, index) => (
              <Link href={`article/${post.slug}`}>
                <a className="button" href="">
                  {post.title}
                </a>
              </Link>
            ))}
          </div>
        </div> */}
        {/* <Footer /> */}
      </div>
    </Layout>
  )
}

export default Index
