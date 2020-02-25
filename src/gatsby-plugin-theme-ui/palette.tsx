
const palette: Palette = {

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#656681',
      main: '#2f3644',
      text: '#fff',
      background: '#2f3644',
      active: '#90C03E',
      primary: '#2f3644',
      grey: '#2B2C3E',
      shade: '#f5f5f5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },

    fontWeights: {
      normal: 300,
      bold: 600,
    },
    sidebarWidth: {
      big: '275px',
      normal: '220px',
    },
  raisedContainer: {
    padding: '30px 0',
    margin: '0',
    boxShadow: '0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2)',
    borderRadius: '6px',
    zIndex: '3',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '1rem ',
    transition: 'all 300ms linear ' ,
  },

};

export default palette
