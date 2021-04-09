import LazyImage from 'components/LazyImage'
import Layout from 'layouts/Layout'
import React from 'react'

interface FourOhFourProps {}

export const FourOhFour: React.FC<FourOhFourProps> = ({}) => {
  return (
    <Layout>
      <section className="container px-4 mx-auto">
        <div className="py-24">
          <div className="items-center w-full h-full mx-auto grid grid-cols-1 gap-10 md:w-4/5 lg:grid-cols-2 xl:gap-32">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-200 uppercase">
                Error 404
              </p>
              <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 dark:text-gray-100 md:text-4xl">
                Oops! The page you're looking for isn't here.
              </h1>
              <p className="mb-5 text-base text-left text-gray-800 dark:text-gray-200 md:text-xl">
                You might have the wrong address, or the page may have moved.
              </p>
              <div className="flex space-x-5"></div>
            </div>
            <div>
              <LazyImage src="/assets/404.gif" alt="test" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FourOhFour
