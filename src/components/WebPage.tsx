import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import SEO from './SEO'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import theme from '../../config/theme'


export const WebPageTemplate = ({
  slug,
  title,
  image,  
  imagecredit,
  heading,
  sortorder,
  description,
  intro,
  main,
  testimonials,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: webpage.frontmatter.image,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,        
      }}
    >
  <div
        style={{
          display: 'flex',
          height: '350px',
          width: '70%' ,
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      </div>
    </div>
    <section className="sectionMainRaised">
      <div className="container">
         <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                  <div className="title">
                  <h1 className="pageTitle"
                       style={{
                       boxShadow: 'transparent',
                       borderRadius: '6px',
                       backgroundColor: theme.primary,
                       color: 'white',
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
                    {title}
                  </h1>
                    <h2 className="has-text-weight-semibold is-size-3">{heading}</h2>
                    <h3 className="has-text-weight-semibold is-size-5">{description}</h3>
                    </div>
                </div>         
          <div className="columns">
            <div className="column is-12">
             <h3 className="subtitle">{main.title}</h3>
                    <h3 className="has-text-weight-semibold is-size-4">
                   {main.description}
                    </h3>
                  </div>
                </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

WebPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imagecredit: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}


class WebPage extends React.Component {
  render() {
  const { data } = this.props
  const { edges: webpages } = data.allMarkdownRemark


    return (
      <div>

      <SEO title="${webpage.frontmatter.title} | gappsapps.co.uk" />
        {webpages &&  webpages.map(({ node: webpage }) => (
            <div className="is-parent column is-6" key={webpage.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  webpage.frontmatter.description ? 'is-featured' : ''
                }`}
              >
                <header>
                  {webpage.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: webpage.frontmatter.image,
                          alt: `featured image thumbnail for webpage ${webpage.frontmatter.imagecredit}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="has-text-weight-semibold is-size-3">
                  <span> &bull; </span>
                    <Link
                      className="has-text-weight-semibold is-size-3"
                      to={webpage.frontmatter.slug}
                    >
                      {webpage.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <h3 className="has-text-weight-semibold is-size-5">
                  {webpage.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={webpage.frontmatter.slug}>
                    Keep Reading →
                  </Link>
                </h3>
              </article>
            </div>
          ))}
    </div>
    )
  }
}

WebPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query WebPageQuery {
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___sortorder}, filter: {frontmatter: {templateKey: {eq: "webpage"}}}) {
        edges {
          node {
            id
            excerpt(pruneLength: 400)
            frontmatter {
              slug
              title
              templateKey
              image {
                id
                childImageSharp {
                  resize(width: 1200, height: 675, quality: 80) {
                    src
                  }
                }
              }
              imagecredit
              tags
              sortorder
              description
            }
          }
        }
      }
    }
    
  `}
  render={(data, count) => <WebPage data={data} count={count} />}
  />
  )
  