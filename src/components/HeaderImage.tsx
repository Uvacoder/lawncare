import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from '../styles/headerContainerStyle'
import Img from "gatsby-image"
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const HeaderImage = ({ backgroundImage }) => (  
<Container>

          <Img 
              fluid={backgroundImage}
              backgroundAttachment='relative'
              backgroundPosition='center'
              backgroundSize='cover'
                >
            <HeaderContainer />
          </Img> 


          </Container>
)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

