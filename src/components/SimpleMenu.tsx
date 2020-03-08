import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import theme from '../gatsby-plugin-theme-ui/index'
import Nav from '../styles/navStyle'
import palette from '../gatsby-plugin-theme-ui/palette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: palette.palette.primary.background,
    },
    button: {
      color: palette.palette.primary.text,
    },
    drawer: {
      display: 'flex',
    },
    drawerPaper: {
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.main,
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
     <CssBaseline />
      <GlobalStyles />
      <Nav>
     <MenuItem> <Button variant="text" uppercase="false" className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} > 
     Menu
      </Button></MenuItem>
      <Menu
        id="simple-menu"
        className={classes.drawer}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
    <Link to="/"><MenuItem  onClick={handleClose}>Home</MenuItem></Link>  
    <Link to="/servicecatalog"><MenuItem  onClick={handleClose}>Services</MenuItem></Link>  
    <Link to="/tags/about"><MenuItem  onClick={handleClose}>About Us</MenuItem></Link>  
    <Link to="/page"><MenuItem  onClick={handleClose}>Portfolio</MenuItem></Link>  
    <Link to="/contactus"><MenuItem  onClick={handleClose}>Contact Us</MenuItem></Link>  
      </Menu>
      </Nav>
    </div>
  );
}
