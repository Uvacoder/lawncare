import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring, useTrail } from 'react-spring'
import { Flex } from '../elements'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Heart from '../heart.svg'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const Grid = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

  [theme.breakpoints.down('xl')]: {
    grid-template-columns: 1fr 1fr 1fr;
  }

  [theme.breakpoints.down('lg')]: {
    grid-template-columns: 1fr 1fr;
  }

  [theme.breakpoints.down('sm')]: {
    grid-template-columns: 1fr;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`

const Title = styled.div`
  padding: 1rem;
  color: white;
  font-weight: 500;
  font-size: ${theme.typography.h3.fontSize};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  [theme.breakpoints.up('lg')]: {
    font-size: ${theme.typography.h3.fontSize};
  }
  transform: translateY(-45px);
  transition: all 0.4s ease 0s;
  opacity: 0;
`

const Bottom = styled(Flex)`
  color: white;
  [theme.breakpoints.up('lg')]: {
    font-size: ${theme.typography.h2.fontSize};
  }
  transform: translateY(45px);
  opacity: 0;
  transition: all 0.4s ease 0s;
`

const Item = styled(animated.a)`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }

    ${Bottom} {
      transform: translateY(0);
      opacity: 1;
    }

    ${Title} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Content = styled(Flex)`
  z-index: 10;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0; 
  right: 0;
  padding: ${theme.typography.spacing};
`

const HeartIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  top: 0;
  right: 0;
`

type Props = {
  data: {
    instagram: {
      nodes: {
        caption?: string
        id: string
        timestamp: number
        likes: number
        original: string
      }[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Instagram: React.FunctionComponent<Props> = ({
  data: {
    instagram: { nodes: instagram },
  },
}) => {
  const pageAnimation = useSpring({
    config: config.default,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const trail = useTrail(instagram.length, {
    config: {
      mass: 1,
      tension: 210,
      friction: 23,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
 
    <div>
      <SEO title={`Our Instagram Images`}/>
      <Grid style={pageAnimation}>
        {trail.map((style, index) => {
          // Grab everything before the first hashtag (because I write my captions like that)
  
          const post = instagram[index]
          const title = post.caption ? post.caption.split('#')[0] : ''
          const date = new Date(post.timestamp * 1000).toLocaleDateString('en-GB')

          return (
            <Item style={style} href={`https://www.instagram.com/p/${post.id}/`} key={post.id}>
              <Overlay />
              <Img fluid={post.localFile.childImageSharp.fluid} />
              <Content flexDirection="column" flexWrap="nowrap" justifyContent="space-between">
                <Title>{title}</Title>
                <Bottom flexDirection="row" flexWrap="nowrap" justifyContent="space-between">
                  <span>
                    <HeartIcon src={Heart} /> {post.likes}
                  </span>
                  <span>{date}</span>
                </Bottom>
              </Content>
            </Item>
          )
        })}
      </Grid>
      </div>

  )
}

export default Instagram

export const query = graphql`
query Instagram {
  instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
    nodes {
      caption
      id
      timestamp
      likes
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}

`
