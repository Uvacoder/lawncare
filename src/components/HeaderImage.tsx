import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import HeaderContainer from '../styles/headerContainerStyle'


const HeaderImage = ({ backgroundImage }) => (  
         

    <BackgroundImage
        fluid={backgroundImage}
        style={{
        width: '100%',
        backgroundAttachment: 'fixed',     
        backgroundPosition: 'center',
        backgroundSize: 'cover',      
        }}
        >   
        <HeaderContainer />
    </BackgroundImage> 
  
 
)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

