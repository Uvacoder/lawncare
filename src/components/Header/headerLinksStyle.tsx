import { title, principleColor, secondaryColor } from "../../theme/theme";
import tooltip from "../../style/tooltipsStyle";
import palette from '../../gatsby-plugin-theme-ui/palette'

const headerLinksStyle = theme => ({
  list: {
    ...title,
    fontSize: "1rem",
    margin: "0",
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    textDecoration: "none",
     color: palette.palette.primary.background,
  },
  listItem: {
    float: "left",
    color: palette.palette.primary.background,
    linkColor: palette.palette.primary.text,
    position: "relative",
    textDecoration: "none",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "0px",
        marginLeft: "15px",
        backgroundColor: palette.palette.primary.active,
      }
    }
  },
  listItemText: {
    padding: "0 !important",
    textDecoration: "none"
  },
  navLink: {
    color: palette.palette.primary.text,
    position: "relative",
   // padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "1.1rem",
    textTransform: "none",
    borderColor:  palette.palette.primary.text,
    borderRadius: "3px",
    lineHeight: "10px",
    textDecoration: "none",
    display: "inline-flex",
    "&:hover,&:focus": {
      color:  palette.palette.primary.active,
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color:  palette.palette.primary.active,
    backgroundColor:  palette.palette.primary.background,
    textDecoration: "none"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color:  palette.palette.primary.active,
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    },
  },
  dropdownLinkActive: { 
    color:  palette.palette.primary.active, 
    backgroundColor: palette.palette.primary.background,
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
