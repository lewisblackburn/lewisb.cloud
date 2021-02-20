declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element
  export default MDXComponent

  export interface FrontMatter {
    layout?: string
    title: string
    description: string
    date: string
    cover: string
    author: {
      name: string
      twitter: string
      avatar: string
    }
    readingTime: {
      text: string
      time: number
      words: number
      minutes: number
    }
    slug: string | null
    __resourcePath: string
  }

  export const frontMatter: FrontMatter[]
}
