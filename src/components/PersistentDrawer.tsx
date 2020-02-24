import React from 'react';
import { Link } from 'gatsby'
import clsx from 'clsx';
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from '../components/logoLarge'
import GappsappsPWA from './gappsapps-PWA.tsx'
import FacebookIcon from '@material-ui/icons/facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import PhoneIcon from '@material-ui/icons/Phone'
import Phone from '../components/phone'
import EmailIcon from '@material-ui/icons/Email'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import FolderIcon from '@material-ui/icons/Folder'
import WorkIcon from '@material-ui/icons/Work'
import GlobalStyles from '../styles/globalStyle'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import palette from '../gatsby-plugin-theme-ui/palette'
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


import Logo from '../components/logo'
const drawerWidth = 275;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: palette.palette.primary.background,
    },
    appBar: {
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.text,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        backgroundColor: palette.palette.primary.background,
        color: palette.palette.primary.text,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: palette.palette.primary.text,
      fontFamily: 'Open Sans',
      textDecoration: 'none',
    },
    svgIcon: {
      fill: palette.palette.primary.text,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.text,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
       padding: theme.spacing(1, 1),
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      color: palette.palette.primary.text,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      color: palette.palette.primary.text,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: palette.palette.primary.text,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <GlobalStyles />

      <AppBar
        position="fixed"
         className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <Link to="/"><Container maxWidth="sm"><LogoLarge /></Container></Link>
        <Button variant="outlined" color={theme.palette.primary.text}    aria-label="open drawer"
            onClick={handleDrawerOpen} size="medium"
            className={clsx(classes.menuButton, open && classes.hide)}>
        Menu
      </Button>


         {/* <Container> <a href="tel:01295402447" rel="nofollow" margin="1rem"><PhoneIcon /></a></Container> */}


          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={clsx(classes.menuButton, open && classes.hide)}/>
            </div>
            <InputBase
              placeholder="Search…"
              className={clsx(classes.menuButton, open && classes.hide)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <br />
        <Container>  <a href="tel:01295402447" rel="nofollow" className={clsx(classes.menuButton, open && classes.hide)}  fill={palette.palette.primary.text} >
          <Phone /></a> </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>


             <MenuIcon
            aria-label="close drawer"
            onClick={handleDrawerClose}

        />


        </div>
        <Divider />
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        <Divider />
        <List   >
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
        </List>
        <Divider />
        <List>
        <a href="tel:01295402447" rel="nofollow">
            <ListItem button >
              <ListItemIcon><PhoneIcon /></ListItemIcon>
              <ListItemText>Call us now</ListItemText>
            </ListItem></a>
            <a href="mailto: jon@lawnsmatter.co.uk?subject=Lawn%20Care%20Enquiry&body=Dear%20Jon,%0d%0dI%20am%20interested%20in%20the%20Lawn%20Care%20Services%20that%20I%20have%20read%20about%20on%20your%20website,%20would%20you%20please%20contact%20me%20to%20book%20a%20lawn%20assessment.%0d%0dMy%20contact%20details%20are...%0d%0dName:%0dAddress:%0dPost%20code:%0dPhone%20number:%0dEmail:%0d%0dKind%20regards,%0d%0d" rel="nofollow">
            <ListItem button >
              <ListItemIcon><EmailIcon /></ListItemIcon>
              <ListItemText>Email us</ListItemText>
            </ListItem></a>
        </List>
        <Divider />        <List>
        <a href="https://www.facebook.com/lawnsmatter" rel="nofollow">
            <ListItem button >
              <ListItemIcon><FacebookIcon /></ListItemIcon>
              <ListItemText>Facebook</ListItemText>
            </ListItem></a>
            <Link to="/instagram">
            <ListItem button >
              <ListItemIcon><InstagramIcon /></ListItemIcon>
              <ListItemText>Instagram</ListItemText>
            </ListItem></Link>
        </List>
          <Divider />
        <List>
        <a href="https://www.gappsapps.co.uk" rel="nofollow">
            <ListItem button >
              <ListItemIcon><GappsappsPWA /></ListItemIcon>
            </ListItem></a>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>

    </div>
  );
}
