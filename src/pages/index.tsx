import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    firstProject: {
      title: string
      slug: string
      cover: ChildImageSharp
    }
    multiProjects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
    portfolioProjects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
    aboutUs: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
    instagram: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw 25vw;
  grid-template-areas:
    'about-us about-us about-us' 
    ' instagram instagram first-project '
    'portfolio-projects portfolio-projects portfolio-projects'
    'multi-projects multi-projects multi-projects' ;

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'multi-projects  first-project  multi-projects multi-projects'
      'about-us about-us about-us about-us'
      'portfolio-projects portfolio-projects portfolio-projects portfolio-projects'
      'instagram instagram instagram instagram';
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'first-project about-us'
      'multi-projects multi-projects'
      'multi-projects multi-projects'
      'multi-projects multi-projects'
      'portfolio-projects portfolio-projects'
      'portfolio-projects portfolio-projects'
      'instagram instagram';
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'about-us'
      'first-project'
      'about-us'
      'about-us'
      'multi-projects'
      'multi-projects'
      'multi-projects'
      'portfolio-projects' 
      'portfolio-projects' 
      'portfolio-projects'
      'instagram'
      'instagram';
  }
`

const FirstProject = styled(GridItem)`
  grid-area: first-project;
`

const AboutUs = styled(GridItem)`
grid-area: about-us;
display: grid;
grid-template-columns: repeat(3, 1fr);

@media (max-width: ${props => props.theme.breakpoints[1]}) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
`
const MultiProjects = styled.div`
  grid-area: multi-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
const PortfolioProjects = styled.div`
  grid-area: portfolio-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
const Instagram = styled(GridItem)`
  grid-area: instagram;
`


const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, multiProjects, portfolioProjects, aboutUs, instagram } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />
      <Area style={pageAnimation}>
        <FirstProject to={firstProject.slug} aria-label={`View project "${firstProject.title}"`}>
          <Img fluid={firstProject.cover.childImageSharp.fluid} />
          <span>{firstProject.title}</span>
        </FirstProject>
        <AboutUs>
          {aboutUs.nodes.map(about => (          
             <GridItem to={about.slug} key={about.slug} aria-label={`View about "${about.title}"`}>
              <Img fluid={about.cover.childImageSharp.fluid} />
              <span>{about.title}</span>
             </GridItem>
           ))}
        </AboutUs>
        <MultiProjects>
          {multiProjects.nodes.map(project => (
            <GridItem to={project.slug} key={project.slug} aria-label={`View project "${project.title}"`}>
              <Img fluid={project.cover.childImageSharp.fluid} />
              <span>{project.title}</span>
            </GridItem>
          ))}
        </MultiProjects>
        <PortfolioProjects>
          {portfolioProjects.nodes.map(portfolio => (
            <GridItem to={portfolio.slug} key={portfolio.slug} aria-label={`View portfolio "${portfolio.title}"`}>
              <Img fluid={portfolio.cover.childImageSharp.fluid} />
              <span>{portfolio.title}</span>
            </GridItem>
          ))}
        </PortfolioProjects>   
        <Instagram to="/instagram" aria-label="See my Instagram pictures">
        <Img fluid={instagram.cover.childImageSharp.fluid} />
          <span>Instagram</span>
        </Instagram>     
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    firstProject: reviewsYaml {
      title
      slug
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    multiProjects: allReviewsYaml( limit:3 skip: 1) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    portfolioProjects: allPortfolioYaml( limit:3 ) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aboutUs: allAboutYaml( limit:3 ) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    instagram: portfolioYaml(slug: {eq: "portfolio/instagrampics"}) {
      cover {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            src
          }
        }
      }
    }
  }
`
