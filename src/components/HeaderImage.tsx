import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from '../styles/headerContainerStyle'
import Img from "gatsby-image"
import HeaderImageContainer from '../styles/headerImageContainer'
import Banner from '../styles/bannerStyle'


const HeaderImage = ({ backgroundImage }) => (  

  <HeaderImageContainer>
  <Banner>
          <Img 
              fluid={backgroundImage}
              backgroundAttachment='relative'
              backgroundPosition='center'
              backgroundSize='cover'
                >
            <HeaderContainer />
          </Img> 
          </Banner>   
   </HeaderImageContainer>

)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default HeaderImage

