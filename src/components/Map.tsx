import publicRuntimeConfig from 'lib/publicRuntimeConfig'
import {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

export default function Map() {
  const [viewport, setViewport]: any = useState({
    latitude: 53.6757741,
    longitude: -1.5452498,
    zoom: 10,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={publicRuntimeConfig.mapbox}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      width="100%"
      height="100%"
      className="rounded-lg"
    >
      <Marker latitude={53.6923503} longitude={-1.48776198}>
        <img
          src="/assets/dot.svg"
          className={'w-6 h-6'}
          alt="marker"
          draggable="false"
        />
      </Marker>
    </ReactMapGL>
  )
}
