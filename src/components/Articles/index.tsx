import {MdxFrontMatter} from 'models/MdxFrontMatter'
import React from 'react'
import Section from '../Section'
import ArticleItem from './components/ArticleItem'

interface ArticlesProps {
  posts: MdxFrontMatter[]
}

export const Articles: React.FC<ArticlesProps> = ({posts}) => {
  return (
    <Section id="articles">
      <div className="grid grid-cols-2 gap-8">
        {posts.map((post: MdxFrontMatter, index: number) => (
          <div key={index} className="transform-gpu hover:scale-105 transition">
            <ArticleItem post={post} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Articles
