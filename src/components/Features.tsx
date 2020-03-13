import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import theme from '../gatsby-plugin-theme-ui/index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components' 
import GlobalStyles from '../styles/globalStyle'


const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'gridcontent image' ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
` 

const GridContent = styled(Paper)`
  grid-area: gridcontent;
  
  
`
// const GridContent = styled(Paper)`
//   grid-area: gridcontent;
//   background-color: ${theme.palette.primary.background};
//   color: ${theme.palette.primary.text};
// `

const FeatureGrid = ({ gridItems }) => (
  <div >
    {gridItems.map(item => (
     
     <div>
       <GlobalStyles />
      <GridContainer>
         <Grid   item>
        <GridContent >{item.text}</GridContent>
      </Grid> 
      <Grid  item >
        <PreviewCompatibleImage grid-area="image" imageInfo={item} />
        </Grid>
      </GridContainer>
      </div>  
    ))
    }
    </div>)


FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
