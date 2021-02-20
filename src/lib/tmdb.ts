const TMDB_API_KEY = '50061f964870e6c96229606998cd942c'
const TMDB_REFRESH_TOKEN = 'b4831b12ac66d74d6e573d79cd525282a362b75c'
const TMDB_SESSION = '2420f893f42ce7ba6386e1b23b180d27fc759c5a'

const getRequestToken = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${TMDB_API_KEY}`,
  )
  return response.json()
}

// approve it by https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}

const getSession = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${TMDB_API_KEY}&request_token=${TMDB_REFRESH_TOKEN}`,
  )
  return response.json()
}

export const getFavouriteMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/account/zxffo/favorite/movies?api_key=${TMDB_API_KEY}&session_id=${TMDB_SESSION}&language=en-US&sort_by=created_at.asc&page=${
      page || 1
    }`,
  )
  return response.json()
}
