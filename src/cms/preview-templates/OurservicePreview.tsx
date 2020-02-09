import React from 'react'
import PropTypes from 'prop-types'
import { Service } from '../../templates/service'


const OurservicePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
         <div>
    <Ourservice
      image={entry.getIn(['data', 'image'])}
      name={entry.getIn(['data', 'string'])}
      aggregateRating={entry.getIn(['data', 'number'])}
      areaServed={entry.getIn(['data', 'place'])}
      map={entry.getIn(['data', 'map'])}
      audience={entry.getIn(['data', 'string'])}
      availableChannel={entry.getIn(['data', 'string'])}
      award={entry.getIn(['data', 'string'])}
      brand={entry.getIn(['data', 'string'])}
      broker={entry.getIn(['data', 'string'])}
      category={entry.getIn(['data', 'string'])}
      hasOfferCatalog={entry.getIn(['data', 'list'])}
      OfferCatalog={entry.getIn(['data', 'list'])}
      hoursAvailable={entry.getIn(['data', 'list'])}
      isRelatedTo={entry.getIn(['data', 'string'])}
      isSimilarTo={entry.getIn(['data', 'string'])}
      offers={entry.getIn(['data', 'markdown'])}
      provider={entry.getIn(['data', 'string'])}
      providerMobility={entry.getIn(['data', 'string'])}
      review={entry.getIn(['data', 'string'])}
      serviceOutput={entry.getIn(['data', 'string'])}
      serviceType={entry.getIn(['data', 'string'])}
      termsOfService={entry.getIn(['data', 'markdown'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
    /></div>
  )
}

OurservicePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurservicePreview
