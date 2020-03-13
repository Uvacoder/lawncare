import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const RaisedCard = styled(Container)`
  grid-area:  mediacard;
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

const CardContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  1fr;
  grid-template-areas: 
  'cardcontent cardimage' ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  padding: 1;
` 
const CardImage = styled(PreviewCompatibleImage)`
  grid-area: cardimage;
  background-color: ${theme.palette.primary.background};
  padding: 0;
  .text {color: ${theme.palette.primary.text};}
`

const MediaCard = ({ posts }) => (
    <div >
        {posts.map(posts => (
            <div>
                <Card>
                    <CardActionArea >
                        <CardContent >
                        <CardImage
                        imageInfo={posts.frontmatter.featuredimage}
                        alt={posts.frontmatter.featuredimage_alt}  
                        />
                       
                            <h3>
                            {posts.frontmatter.title}     
                            </h3>
                            <p className="text">
                            {posts.excerpt}
                            </p>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color={theme.palette.primary.background}>
                        Share
                        </Button>
                        <Button size="small" color={theme.palette.primary.background}>
                        Learn More
                        </Button>
                    </CardActions>
                </Card>

            </div>)
           )
        }
    </div>
)
MediaCard.propTypes = {
    gridItems: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        title: PropTypes.string,
        text: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
  }
  
  export default MediaCard