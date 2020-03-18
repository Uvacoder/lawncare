import React from 'react'
import PropTypes from 'prop-types'
import FaqsPage from '../../templates/faqs'



const FaqsPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <FaqsPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      featuredimage_alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

FaqsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FaqsPreview
