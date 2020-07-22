import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import queryString from 'query-string'
import {stripeUpdate} from './api-user.js'
import auth from './../auth/auth-helper'

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle,
    fontSize: '1.1em'
  },
  subheading: {
    color: theme.palette.openTitle,
    marginLeft: "24px"
  }
})

class StripeConnect extends Component {
  state = {
    error: false,
    connecting: false,
    connected: false
  }
  componentDidMount = () => {

  }
  render() {
      return (
          <div>
              
          </div>
      )
  }
}

StripeConnect.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(StripeConnect)