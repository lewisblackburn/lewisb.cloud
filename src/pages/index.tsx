import {Footer} from 'components/Footer'
import {NowPlaying} from 'components/NowPlaying'
import {Layout} from 'layouts/Layout'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import React from 'react'

interface IndexProps {
  posts: MdxFrontMatter[]
}

// const Map = dynamic(() => import('../components/Map'), {
//   loading: () => <div className={'w-full h-full bg-gray-100'}></div>,
//   ssr: false,
// })

export const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <h1>
          <span className="font-bold text-4xl">zxffo</span>
          <span className="font-light text-gray-alpha ml-3">/zeˈffːo/</span>
        </h1>
        <div className="flex flex-col space-y-4 tracking-wide text-article-color">
          <p>
            Hi! Nice to meet you. I'm Lewis J.A Blackburn, A FullStack Web
            Developer from the UK.
          </p>
          <p>
            People always ask me, Lewis? Yeah. A fun fact about me is that my
            favourite TV shows are the ones that tell you when to laugh! Apart
            from being a full-time comedian, I first developed my interest in
            web development through learning p5.js which has also lead to my
            love of open source projects as well. Oh and press <b>super</b> +{' '}
            <b>k</b> for a nice surprise
          </p>
        </div>

        <NowPlaying />
      </div>
      <Footer />
    </Layout>
  )
}

export default Index
