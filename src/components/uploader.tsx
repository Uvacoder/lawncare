import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import { Grid, FormControl, TextField, Button } from '@material-ui/core'
import FormContainer from '../styles/formContainerStyle'
import { withStyles  } from '@material-ui/core/styles'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import UploadButtons from 'components/UploadButtons'

const TextInputField = styled(TextField)`
  variant: outlined;
  color: ${theme.palette.primary.contrastText}; 
`
const SubmitButton = styled(Button)`
  variant: outlined;  
  color: primary;
`

const ChooseFileField = withStyles({
  root: {
    color: theme.palette.secondary.main,
    '& label.Mui-focused': {
      color: 'Green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'Green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'Green',
      },
    },
  },
})(TextInputField);



const InputField = withStyles({
  root: {
    color: theme.palette.secondary.main,
    '& label.Mui-focused': {
      color: 'Green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'Green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'Green',
      },
    },
  },
})(TextInputField);



function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Uploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <div>
          <FormContainer >
                    <form size='large' name="file-upload" action="/contact/thanks/" method="POST" data-netlify="true" data-netlify-honeypot="botfield "  onSubmit={this.handleSubmit}>
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="file-upload" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                  
                  <FormControl className="control">
                    <Grid container spacing={2} >
                      <Grid item xs >            
                        <InputField
                          label="Name"
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </Grid>
                      <Grid item xs={2} >
                        <br />
                      </Grid>
                      <Grid item xs >            
                        <InputField
                            label="Location"
                            className="input"
                            type={'text'}
                            name={'location'}
                            onChange={this.handleChange}
                            id={'location'}
                            required={true}
                          />
                      </Grid>
                      <Grid item  xs={12}>
                        <br />
                      </Grid>
                      <Grid item  xs={12}>
                      <UploadButtons
                            label="file" 
                          className="file-input"
                          type="file"
                          name="attachment"
                          onChange={this.handleAttachment}
                        />
                      </Grid>
                      <Grid item  xs={12} >
                        <InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" padding="1rem" />
                      </Grid>
              <br />
               
    
                      <Grid item xs={12}>
                        <br />
                      </Grid>
       
                      <Grid item xs={12} >

                      <SubmitButton  aria-label="Submit" variant="contained" color="primary">Submit</SubmitButton>
                      </Grid>
                      </Grid>
                      <br />
                </FormControl>
                        </form>
                        </FormContainer>

 

      </div>
    )
  }
}

