import {NowPlaying} from 'components/NowPlaying'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useLanyard} from 'use-lanyard'

interface ActivityProps {}

export const Activity: React.FC<ActivityProps> = ({}) => {
  const discordID = '151964477842128897'
  const {data: lanyard, mutate, isValidating} = useLanyard(discordID)
  const activity = lanyard?.activities[0]

  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 15000) // update every 15 seconds
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!isValidating) mutate()
  }, [time])

  return (
    <div className="grid place-items-center w-full">
      {!lanyard?.activities || !lanyard.spotify ? (
        <NowPlaying />
      ) : (
        <Link href={activity?.party?.id || ''}>
          <a className="flex w-full sm:w-1/2 items-center space-x-4 glass rounded-lg border border-gray-200 shadow p-4">
            {lanyard?.listening_to_spotify ? (
              <div className="flex items-center space-x-4">
                <img
                  src={lanyard?.spotify?.album_art_url}
                  alt={activity?.assets?.large_text}
                  className="h-24 rounded-md"
                />
                <div className="flex flex-col">
                  <span>Listening to {lanyard.spotify?.song}</span>
                  <span>By {lanyard.spotify?.artist.replace(';', ',')}</span>
                  <span>{lanyard.spotify?.album}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src={`https://cdn.discordapp.com/app-assets/${BigInt(
                    activity?.application_id || 0,
                  ).toString()}/${activity?.assets?.large_image}.png`}
                  alt={activity?.assets?.large_text}
                  className="h-24 rounded-md"
                />
                <div className="flex flex-col">
                  <span>Playing {lanyard?.activities[0]?.name}</span>
                  <span>{lanyard?.activities[0]?.details}</span>
                  <span>{lanyard?.activities[0]?.state}</span>
                </div>
              </div>
            )}
          </a>
        </Link>
      )}
    </div>
  )
}
