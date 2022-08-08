import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1897ff',
    },
    secondary: {
      main: '#eea47f',
    },
  },
})

export const CustomThemeProvider = ({ children }) =>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
