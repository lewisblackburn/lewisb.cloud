import Articles from 'components/Articles'
import Button from 'components/Button'
import FAQ from 'components/FAQ'
import LazyImage from 'components/LazyImage'
import Notify from 'components/Notify'
import Projects from 'components/Projects'
import {Layout} from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticProps} from 'next'
import React, {Fragment} from 'react'
import {FiArrowRight} from 'react-icons/fi'

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

export const Index: React.FC<IndexProps> = ({posts}) => {
  return (
    <Fragment>
      <Notify />
      <Layout>
        <section className="px-2 py-24 md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">
                      Full-Stack <br />
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      Web Developer
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    Hi, I'm Lewis and I create Full-Stack Web Apps using
                    TypeScript, React and GraphQl.
                  </p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <Button textColor="text-white" bgColor="bg-indigo-500">
                      Latest Article
                      <FiArrowRight className="ml-1" />
                    </Button>
                    <Button>Currently Playing</Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <LazyImage
                  src="/assets/background.jpg"
                  alt="background image"
                />
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Articles posts={posts} />
        <FAQ />
      </Layout>
    </Fragment>
  )
}

export default Index
