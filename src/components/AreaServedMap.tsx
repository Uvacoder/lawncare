import React, { Component } from 'react'
import { Map, Circle, Popup, TileLayer } from 'react-leaflet'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



export class AreaServedMap extends Component {
    render() {
      const { options } = this.props
      const position = [51.9806, -1.32055]
      if (typeof window !== 'undefined') {
        return (
          <Map style={{ 
            height: theme.leafletContainer.height, 
            width: "100%",
            zIndex: 2,
            }} 
            {...options} 
            center={position} 
            zoom={10} 
            >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
              <Circle center={position} label="attribution" fillColor="blue" radius={24140.2}  ><Popup>Area Served</Popup></Circle>
        </Map>
      
        )
      }
      return null
    }
  }