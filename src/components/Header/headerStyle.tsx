import Container from '@material-ui/core/Container';
import theme from '../../gatsby-plugin-theme-ui/index'
import palette from '../../gatsby-plugin-theme-ui/palette'

const headerStyle = {
  appBar: {
    display: "flex",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: palette.palette.primary.text,
    width: "100%",
    backgroundColor: palette.palette.primary.background,
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: palette.palette.primary.background,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 21, 7, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: palette.palette.primary.text,
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: palette.palette.primary.background,
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: {
    border: "none",
    anchor: "top",
    backgroundColor: palette.palette.primary.background,
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: theme.sidebar.width,
    position: "fixed",
    display: "block",
    top: "0",
    height: "auto",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
  }
};

export default headerStyle;
