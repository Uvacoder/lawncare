import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import Layout from './layout'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormContainer from '../styles/formContainerStyle'
import { Form } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import { createStyles, Theme,  withStyles, makeStyles  } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button';
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
                            <Form size='large' name="file-upload" action="/contact/thanks/" method="POST" data-netlify="true" data-netlify-honeypot="botfield "  onSubmit={this.handleSubmit}>
                             {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="file-upload" />
                            <div hidden>
                              <label>
                                Don’t fill this out:{' '}
                                <input name="bot-field" onChange={this.handleChange} />
                              </label>
                            </div>
                          
                          <FormControl className="control">
                            <Grid container spacing={1} >
                              <Grid item xs={10}  spacing={2} >            
                     
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
                           
                              <Grid item xs={10}  spacing={2}>            
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
                           
                              <Grid item xs={10}  spacing={2}>
                              <UploadButtons
                                   label="file" 
                                  className="file-input"
                                  type="file"
                                  name="attachment"
                                  onChange={this.handleAttachment}
                                />
                              </Grid>
                            </Grid>  

                              <Grid container spacing={1} >   
                                </Grid>                               
                               <Grid item  ><InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" /></Grid>
                              <Grid container spacing={1}>
                              <Grid item xs></Grid>
                              </Grid>
                              <br />
                              <SubmitButton  aria-label="Submit" variant="contained" color="primary">Submit</SubmitButton>
                              <br />
                        </FormControl>
                        </Form>
                        </FormContainer>

 

      </div>
    )
  }
}

