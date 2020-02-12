import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContactusPreview from './preview-templates/ContactusPreview'
import OurservicePreview from './preview-templates/OurservicePreview'
import WebpagePreview from './preview-templates/WebpagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('contactus', ContactusPreview)
CMS.registerPreviewTemplate('service', OurservicePreview)
CMS.registerPreviewTemplate('webpage', WebpagePreview)
CMS.registerPreviewTemplate('webpage', ProjectPreview)