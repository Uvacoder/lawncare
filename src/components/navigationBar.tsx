
import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import PhoneNo from '../components/phoneNo'
import SimpleMenu from './SimpleMenu'
import PhoneIcon from '@material-ui/icons/Phone'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavigationBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      ListItemText: {
        color: theme.palette.primary.contrastText,
      }
    }
));

export default function NavigationBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
<div><Container className={classes.NavigationBar} alignItems="space-between">

<ListItem button >  <Link to="/"><Container  alignItems="center">
<Button       
        variant="contained"
        color="white"
        className={classes.button}
        aria-label="Link to Home page"
        startIcon={<HomeIcon alignItems="center" />}>
          

</Button>
</Container>
          </Link>  </ListItem>
            <ListItem button ><Container alignItems="center" > <Button       
        variant="outlined"
        color="white"
        aria-label="Menu Button"
        className={classes.button}
        startIcon={<SimpleMenu alignItems="center" />}>
          

</Button> </Container></ListItem>

           
<ListItem><Container alignItems="center" ><a href={`tel:${<PhoneNo />}`} rel="nofollow">
  <Button       
        variant="contained"
        color={theme.palette.secondary.main}
        aria-label="Call us"
        className={classes.button}
        startIcon={<PhoneIcon alignItems="center" />}
        padding={theme.typography.h4.fontSize} >
          Call
          </Button> </a></Container></ListItem>
  
</Container></div>
    )}

