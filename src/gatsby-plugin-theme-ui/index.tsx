interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  palette: {
    primary: {
    [key: string]: string
       }
    secondary: {
      [key: string]: string
         }
    contrastThreshold: {[key: string]: string}
    tonalOffset: {[key: string]: string}
  }
  typography: {[key: string]: string}
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebar:{
    width: {
      big:  {[key: string]: string}
      normal: {[key: string]: string}
    }
    height: { [key: string]: string }
    }
  toolbar:{
    height: {
      big:  string
      normal: {[key: string]: string}
    }
    width: string
    }
  
}

const theme: ThemeShape = {
  breakpoints: ['0px', '600px', '960px', '1280px', '1920px'],
 // fontSizes: ['.6rem', '1rem', '1.2rem', '1.728rem', '2.074rem', '2.488rem'],
//  fontSizes: ['70%', '90%', '110%', '144%', '172.8%', '207.4%', '248.8%'],
  fontSizes: ['70%', '90%', '1.2rem', '1.728rem', '2.074rem', '2.488rem'],
 // fontSizes: ['70%', '90%', '110%', '144%', '172.8%', '207.4%', '248.8%'],
  initialColorMode: 'primary',
  useCustomProperties: true,
  palette: {
    background: {
      default: '#2f3644',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#656681',
      main: '#2f3644',
      text: '#fff',
      background: '#2f3644',
      active: '#90C03E',
      grey: '#2B2C3E',
      shade: '#f5f5f5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#89B940',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000',
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
    htmlFontSize: '16',
    pxToRem: 'f ()',
    round: 'f k()',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',		
    h1: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '300',
    fontSize: '6rem',
    lineHeight: '1.167',
    letterSpacing: '-0.01562em',
  },
    h2: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '300',
    fontSize: '3.75rem',
    lineHeight: '1.2',
    letterSpacing: '-0.00833em',
  },
    h3: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '3rem',
    lineHeight: '1.167',
    letterSpacing: '0em',
  },
    h4: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '2.125rem',
    lineHeight: '1.235',
    letterSpacing: '0.00735em',
  },
    h5: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '1.5rem',
    lineHeight: '1.334',
    letterSpacing: '0em',
  },
    h6: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '500',
    fontSize: '1.25rem',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
  },
    subtitle1: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.75',
    letterSpacing: '0.00938em',
  },
    subtitle2: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.57',
    letterSpacing: '0.00714em',
  },
    body1: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
  },
    body2: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
  },
    button: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    textTransform: 'none' ,
  },
    caption: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '0.75rem',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
  },
    overline: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    fontSize: '0.75rem',
    lineHeight: '2.66',
    letterSpacing: '0.08333em',
    textTransform: 'none',
    },
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 600,
  },
  sidebar: {
    width: {
      big: '275px',
      normal: '240px',
    },
    height: '100%',
  },
  toolbar: {
    height: {
      big: '150px',
      normal: '120px',
        },
    width: '100%',
  },
 }


export default theme
