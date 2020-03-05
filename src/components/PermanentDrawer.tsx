import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import clsx from 'clsx';
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps.tsx'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import PhoneIcon from '@material-ui/icons/Phone'
import Phone from './phone'
import EmailIcon from '@material-ui/icons/Email'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import FolderIcon from '@material-ui/icons/Folder'
import WorkIcon from '@material-ui/icons/Work'
import GlobalStyles from '../styles/globalStyle'
import InputBase from '@material-ui/core/InputBase'
import palette from '../gatsby-plugin-theme-ui/palette'
import theme from '../gatsby-plugin-theme-ui/index'
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButtonBar from './IconButtonBar'
import ToolbarStyle from '../styles/ToolbarStyle'
import SideBarInner from '../styles/sideBarInnerStyle'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
//import Typography from '@material-ui/core/Typography';

const drawerWidth =  theme.sidebar.width.big;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      position: 'static',


      // maxWidth: Responsive.onlyTablet.maxWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // menuButton: {
    //   fontFamily: 'Open Sans',
    //   fontWeight: '400',
    //   fontSize: '1.1rem',
    //   textTransform: 'capitalize',
    // },
    button: {
      fontFamily: 'Open Sans',
      fontWeight: '400',
      fontSize: '1.1rem',
      textTransform: 'capitalize',
      color: palette.palette.primary.text,
      borderColor:  palette.palette.primary.light,
    },
    svgIcon: {
      fill: palette.palette.primary.text,
    },
    hide: {
      display: 'smDown',
    },
    drawer: {
      display: 'flex',
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.up('sm')]: {
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.main,
    },
    drawerHeader: {
      flexGrow: 3,
      width:  drawerWidth,
      display: 'flex',
      alignItems: 'center',
      //  padding: theme.spacing(1, 1),
      // ...theme.mixins.toolbar,
      justifyContent: 'center',
    },
    content: {
      flexGrow: 5,
      width:  drawerWidth,
      color: palette.palette.primary.main,
      padding: theme.spacing(3),
    
    },
    iconButtonBar: {
      flexGrow: 1,
      width:  drawerWidth,
      color: palette.palette.primary.main,
      padding: theme.spacing(3),
    
    },
    gappsappsLogo: {
      flexGrow: 1,
      width:  drawerWidth,
      color: palette.palette.primary.main,
      padding: theme.spacing(3),
    
    },
  }
  )
);

export default function PermanentDrawerLeft(props) {
  const { container, width } = props;  
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div className={classes.root}>
  
      <CssBaseline />
      <GlobalStyles />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}
           >

<Link to="/"><Container><LogoLarge /></Container></Link>
        </div>
      
        <List className={classes.content} >
    
        <Link to="/">
            <ListItem button >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem></Link>
            <Link to="/page">
            <ListItem button >
              <ListItemIcon><FolderIcon /></ListItemIcon>
              <ListItemText >Portfolio</ListItemText>
            </ListItem></Link>
            <Link to="/servicecatalog">
            <ListItem button >
              <ListItemIcon><WorkIcon /></ListItemIcon>
              <ListItemText>Service</ListItemText>
            </ListItem></Link>
            <Link to="/tags/about">
            <ListItem button >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>About us</ListItemText>
            </ListItem></Link>


            {/* <Link to="/">
            <ListItem button >
              <ListItemText>Home</ListItemText>
            </ListItem></Link>
            <Link to="/page">
            <ListItem button >
              <ListItemText >Portfolio</ListItemText>
            </ListItem></Link>
            <Link to="/servicecatalog">
            <ListItem button >
              <ListItemText>Service</ListItemText>
            </ListItem></Link>
            <Link to="/tags/about">
            <ListItem button >

              <ListItemText>About us</ListItemText>
            </ListItem></Link> */}



        {/* <a href="tel:01295402447" rel="nofollow">
            <ListItem button >
              <ListItemIcon><PhoneIcon /></ListItemIcon>
              <ListItemText>Call us now</ListItemText>
            </ListItem></a>
            <a href="mailto: jon@lawnsmatter.co.uk?subject=Lawn%20Care%20Enquiry&body=Dear%20Jon,%0d%0dI%20am%20interested%20in%20the%20Lawn%20Care%20Services%20that%20I%20have%20read%20about%20on%20your%20website,%20would%20you%20please%20contact%20me%20to%20book%20a%20lawn%20assessment.%0d%0dMy%20contact%20details%20are...%0d%0dName:%0dAddress:%0dPost%20code:%0dPhone%20number:%0dEmail:%0d%0dKind%20regards,%0d%0d" rel="nofollow">
            <ListItem button >
              <ListItemIcon><EmailIcon /></ListItemIcon>
              <ListItemText>Email us</ListItemText>
            </ListItem></a>
        <a href="https://www.facebook.com/lawnsmatter" rel="nofollow">
            <ListItem button >
              <ListItemIcon><FacebookIcon /></ListItemIcon>
              <ListItemText>Facebook</ListItemText>
            </ListItem></a>
            <Link to="/instagram">
            <ListItem button >
              <ListItemIcon><InstagramIcon /></ListItemIcon>
              <ListItemText>Instagram</ListItemText>
            </ListItem></Link> */}
            <Divider />

        </List>
        <IconButtonBar className={classes.iconButtonBar} />
            <Divider />
        <a href="https://www.gappsapps.co.uk" className={classes.gappsappsLogo} rel="nofollow">
            <ListItem button >
              <ListItemIcon><Gappsapps /></ListItemIcon>
            </ListItem></a>
      </Drawer>

      <main

      >
        {/* <div className={classes.drawerHeader} /> */}

      </main>

    </div>
  );
}
