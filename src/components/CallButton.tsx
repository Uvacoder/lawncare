import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import Button from '@material-ui/core/Button'
import theme from '../gatsby-theme-material-ui-top-layout/theme'


export default function CallButton() {

      return (
       
            <Button 
              aria-label="Call us" 
              color="default" 
              size="large" 
              none="false" 
              style={{ 
                color: theme.palette.primary.contrastText,
               fontWeight:  theme.typography.h5.fontWeight,
               fontSize: theme.typography.h5.fontSize,
                         }}
              padding="1rem">
            <PhoneIcon />
            Call
            </Button>
      
      );
}