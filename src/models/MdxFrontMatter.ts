export interface MdxFrontMatter {
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
}
