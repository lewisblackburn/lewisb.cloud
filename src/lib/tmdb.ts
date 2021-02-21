const {TMDB_API_KEY: key, TMDB_SESSION: session} = process.env

// const getRerfreshToken = async () => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/authentication/token/new?api_key=${TMDB_API_KEY}`,
//   )
//   return response.json()
// }

// approve it by https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}

// const getSession = async () => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/authentication/session/new?api_key=${TMDB_API_KEY}&request_token=${TMDB_REFRESH_TOKEN}`,
//   )
//   return response.json()
// }

export const getFavouriteMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/account/zxffo/favorite/movies?api_key=${key}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=${
      page || 1
    }`,
  )
  return response.json()
}
