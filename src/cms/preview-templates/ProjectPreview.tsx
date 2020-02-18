import React from 'react'
import PropTypes from 'prop-types'
import ProjectPage from '../../templates/project'



const ProjectPreview = ({ entry, getAsset }) => {

  return (
         <div>
    <ProjectPage
      slug={entry.getIn(['data', 'string'])}
      title={entry.getIn(['data', 'string'])}
      featuredimage={entry.getIn(['data', 'image'])}
      featuredimage_alt={entry.getIn(['data', 'string'])}
      body={entry.getIn(['data', 'markdown'])}
      tags={entry.getIn(['data', 'list'])}
    /></div>
  )
}

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectPreview
