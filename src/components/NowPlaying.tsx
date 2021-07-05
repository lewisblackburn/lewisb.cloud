import fetcher from 'lib/fetcher'
import {Track} from 'models/Track'
import React from 'react'
import useSWR from 'swr'

interface NowPlayingProps {}

export const NowPlaying: React.FC<NowPlayingProps> = ({}) => {
  const {data}: {data?: Track} = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 10000, // ten seconds,
  })

  return (
    <a
      href={data?.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center shadow rounded-md"
    >
      <img
        className="rounded-md w-24 h-24"
        src={data?.albumImageUrl || 'assets/authors/lb2.jpeg'}
        alt={data?.songUrl}
      />
      <div className="flex flex-col ml-4">
        <span>Listening to {data?.title || 'nothing'}</span>
        <span>on {data?.album || 'nothing'}</span>
        <span>by {data?.artist || 'no one'}</span>
      </div>
    </a>
  )
}
