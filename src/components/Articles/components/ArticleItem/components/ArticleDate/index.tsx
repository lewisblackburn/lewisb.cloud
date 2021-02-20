import {format, parseISO} from 'date-fns'
import React from 'react'

interface ArticleDateProps {
  dateString: string
}

const ArticleDate: React.FC<ArticleDateProps> = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}

export default ArticleDate
