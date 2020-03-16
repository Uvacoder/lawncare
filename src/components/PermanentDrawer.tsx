import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import FolderIcon from '@material-ui/icons/Folder'
import WorkIcon from '@material-ui/icons/Work'
import StarIcon from '@material-ui/icons/Star'
import GlobalStyles from '../styles/globalStyle'

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButtonBar from './IconButtonBar'
import ToolbarStyle from '../styles/toolbarStyle'
import SideBarInner from '../styles/sideBarInnerStyle'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import PermanentDrawerStyle from '../styles/permanentDrawerStyle'

const drawerWidth = '275px'
const drawerContentsWidth = '240px'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      position: 'static',
      fontFamily: 'Open Sans',


      // maxWidth: Responsive.onlyTablet.maxWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
      textTransform: 'capitalize',
      color: palette.palette.primary.text,
      borderColor:  palette.palette.primary.light,
    },
    svgIcon: {
      fill: palette.palette.primary.text,
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
      padding: 0,
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.main,
    },
    drawerHeader: {
      flexGrow: 3,
      width:  drawerWidth,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
       ...theme.mixins.toolbar,
      justifyContent: 'center',
    },
    content: {
      flexGrow: 5,
      width:  drawerWidth,
      color: palette.palette.primary.main,
      padding: theme.spacing(2),
      },
    iconButtonBar: {
      flexGrow: 1,
      width:  drawerContentsWidth,
      color: palette.palette.primary.main,
      padding: theme.spacing(2),
    
    },
    gappsappsLogo: {
      flexGrow: 1,
      width:  drawerContentsWidth,
      color: palette.palette.primary.main,
      margin: theme.spacing(2),
    
    },
    listitemtext: {
      fontWeight: 400,
      fontFamily: 'Open Sans',
      padding: theme.spacing(6),
  }
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
            <Link to="/reviewlist">
            <ListItem button >
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText>Reviews</ListItemText>
            </ListItem></Link>
            <Link to="/tags/about">
            <ListItem button >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>Information</ListItemText>
            </ListItem></Link> 


    
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
