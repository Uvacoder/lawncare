import React from 'react'
import PropTypes from 'prop-types'
import FaqPage from '../../templates/faq'



const FaqPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <FaqPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      categories={entry.getIn(['data', 'list'])}
    /></div>
  )
}

FaqPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FaqPreview
