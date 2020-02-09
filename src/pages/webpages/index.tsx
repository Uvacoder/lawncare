import React from 'react'
import WebPageIndex from '../../components/WebPageIndex'
import theme from '../../../config/theme'

export default class WebPageIndexPage extends React.Component {
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
                       backgroundColor: theme.primary,
                       color: 'white',
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
                    Latest information
                  </h1>
               <WebPageIndex />
            </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
