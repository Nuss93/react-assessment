import React, { Component } from 'react'
import { Typography } from 'antd'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const { Title } = Typography
export default class Map extends Component {
  render() {
    return (
      <div>
        <Title>Map</Title>
        <GooglePlacesAutocomplete />
      </div>
    )
  }
}
