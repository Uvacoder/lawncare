import React, { Component } from 'react'
import { Map, Marker, Circle, CircleMarker, Popup, TileLayer } from 'react-leaflet'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { graphql} from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Container from '@material-ui/core/Container'
import RaisedHeader from '../styles/raisedHeaderStyle'
import ContactUsButton from '../components/ContactUsButton'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import GlobalStyles from '../styles/globalStyle'


export class AreaServedMap extends Component {
  render() {
    const { options } = this.props
    const position = [51.9806, -1.32055]
    if (typeof window !== 'undefined') {
      return (
        <Map style={{ 
          height: theme.leafletContainer.height, 
          width: "100%",
          zIndex: 2,
          }} 
          {...options} 
          center={position} 
          zoom={10} 
          >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
            <Circle center={position} label="attribution" fillColor="blue" radius={24140.2}  ><Popup>Area Served</Popup></Circle>
      </Map>
    
      )
    }
    return null
  }
}

type PageProps = {
  data: {
        id: string
        html: markdown 
        frontmatter: {
          title: string
          templateKey: string
          featured: boolean
          slug: string
          alt: string
          categories: string
          }
        }
        site: {
          siteMetadata: {
            title: string
          }
        }
     }


  const AreaServed = ({ data }) => {
 
   
  return (
    <div >
          <GlobalStyles />
    <Layout >
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={data.site.siteMetadata.title}
        desc={data.markdownRemark.html}
        node={data.markdownRemark.frontmatter.slug}
  
       />
   <Helmet title={data.markdownRemark.frontmatter.title} />
   <Content bg={theme.palette.primary.main} >
     <AreaServedMap />
    
     <Container  >
 
                <RaisedHeader   >
                  <PageTitle >{data.markdownRemark.frontmatter.title} </PageTitle>
                  <Description >
                  <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                  <ContactUsButton />
               
                  </Description>
                </RaisedHeader>
        </Container>
      </Content>
    </Layout>
    </div>
  )
}


export default AreaServed

export const query = graphql`
query AreaServed ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      alt
      featured
    }
    id
  }
  site {
    siteMetadata {
      title
    }
  }
}


`
