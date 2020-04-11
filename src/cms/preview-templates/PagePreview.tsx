import React from 'react'
import PropTypes from 'prop-types'
import PagePage from '../../templates/page'



const PagePreview = ({ entry, getAsset }) => {

  return (
         <div>
    <PagePage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PagePreview
