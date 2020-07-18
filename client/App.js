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
      light: '',
      main: '',
      dark: '',
      contrastText: ''
    },
    secondary: {
      light: '',
      main: '',
      dark: '',
      contrastText: '',
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
