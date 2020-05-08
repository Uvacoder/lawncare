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
    html, 
  }) =>  (
    <div >
          <SEO  pathname={slug}
        title={title}
        node={slug}
        banner={featuredimage}
        organisation
        />
    <Helmet title={title} />
        <PageContent featuredimage={featuredimage} title={title} slug={slug} html={html}>
            {children}
        </PageContent>
    </div>
  )

  export default PageTemplate 

PageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
}
