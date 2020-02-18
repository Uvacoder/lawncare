import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContactusPreview from './preview-templates/ContactusPreview'
import ServicePreview from './preview-templates/ServicePreview'
// import WebpagePreview from './preview-templates/WebpagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('contactus', ContactusPreview)
CMS.registerPreviewTemplate('service', ServicePreview)
// CMS.registerPreviewTemplate('webpage', WebpagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)