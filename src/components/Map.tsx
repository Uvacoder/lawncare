import React, { Component } from 'react'
import { Map } from 'react-leaflet'

export default class AreaServed extends Component {
  render() {
    const { options } = this.props

    if (typeof window !== 'undefined') {
      return (
        <Map height="180px" {...options}>

        </Map>
      )
    }
    return null
  }
}