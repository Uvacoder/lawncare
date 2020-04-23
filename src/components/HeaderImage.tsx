import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'



const HeaderImage = ({ backgroundImage }) => (               

    <BackgroundImage
        fluid={backgroundImage}
        style={{
        backgroundAttachment: 'fixed',     
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        }}
        >   
        <Container
        style={{ height: '800px',  }}
        />
    </BackgroundImage> 
    
)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

