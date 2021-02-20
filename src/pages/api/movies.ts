import {getFavouriteMovies} from 'lib/tmdb'
import {NextApiRequest, NextApiResponse} from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const page: number = parseInt(req.query.page[0]) || 1
  const response = await getFavouriteMovies(page)

  res.setHeader('Cache-Control', 'public, s-maxage=60 ')

  return res.status(200).json(response)
}
