import React from 'react'
import BlogRoll from '../../components/BlogRoll'
import theme from '../../gatsby-plugin-theme-ui/index'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/moritz-kindler-G66K_ERZRhM-unsplash.jpg')`,
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
            <div className="content">
            <div className="title">
            <h1 className="pageTitle"
                       style={{
                       boxShadow: 'transparent',
                       borderRadius: '6px',
                       backgroundColor: theme.palette.primary.main,
                       color: 'white',
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
                    Latest information
                  </h1>
               <BlogRoll />
            </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
