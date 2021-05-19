import fetcher from 'lib/fetcher'
import {Track} from 'models/Track'
import React from 'react'
import {SiSpotify} from 'react-icons/si'
import useSWR from 'swr'

interface NowPlayingProps {}

export const NowPlaying: React.FC<NowPlayingProps> = ({}) => {
  const {data}: {data?: Track} = useSWR('/api/now-playing', fetcher)

  return (
    <span className="flex items-center space-x-2">
      <SiSpotify className="text-spotify" />
      <span className="inline-flex items-center justify-center">
        {data?.isPlaying ? (
          <a
            className="font-medium text-black dark:text-gray-200 max-w-max"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p>Not Playing</p>
        )}
        <span className="mx-2 text-black dark:text-gray-300">{' – '}</span>
        <p className="max-w-max">
          {/* {data?.artist ?? 'Spotify'} */}
          {data?.isPlaying ? data?.artist : 'Spotify'}
        </p>
      </span>
    </span>
  )
}
