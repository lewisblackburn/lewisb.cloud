import MDXComponents from 'components/MDXComponents/MDXComponents'
import {PostLayout} from 'layouts/PostLayout'
import {getFileBySlug, getFiles} from 'lib/mdx'
import {MdxFile} from 'models/MdxFile'
import {GetStaticPaths, GetStaticProps} from 'next'
import hydrate from 'next-mdx-remote/hydrate'

interface ArticleProps extends MdxFile {}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('articles')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const file: MdxFile = await getFileBySlug('articles', params?.slug as string)

  return {props: file}
}

const Article: React.FC<ArticleProps> = ({mdxSource, frontMatter}) => {
  const content = hydrate(mdxSource, {components: MDXComponents})

  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>
}

export default Article
