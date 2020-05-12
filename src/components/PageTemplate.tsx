import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from './SEO'
import PropTypes from 'prop-types'
import PageContent from './PageContent'

export const PageTemplate = ({  
    children,
    featuredimage,
    title,
    slug,
    location,
    serviceName,
    html, 
  }) =>  (
    <div >
          <SEO  pathname={slug}
        title={title}
        node={slug}
        banner={featuredimage}
        location={location}
        organisation
        />
    <Helmet title={title} />
        <PageContent featuredimage={featuredimage} title={title} slug={slug} html={html} location={location}>
            {children}
        </PageContent>
    </div>
  )

  export default PageTemplate 

PageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  location: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      serviceName: PropTypes.object,
    }),
  }),
}
