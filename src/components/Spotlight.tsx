import React from 'react'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, AnimatedBox } from '../elements'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const RaisedHeader = styled(Container)`
  padding: 30px 0;
  //box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
  
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.text};
  color: ${theme.palette.primary.background};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  fontSize: 1.5rem ;
  transition: all 300ms linear ; 
`

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:  35vw ;
  grid-template-areas: 
  'gridcontent gridimage' ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  padding: 0;

` 
const GridContent = styled(Box)`
  grid-area: gridcontent;
  background-color: ${theme.palette.primary.background};
  text-align: left;
  color: ${theme.palette.primary.text};
  padding: 1rem;

  .title {
    color: ${theme.palette.primary.active};
  }
  
  .text{
    color: ${theme.palette.primary.text};

  }
  
  
`
const GridImage = styled(PreviewCompatibleImage)`
  grid-area: gridimage;
  background-color: ${theme.palette.primary.background};
  padding: 0;
  .text {color: ${theme.palette.primary.text};}
`
const Spotlight = ({ gridItems }) => (
  <div >
    {gridItems.map(item => (
      <div>
       <RaisedHeader>
        <GridContainer>
  
    
          <GridImage grid-area="gridimage" imageInfo={item} />
 
          <GridContent grid-area="gridcontent"  background-color={theme.palette.primary.background}>
            <h3 className="title">
              {item.title}    </h3>
              <p className="text">
              {item.text}
            </p>
            </GridContent>

      </GridContainer>
      </RaisedHeader>
      </div>
    ))}
    </div>
) 

Spotlight.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
}

export default Spotlight
