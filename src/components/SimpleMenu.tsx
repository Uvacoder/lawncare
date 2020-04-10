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
      fontWeight: theme.typography.fontWeightMedium,
    },
    button: {
      color: theme.palette.primary.contrastText,
      fontWeight: theme.typography.fontWeightMedium,
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
      <Button  size="large" none="false" className={classes.button} aria-controls="simple-menu" aria-haspopup="true"  padding="1rem" onClick={handleClick} > 
     Menu
      </Button>
      <Menu
        id="simple-menu"
        className={classes.drawer}
        anchorEl={anchorEl}
        // anchorReference="anchorPosition"
        // anchorPosition={{ top: 150, left: 0 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
    <Link to="/"><MenuItem  onClick={handleClose}>Home</MenuItem></Link>  
    <Link to="/servicecatalog"><MenuItem  onClick={handleClose}>Services</MenuItem></Link>  
    <Link to="/reviews"><MenuItem  onClick={handleClose}>Reviews</MenuItem></Link>  
    <Link to="/faqs"><MenuItem  onClick={handleClose}>FAQs</MenuItem></Link>  
    <Link to="/page"><MenuItem  onClick={handleClose}>Portfolio</MenuItem></Link>  
    <Link to="/instagram"><MenuItem  onClick={handleClose}>Instagram</MenuItem></Link>  
    <Link to="/contactus"><MenuItem  onClick={handleClose}>Contact Us</MenuItem></Link>  
      </Menu>
      </Nav>
    </div>
  );
}
