import React from 'react'
import PropTypes from 'prop-types'
import BlogPage from '../../templates/post'



const BlogPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <BlogPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPreview
