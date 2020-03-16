import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContactusPreview from './preview-templates/ContactusPreview'
import PagePreview from './preview-templates/PagePreview'
import BlogPreview from './preview-templates/BlogPreview'
import ReviewPreview from './preview-templates/ReviewPreview'
import AreaservedPreview from './preview-templates/AreaservedPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('contactus', ContactusPreview)
CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('post', BlogPreview)
CMS.registerPreviewTemplate('review', ReviewPreview)
CMS.registerPreviewTemplate('areaserved', AreaservedPreview)