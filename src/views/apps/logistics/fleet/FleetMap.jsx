// React Imports
import { useEffect, useRef } from 'react'

// Third-party Imports
import 'mapbox-gl/dist/mapbox-gl.css'
import { Map, Marker } from 'react-map-gl'

// Style Imports
import './styles.css'

const FleetMap = props => {
  // Vars
  const { carIndex, viewState, geojson } = props

  // Hooks
  const mapRef = useRef()

  useEffect(() => {
    mapRef.current?.flyTo({ center: [viewState.longitude, viewState.latitude], zoom: 16 })
  }, [viewState])

  return (
    <div className='is-full bs-full'>
      <Map
        mapboxAccessToken='pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ'
        // eslint-disable-next-line lines-around-comment
        // @ts-ignore
        ref={mapRef}
        initialViewState={{ longitude: -73.999024, latitude: 40.75249842, zoom: 12.5 }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        attributionControl={false}
      >
        {geojson.features.map((item, index) => {
          return (
            <Marker
              key={index}
              longitude={item.geometry.longitude}
              latitude={item.geometry.latitude}
              style={{ display: 'flex' }}
            >
              <img
                src='/images/apps/logistics/fleet-car.png'
                height={42}
                width={20}
                {...(index === carIndex && {
                  style: { filter: 'drop-shadow(0 0 7px var(--mui-palette-primary-main))' }
                })}
              />
            </Marker>
          )
        })}
      </Map>
    </div>
  )
}

export default FleetMap
