import React from 'react'
import ProjectIndex from '../../components/ProjectIndex'
import theme from '../../gatsby-plugin-theme-ui/index'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
          backgroundImage: `url('/img/david-guenther-DrDZmWff3vo-unsplash.jpg')`,
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
                       backgroundColor: theme.colors.primary,
                       color: 'white',
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
                    Our project portfolio
                  </h1>
              <ProjectIndex />
            </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
