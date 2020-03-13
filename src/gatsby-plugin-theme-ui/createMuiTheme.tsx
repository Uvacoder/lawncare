const theme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans'
        },
        overrides: {
            MuiCssBaseline: {
              '@global': {
                '@font-face': [open sans],
              },
            },
          },
        });
        
        // ...
        return (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        );
  });