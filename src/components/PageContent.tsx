import React from 'react'
import HeaderImage from './HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import PropTypes from 'prop-types'
import Description from  '../styles/descriptionStyle'
import ContactUsButton from './ContactUsButton'
import Box from '@material-ui/core/Box'
import Content from '../styles/contentStyle'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import List from 'styles/listStyle'

export const PageContent = ({  
    children,
    featuredimage,
    title,
    slug,
    location,
    html, 
  }) =>  (
    <div >
    <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage} />
          <RaisedHeader   >
            <PageTitle > {title}  </PageTitle>
                <Description >
                 <span dangerouslySetInnerHTML={{ __html: html }} ></span>  <Box>  {location}</Box>
                   
                        <Box>
                        {children}
                        </Box>
                </Description>
                  <ContactUsButton />
          </RaisedHeader> 
          </Content>
    </div>
  )

  export default PageContent

PageContent.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
}
