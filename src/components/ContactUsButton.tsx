import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import PBox from '../styles/pboxStyle'

const ContactUsButton = () => (
    <PBox style={{ textAlign: 'center' }}>
      <Link to="/contactus">
      <Button variant="contained" color="primary" margin="1rem" py={4} px={8}>
        Contact Us
      </Button>
      </Link>
    </PBox>
  )             
             
export default ContactUsButton