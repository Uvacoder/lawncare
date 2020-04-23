import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InstagramIcon from '@material-ui/icons/Instagram'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Container from '@material-ui/core/Container';
import IconButtonBar from './IconButtonBar'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GlobalStyles from '../styles/globalStyle'


  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
    },
    mainSection: {
      marginLeft: theme.sidebar.width.big,
    },
    drawer: {
      width: theme.sidebar.width.big,
      backgroundColor: theme.palette.primary.main,
      position: 'fixed',
      flexShrink: 0,
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      width: theme.sidebar.width.big,
    },
    // necessary for content to be below app bar
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
      // padding: theme.spacing(3),
    },
  }),
);
export default function PermanentDrawerLeft(props) {
  const { container, width } = props;  
  const classes = useStyles();

  return (
    <div className={classes.root}>

  <GlobalStyles />

    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         <div className={classes.toolbar} />
 
        <Link to="/">
        <Container>
            <LogoLarge />
          </Container>
        </Link>
        {/* </div> */}
     
      <List
      //  className={content} 
       >

        <Link to="/" >
            <ListItem button aria-label="Link to Home page">
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><HomeOutlinedIcon /></ListItemIcon>
              <ListItemText style={{ color: theme.palette.primary.contrastText }} >Home</ListItemText>
            </ListItem></Link>
            <Link to="/service">
            <ListItem button  aria-label="Link to service catalog" style={{ color: theme.palette.primary.contrastText }} >
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><InfoOutlinedIcon /></ListItemIcon>
              <ListItemText>Our Service</ListItemText>
            </ListItem></Link>
            <Link to="/reviews">
            <ListItem button  aria-label="Link to reviews" style={{ color: theme.palette.primary.contrastText }} >
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><StarBorderOutlinedIcon /></ListItemIcon>
              <ListItemText>Reviews</ListItemText>
            </ListItem></Link>
            <Link to="/faq/" >
            <ListItem button  aria-label="Link to Frequently Asked Questions" style={{ color: theme.palette.primary.contrastText }} >
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><HelpOutlineIcon /></ListItemIcon>
              <ListItemText>Questions?</ListItemText>
            </ListItem></Link> 
            <Link to="/page" >
            <ListItem button  aria-label="Link to our portfolio page" style={{ color: theme.palette.primary.contrastText }} >
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><FolderOutlinedIcon /></ListItemIcon>
              <ListItemText >Our Portfolio</ListItemText>
            </ListItem></Link>
            <Link to="/instagram">
            <ListItem button  aria-label="view our Instagram images" style={{ color: theme.palette.primary.contrastText }}>
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }}><InstagramIcon /></ListItemIcon>
              <ListItemText >Instagram</ListItemText>
            </ListItem></Link>
            <Link to="/contactus">
            <ListItem button  aria-label="Link to the countact us form" style={{ color: theme.palette.primary.contrastText }} >
              <ListItemIcon style={{ color: theme.palette.primary.contrastText }} ><ContactMailIcon /></ListItemIcon>
              <ListItemText >Contact Us</ListItemText>
            </ListItem></Link>

            <Divider />

        </List>
     
        <IconButtonBar />
            <Divider />
        <a href="https://www.gappsapps.co.uk" 
        // className={gappsappsLogo} 
        rel="nofollow">
            <ListItem button  aria-label="Link to the developer of this website Gappsapps" >
             <Gappsapps />
            </ListItem></a>
            {/* </Container> */}
      </Drawer>

  
    </div>
  );
}
