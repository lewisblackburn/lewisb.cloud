import ContactForm from 'components/ContactForm'
import Timeline from 'components/Timeline'
import Layout from 'layouts/Layout'
import React from 'react'

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = ({}) => {
  return (
    <Layout>
      <ContactForm />
      <section className="pb-24">
        <div className="px-8 mx-auto sm:px-8 max-w-7xl">
          <div className="container flex flex-wrap mx-auto sm:flex-nowrap">
            <div className="relative flex items-end justify-start hidden px-10 overflow-hidden rounded-lg lg:w-2/3 md:w-1/2 sm:mr-0 md:block">
              <img
                src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d"
                alt="roadmap"
                className="w-full h-full bg-gray-100 bg-center bg-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
              <Timeline />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Resume
