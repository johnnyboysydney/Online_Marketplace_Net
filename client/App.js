import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {indigo, pink} from 'material-ui/colors'

// Create a theme instance.
const theme = createMuiTheme({ 
  palette: {
    primary:{
      light: '#0979C9',
      main: '#2874A6',
      dark: '#0923C9',
      contrastText: ''
    },
    secondary: {
      light: '#EE96D7',
      main: '#8F09C9',
      dark: '#4809C9',
      contrastText: '#000',
    },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
