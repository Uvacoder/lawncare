import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service'



const ServicePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
         <div>
    <ServicePreview
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      featuredimage_alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

ServicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicePreview
