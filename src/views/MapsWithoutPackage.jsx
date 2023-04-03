import React, { Component } from 'react'
import { Typography } from 'antd'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import GoogleMapReact from 'google-map-react';

const { Title } = Typography

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Map() {
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };

    return (
      <div>
        <Title>Map without using react packages</Title>

      </div>
    )
}
