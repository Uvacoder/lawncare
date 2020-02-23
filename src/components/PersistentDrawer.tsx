import React from 'react';
import { Link } from 'gatsby'
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LogoSmall from '../components/logoSmall'
import Logo from '../components/logo'
import GappsappsTinyPWA from './gappsappsTinyPWA'
import Instagram from './instagram'
import FacebookIcon from '@material-ui/icons/facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import FolderIcon from '@material-ui/icons/Folder'
import WorkIcon from '@material-ui/icons/Work'
import Email from './email' 
import Home from './home'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
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
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="#000000"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           <Logo />
          </Typography>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <LogoSmall /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link to="/">
            <ListItem button >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem></Link>
            <Link to="/page">
            <ListItem button >
              <ListItemIcon><FolderIcon /></ListItemIcon>
              <ListItemText>Portfolio</ListItemText>
            </ListItem></Link>
            <Link to="/servicecatalog">
            <ListItem button >
              <ListItemIcon><WorkIcon /></ListItemIcon>
              <ListItemText>Service</ListItemText>
            </ListItem></Link>
            <Link to="/aboutus">
            <ListItem button >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>About us</ListItemText>
            </ListItem></Link>
        </List>
        <Divider />
        <List>
        <a href="07747692619" rel="nofollow">
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
              <ListItemIcon><GappsappsTinyPWA /></ListItemIcon>
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
