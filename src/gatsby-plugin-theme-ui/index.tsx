interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
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
  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    text: '#fff',
    background: '#2f3644',
    active: '#90C03E',
    primary: '#2f3644',
    secondary: '#577C38',
    grey: '#2f3644',
    shade: '#f5f5f5',
      modes: {
        dark: {
          text: '#000',
          background: '#fff',
          active: '#90C03E',
          primary: '#7f1734',
          secondary: '#1339AC',
          grey: '#2B2C3E',
          shade: '#f5f5f5',
        }
      }
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
