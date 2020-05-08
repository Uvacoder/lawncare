import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from './SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import HeaderImage from './HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import PropTypes from 'prop-types'
import Description from  '../styles/descriptionStyle'
import Box from '@material-ui/core/Box'

export const FormPageTemplate = ({  
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
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage} />
          <RaisedHeader   >
            <PageTitle >{title} </PageTitle>
            <Description >
           <div dangerouslySetInnerHTML={{ __html: html }} />
            <Box>
             {children}
              </Box>
            </Description>
            </RaisedHeader> 

      </Content>
    </div>
  )

  export default FormPageTemplate 

FormPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
}
