import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from '../styles/headerContainerStyle'
import Img from "gatsby-image"

const HeaderImage = ({ backgroundImage }) => (  


          <Img 
              fluid={backgroundImage}
              
              backgroundAttachment='relative'
              backgroundPosition='center'
              backgroundSize='cover'
                >
            <HeaderContainer />
          </Img> 
    
        


)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

