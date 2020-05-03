import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Area from '../styles/areaStyle'
import GridLink from './grid-link'

const HeaderIndex = ({ 
  featuredimage,
  title,
  slug,
 }) => (  
         

  <Area>

   <GridLink key={slug} to={slug} aria-label={`View page "${title}"`}>
     <Img fluid={featuredimage.childImageSharp.fluid} />
                       <span>{title}</span>
    </GridLink>

</Area>

  
 
)

HeaderIndex.propTypes = {
  posts: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

export default HeaderIndex

