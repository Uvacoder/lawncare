import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Nav from '../styles/navStyle'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      color: theme.palette.primary.contrastText,
      fontWeight:  theme.typography.h5.fontWeight,
      fontSize: theme.typography.h5.fontSize,
      padding: '1rem',
    },
    drawer: {
      display: 'flex',
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    }
  }),
);

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <GlobalStyles />
      <Nav>
      <Button  size="large" none="false" className={classes.button}  aria-label="Menu Button" aria-controls="simple-menu" aria-haspopup="true"  padding="1rem" onClick={handleClick} > 
     Menu
      </Button>
      <Menu
        id="simple-menu"
        className={classes.drawer}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

    <Link to="/"  aria-label="Link to Home page" ><MenuItem  onClick={handleClose}>Home</MenuItem></Link>  
    <Link to="/service" aria-label="Link to service catalog" ><MenuItem  onClick={handleClose}>Services</MenuItem></Link>  
    <Link to="/reviews"  aria-label="Link to reviews page"><MenuItem  onClick={handleClose}>Reviews</MenuItem></Link>  
    <Link to="/faq/"  aria-label="Link to Frequently Asked Questions page" ><MenuItem  onClick={handleClose}>FAQs</MenuItem></Link>  
    <Link to="/page" aria-label="Link to our portfolio page" ><MenuItem  onClick={handleClose}>Portfolio</MenuItem></Link>  
    <Link to="/instagram"  aria-label="Link to our instagram pics page"><MenuItem  onClick={handleClose}>Instagram</MenuItem></Link>  
    <Link to="/contactus"  aria-label="Link to contact us form"><MenuItem  onClick={handleClose}>Contact Us</MenuItem></Link>  
 
      </Menu>
      </Nav>
    </div>
  );
}
