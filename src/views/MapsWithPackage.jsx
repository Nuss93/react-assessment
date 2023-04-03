import React, { Component, useState } from 'react'
import { Card, Typography } from 'antd'
import GooglePlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import GoogleMapReact from 'google-map-react';

const { Title } = Typography

const MarkerComponent = () => <div className='marker'/>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 3.147498156081217,
      lng: 101.69893436191211
    },
    zoom: 17
  };

  const [center, setCenter] = useState(defaultProps.center)

  const mapSelected = (e) => {
    let place_id = e.value.place_id
    console.log(e);

    geocodeByPlaceId(place_id)
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) => {
      let newCenter = { lat, lng }
      console.log('success', newCenter)
      setCenter(newCenter)
    })
    .catch(error => console.error('error', error))
  }

  return (
    <div>
      <Card title='Maps' style={{zIndex:10, position: 'relative'}} headStyle={{fontSize:'3rem'}}>
        {/* Autocomplete text input package */}
        <GooglePlacesAutocomplete
          selectProps={{ onChange: mapSelected }}
        />
      </Card>

      {/* Google-maps-react package */}
      <div style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, zIndex:1 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACDDkHRiG4K-SJSw6RYdC-Ai0l_qid7Mw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={center}
          options={{
            scrollwheel: false, gestureHandling: 'none', disableDefaultUI: true,
          }}
        >
          <MarkerComponent 
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}