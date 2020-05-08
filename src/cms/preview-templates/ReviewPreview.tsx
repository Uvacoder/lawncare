import React from 'react'
import PropTypes from 'prop-types'
import ReviewPage from '../../templates/review'



const ReviewPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <ReviewPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      category={entry.getIn(['data', 'list'])}
    /></div>
  )
}

ReviewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ReviewPreview
