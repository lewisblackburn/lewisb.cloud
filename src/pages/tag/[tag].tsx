import dayjs from 'dayjs'
import Layout from 'layouts/Layout'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {MdxFrontMatter} from 'models/MdxFrontMatter'
import {GetStaticPaths, GetStaticProps} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'

interface TagProps {
  posts: MdxFrontMatter[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: MdxFrontMatter[] = await getAllFilesFrontMatter('articles')
  const tags = posts
    .map((post) => post.tags.map((tag) => tag))
    .join(',')
    .split(',')

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<TagProps> = async ({params}) => {
  const {tag} = params
  const files: MdxFrontMatter[] = await getAllFilesFrontMatter('articles')
  const posts = files
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post) => {
      if (post.tags.includes(tag)) {
        return post
      }
    })
  return {props: {posts}}
}

const Tag: React.FC<TagProps> = ({posts}) => {
  const router = useRouter()
  const {tag} = router.query

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="grid place-items-center max-w-6xl mx-auto px-6 py-12">
          <h1 className="w-full px-6 py-3 text-5xl font-mono font-medium">
            Posts tagged: {tag}
          </h1>
          <h2 className="w-full px-6 py-3 text-3xl font-mono font-mediu">
            {posts.length}
            <span className="ml-5">
              post{posts.length > 1 ? 's' : ''} found.
            </span>
          </h2>
          {posts.map((post, number) => (
            <Link href={`/article/${post.slug}`}>
              <a
                key={number}
                className="button grid grid-cols-2 items-center w-full"
                style={{gridTemplateColumns: '100px 1fr'}}
              >
                <time>{dayjs(post.date).format('MMM D')}</time>
                <span className="font-medium">{post.title}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tag
