import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../templates/contact'

const ContactPreview = ({ entry, getAsset }) => {

  return (
    <div>
    <Contact
     slug={entry.getIn(['data', 'string'])}
     title={entry.getIn(['data', 'string'])}
     featuredimage={entry.getIn(['data', 'image'])}
     alt={entry.getIn(['data', 'string'])}
     body={entry.getIn(['data', 'markdown'])}
     /></div>
  )
}

ContactPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPreview
