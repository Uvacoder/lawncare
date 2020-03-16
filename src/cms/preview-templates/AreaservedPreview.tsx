import React from 'react'
import PropTypes from 'prop-types'
import AreaservedPage from '../../templates/areaserved'



const AreaservedPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <AreaservedPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      featuredimage_alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

AreaservedPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AreaservedPreview
