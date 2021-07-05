import Layout from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticProps} from 'next'
import Link from 'next/link'
import React from 'react'

interface BlogProps {
  posts: MdxFrontMatter[]
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files: MdxFrontMatter[] = await getAllFilesFrontMatter('articles')
  const posts = files.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  )
  return {props: {posts}}
}

export const Blog: React.FC<BlogProps> = ({posts}) => {
  return (
    <Layout>
      <div>
        {posts.map((post, index) => (
          <Link href={`blog/${post.slug}`}>
            <a
              className="grid gap-4 border-t border-b border-lighter-gray p-4"
              key={index}
            >
              <span className="w-48">{post.date}</span>
              <div className="flex flex-col space-y-1">
                <span>{post.title}</span>
                <span className="text-gray-alpha">{post.description}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
