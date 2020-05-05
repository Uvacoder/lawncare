import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from '../styles/headerContainerStyle'
import Container from '@material-ui/core/Container'
import Img from "gatsby-image"

const HeaderImage = ({ backgroundImage }) => (  

  <Container>
    <Img
        fluid={backgroundImage}
        width='100%'
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

