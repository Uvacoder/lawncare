import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormContainer from '../styles/formContainerStyle'
import { navigateTo } from "gatsby-link";


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };


    render() {
            
        return (
          <div>
      
            <FormContainer >
                <form 
                size='large' 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-recaptcha="true" 
                action="/contact/thanks/"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                          Don’t fill this out:{" "}
                           <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </p>
    
                    <FormControl>
                        <Grid container  >
                            <Grid item xs={7} ><TextField fullWidth label="Name" id="name-input" onChange={this.handleChange}  /></Grid>
                            <Grid item xs={7} ><TextField fullWidth label="Tel No:" id="telephone-number-input"  onChange={this.handleChange}  /></Grid>
                        
                            <Grid item xs={12} ><TextField fullWidth label="Address"  id="address-input" size="large"  onChange={this.handleChange} /></Grid>
                            <Grid item xs={7}><TextField fullWidth label="Post Code" id="postcode-input"  onChange={this.handleChange}  /></Grid>
                        
                            <Grid item xs={7}><TextField fullWidth label="Email" id="email-input"  onChange={this.handleChange}   /></Grid>
                            </Grid>  

                            <Grid item  ><TextField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large"  onChange={this.handleChange}  /></Grid>
                            <Grid container spacing={1}>
                            <Grid item xs={12}><br /></Grid>
                        
                            <br />
                      <div data-netlify-recaptcha="true"></div>
                      <br />
                            <Grid item xs={12}><Button  type="submit" color="primary" aria-label="Send message button" variant="contained" color="primary">Send Message</Button></Grid>
                            <br />
                        </Grid>
                    </FormControl>
                </form>
            </FormContainer>
            </div>
  )
}
}
