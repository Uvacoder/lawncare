import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
		palette: {
			common: {
				black: '#000',
				white: '#fff',
				type: 'light',
			},
			primary: {
				light: '#656681',
				main: '#2f3644',
				main80opacity: 'rgba(47,54,68,0.8)',
				main70opacity: 'rgba(47,54,68,0.7)',
				dark: '#4B4C6B',
				contrastText: '#fff',
			},
			secondary: {
				light: '#656681',
				main: '#90C03E',
				dark: '#577C38',
				contrastText: '#fff',
			},
			error: {
				light: '#e57373',
				main: '#f44336',
				dark: '#d32f2f',
				contrastText: '#fff',
			},
			warning: {
				light: '#ffb74d',
				main: '#ff9800',
				dark: '#f57c00',
				contrastText: 'rgba(0, 0, 0, 0.87)',
			},
			info: {
				light: '#64b5f6',
				main: '#2196f3',
				dark: '#1976d2',
				contrastText: '#fff',
			},
			success:{
				light: '#81c784',
				main: '#4caf50',
				dark: '#388e3c',
				contrastText: 'rgba(0, 0, 0, 0.87)',
			},
			grey:{
				'50': '#fafafa',
				'100': '#f5f5f5',
				'200': '#eeeeee',
				'300': '#e0e0e0',
				'400': '#bdbdbd',
				'500': '#9e9e9e',
				'600': '#757575',
				'700': '#616161',
				'800': '#424242',
				'900': '#212121',
				},
			A100: '#d5d5d5',
			A200: '#aaaaaa',
			A400: '#303030',
			A700: '#616161',
			contrastThreshold: '3',
			tonalOffset: '0.2',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
			divider: 'rgba(0, 0, 0, 0.12)',
			},
		background:	{	
			paper: '#2f3644',
			},
		action: {
			active: 'rgba(144, 192, 62, 0.04)',
			hover: 'rgba(0, 0, 0, 0.04)',
			hoverOpacity: '0.04',
			selected: 'rgba(0, 0, 0, 0.08)',
			selectedOpacity: '0.08',
			disabled: 'rgba(0, 0, 0, 0.26)',
			disabledBackground: 'rgba(0, 0, 0, 0.12)',
			disabledOpacity: '0.38',
			focus: 'rgba(0, 0, 0, 0.12)',
			focusOpacity: '0.12',
			activatedOpacity: '0.12',
			},
		props: {
		shadows: Array(25),
			'0': 'none',
			'1': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
			'2': '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
			'3': '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
			'4': '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
			'5': '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
			'6': '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
			'7': '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
			'8': '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
			'9': '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
			'10': '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
			'11': '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
			'12': '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
			'13': '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
			'14': '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
			'15': '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
			'16': '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
			'17': '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
			'18': '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
			'19': '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
			'20': '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
			'21': '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
			'22': '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
			'23': '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
			'24': '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
			},
		spacing: 0.1,
		typography: {
			htmlFontSize: 16,
			fontFamily: 'Open Sans',
			fontSize: 16,
			fontWeightLight: '300',
			fontWeightRegular: '400',
			fontWeightMedium: '500',
			fontWeightBold: '700',		
			h1: {
				fontFamily: 'Open Sans',
				fontWeight: '700',
				fontSize: '3.5rem',
				lineHeight: '1.167',
				letterSpacing: '-0.01562em',
			},
			h2: {
				fontFamily: 'Open Sans',
				fontWeight: '700',
				fontSize: '2.75rem',
				lineHeight: '1.2',
				letterSpacing: '-0.00833em',
			},
			h3: {
				fontFamily: 'Open Sans',
				fontWeight: '700',
				fontSize: '2rem',
				lineHeight: '1.167',
				letterSpacing: '0em',
	    	},
			h4: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				fontSize: '1.5rem',
				lineHeight: '1.235',
				letterSpacing: '0.00735em',
	    	},
			h5: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				fontSize: '1.2rem',
				lineHeight: '1.334',
				letterSpacing: '0em',
	    	},
			h6: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				fontSize: '1.1rem',
				lineHeight: '1.6',
				letterSpacing: '0.0075em',
	    	},
			subtitle1: {
				fontFamily: 'Open Sans',
				fontWeight: '400',
				fontSize: '1.25rem',
				lineHeight: '1.75',
				letterSpacing: '0.00938em',
	    	},
			subtitle2: {
				fontFamily: 'Open Sans',
				fontWeight: '400',
				fontSize: '1rem',
				lineHeight: '1.57',
				letterSpacing: '0.00714em',
    		},
			body1: {
				fontFamily: 'Open Sans',
				fontWeight: '300',
				fontSize: '1.1rem',
				lineHeight: '1.5',
				letterSpacing: '0.00938em',
	    	},
			body2: {
				fontFamily: 'Open Sans',
				fontWeight: '300',
				fontSize: '1rem',
				lineHeight: '1.43',
				letterSpacing: '0.01071em',
	    	},
			button: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				fontSize: '0.875rem',
				lineHeight: '1.75',
				letterSpacing: '0.02857em',
				textTransform: 'none' ,
		    },
			caption: {
				fontFamily: 'Open Sans',
				fontWeight: '500',
				fontSize: '0.75rem',
				lineHeight: '1.66',
				letterSpacing: '0.03333em',
		    },
			overline: {
				fontFamily: 'Open Sans',
				fontWeight: '400',
				fontSize: '0.75rem',
				lineHeight: '2.66',
				letterSpacing: '0.08333em',
				textTransform: 'none',
			},
		},
		shape: {
			borderRadius: '2px' ,
		},
		sidebar: {
			width: {
				big: '275px',
				normal: '240px',
				main: 'calc(100% - 275px)',
			},
			height: '100%',
			},
			margin: '25px',
		logo: {
			size: {
				md: '275px',
				sm: '200px',
				xs: '170px',
				},
			width: '100%',
		},
		iconButtonBar: {
			display: 'flex',
			flexDirection: 'row',
		  },
		headerImage: {
			height: {
				desktop: 0,
				mobile: 0,
				},
		},
		leafletContainer: {
			height: '85vh',
			width: '100vw',
		},
 });

export default theme;