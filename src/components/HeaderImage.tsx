import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import HeaderContainer from '../styles/headerContainerStyle'
import Container from '@material-ui/core/Container'

const HeaderImage = ({ backgroundImage }) => (  
         
  <Container  >
    <BackgroundImage
        fluid={backgroundImage}
        width='100%'
        backgroundAttachment='fixed'
        backgroundPosition='center'
        backgroundSize='cover'
        >   
        <HeaderContainer />
    </BackgroundImage> 
    </Container>
 
)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

