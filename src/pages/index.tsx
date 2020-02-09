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
    softwareProjects: {
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
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'first-project multi-projects multi-projects'
    'about-us about-us about-us'
    'software-projects software-projects software-projects';

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'first-project first-project  multi-projects multi-projects'
      'about-us about-us about-us about-us'
      'software-projects software-projects software-projects software-projects';
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'first-project about-us'
      'multi-projects multi-projects'
      'multi-projects multi-projects'
      'multi-projects multi-projects'
      'software-projects software-projects'
      'software-projects software-projects';
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'first-project'
      'about-us'
      'multi-projects'
      'multi-projects'
      'multi-projects'
      'software-projects' 
      'software-projects';
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
const SoftwareProjects = styled.div`
  grid-area: software-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`


const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, multiProjects, softwareProjects, aboutUs } }) => {
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
        <SoftwareProjects>
          {softwareProjects.nodes.map(software => (
            <GridItem to={software.slug} key={software.slug} aria-label={`View software "${software.title}"`}>
              <Img fluid={software.cover.childImageSharp.fluid} />
              <span>{software.title}</span>
            </GridItem>
          ))}
        </SoftwareProjects>        
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    firstProject: webdevYaml {
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
    multiProjects: allWebdevYaml( limit:3 skip: 1) {
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
    softwareProjects: allSoftwareYaml( limit:3 ) {
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
  }
`
