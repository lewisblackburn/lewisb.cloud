import {NowPlaying} from 'components/NowPlaying'
import {Layout} from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import React, {ReactNode} from 'react'
import {IconType} from 'react-icons/lib'
import {
  SiBabel,
  SiCss3,
  SiDiscord,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiInstagram,
  SiLinkedin,
  SiMarkdown,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiServerless,
  SiSlack,
  SiSpotify,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiVisualstudiocode,
  SiWebpack,
  SiYarn,
} from 'react-icons/si'
import {Tooltip} from 'react-tippy'

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
      <div className="flex items-center space-x-5">
        <img
          className="w-16 h-16 rounded-full"
          src="assets/authors/lb2.jpeg"
          alt=""
        />
        <NowPlaying />
      </div>
      <div className="flex flex-col space-y-5 my-10 w-full xl:w-1/2">
        <h1 className="font-semibold">
          Hey! Nice to meet you. I'm Lewis J.A Blackburn, a FullStack Web
          Developer from the UK.
        </h1>
        <div className="flex flex-col space-y-5 text-gray-500">
          <p>
            People always ask me, Lewis? Yeah. A fun fact about me is that my
            favourtie TV shows are the ones that tell you when to laugh! Apart
            from being a full-time comedian, I first developed my ineterest in
            web development through learning p5.js which has also lead to my
            love of open source projects as well. You can checkout mine on my
            Github below.
          </p>
          <div className="flex space-x-5">
            <a className="button" href="https://github.com/lewisblackburn">
              <SiGithub />
            </a>
            <a className="button" href="https://instagram.com/lewis.svg">
              <SiInstagram />
            </a>
            <a className="button" href="/">
              <SiLinkedin />
            </a>
            <a className="button" href="https://twitter.com/zxffo">
              <SiTwitter />
            </a>
          </div>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <footer>
          <Icons>
            <Icon icon={SiTypescript} title="TypeScript" />
            <Icon icon={SiReact} title="React.js" />
            <Icon icon={SiRedis} title="Redis" />
            <Icon icon={SiNodeDotJs} title="Node.js" />
            <Icon icon={SiNextDotJs} title="Next.js" />
            <Icon icon={SiPostgresql} title="PostgreSQL" />
            <Icon icon={SiDocker} title="Docker" />
            <Icon icon={SiWebpack} title="Webpack" />
            <Icon icon={SiBabel} title="Babel" />
            <Icon icon={SiYarn} title="Yarn" />
            <Icon icon={SiCss3} title="CSS3" />
            <Icon icon={SiHtml5} title="HTML5" />
            <Icon icon={SiSpotify} title="Spotify" />
            <Icon icon={SiTailwindcss} title="TailwindCSS" />
            <Icon icon={SiServerless} title="Serverless" />
            <Icon icon={SiGit} title="Git" />
            <Icon icon={SiGithub} title="GitHub" />
            <Icon icon={SiSlack} title="Slack" />
            <Icon icon={SiDiscord} title="Discord" />
            <Icon icon={SiMarkdown} title="Markdown" />
            <Icon icon={SiVisualstudiocode} title="VSCode" />
          </Icons>
        </footer>
      </div>
    </Layout>
  )
}
function Icons({children}: {children: ReactNode}) {
  return (
    <div className="hidden lg:flex ml-1 space-x-5 text-gray-500">
      {children}
    </div>
  )
}

function Icon({icon, title}: {icon: IconType; title: string}) {
  return (
    <Tooltip html={<div className="text-black dark:text-white">{title}</div>}>
      {icon({className: 'inline'})}
    </Tooltip>
  )
}

export default Index
