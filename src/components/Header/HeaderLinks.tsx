/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from 'gatsby';

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import menuIcon from "@material-ui/icons/Apps";
// import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
// import Button from "../../components/CustomButtons/Button";
import headerLinksStyle from "./headerLinksStyle";
// const useStyles = makeStyles(headerLinksStyle);
import palette from '../../gatsby-plugin-theme-ui/palette'

function HeaderLinks({ ...props }) {
   const { classes } = props
  // const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: palette.palette.primary.background,
            fontWeight: "400"
          }}
          buttonIcon={menuIcon}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink} activeClassName={classes.dropdownLinkActive}  >
              Home
            </Link>,
            <Link to="/servicecatalog" className={classes.dropdownLink} activeClassName={classes.dropdownLinkActive} >
              Services
            </Link>,
            <Link to="/about" className={classes.dropdownLink} activeClassName={classes.dropdownLinkActive} >
              About
            </Link>, 
            <Link to="/portfolio" className={classes.dropdownLink} activeClassName={classes.dropdownLinkActive} >
              Portfolio
            </Link>,
            <Link to="/contactus" className={classes.dropdownLink} activeClassName={classes.dropdownLinkActive} >
              Contact Us
            </Link>,
            <a
              href="https://hometurf.systems"
              target="_blank"
              className={classes.dropdownLink}
            >
              Log in
            </a>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks)