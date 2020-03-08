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
  raisedContainer: {[key: string]: string}
  raisedHeader: {[key: string]: string}
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
    width: {
      big:  {[key: string]: string}
      normal: {[key: string]: string}
    }
    height: { 
      [key: string]: string
    }
  }
}

const theme: ThemeShape = {
  breakpoints: ['0px', '600px', '960px', '1280px', '1920px'],
  // fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  fontSizes: ['75%', '100%', '120%', '144%', '172.8%', '207.4%', '248.8%'],
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
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  // raisedContainer: {
  //   padding: '30px 0',
  //   margin: '0',
  //   boxShadow: '0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2)',
  //   borderRadius: '6px',
  //   zIndex: '3',
  //   position: 'relative',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minWidth: '0',
  //   wordWrap: 'break-word',
  //   fontSize: '1rem ',
  //   transition: 'all 300ms linear ' ,
  // },
  // raisedHeader: {
  //   padding: '30px 0',
  //   margin: '0',
  //   boxShadow: '0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2)',
  //   borderRadius: '0px',
  //   zIndex: '3',
  //   position: 'relative',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minWidth: '0',
  //   wordWrap: 'break-word',
  //   fontSize: '1rem ',
  //   transition: 'all 300ms linear ' ,
  // },
  // colors: {
  //   text: '#fff',
  //   background: '#2f3644',
  //   active: '#90C03E',
  //   primary: '#2f3644',
  //   secondary: '#577C38',
  //   grey: '#2f3644',
  //   shade: '#f5f5f5',
  //     modes: {
  //       dark: {
  //         text: '#000',
  //         background: '#fff',
  //         active: '#90C03E',
  //         primary: '#7f1734',
  //         secondary: '#1339AC',
  //         grey: '#2B2C3E',
  //         shade: '#f5f5f5',
  //       }
  //     }
  //   },
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
