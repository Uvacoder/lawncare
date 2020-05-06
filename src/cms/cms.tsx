import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import FaqPreview from './preview-templates/FaqPreview'
import ContactPreview from './preview-templates/ContactPreview'
import PagePreview from './preview-templates/PagePreview'
import ReviewPreview from './preview-templates/ReviewPreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerPreviewTemplate('faq', FaqPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)
CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('review', ReviewPreview)