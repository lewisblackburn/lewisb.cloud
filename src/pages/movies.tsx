import Layout from 'layouts/Layout'
import fetcher from 'lib/fetcher'
import React, {useState} from 'react'
import useSWR from 'swr'

interface MoviesProps {}

export const Movies: React.FC<MoviesProps> = () => {
  const [page, setPage] = useState(1)
  const {data}: {data?: any} = useSWR(`/api/movies?page=${page}`, fetcher)

  const previousPage = () => (page != 1 ? setPage(page - 1) : setPage(1))
  const nextPage = () =>
    page != data.total_pages ? setPage(page + 1) : setPage(data.total_pages)

  if (!data)
    return (
      <Layout>
        <section className="py-24">
          <div className="mx-auto sm:px-8 max-w-7xl">loading</div>
        </section>
      </Layout>
    )
  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto sm:px-8 max-w-7xl">
          <div className="grid grid-cols-4 gap-10">
            {data.results.map((movie: any, index: number) => (
              <div key={index}>
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <ul className="flex justify-center pt-10">
            <li className="px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg">
              <a
                onClick={previousPage}
                className="flex items-center font-bold"
                href="#"
              >
                <span className="mx-1">previous</span>
              </a>
            </li>
            {[...Array(data.total_pages)].map((e, i) => (
              <li
                key={i}
                className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200"
              >
                <a
                  onClick={() => setPage(i + 1)}
                  className="font-bold"
                  href="#"
                >
                  {i + 1}
                </a>
              </li>
            ))}
            <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200">
              <a
                onClick={nextPage}
                className="flex items-center font-bold"
                href="#"
              >
                <span className="mx-1">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Movies
