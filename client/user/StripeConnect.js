import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import queryString from 'query-string'
import {stripeUpdate} from './api-user.js'
import auth from './../auth/auth-helper'

const styles = theme => ({

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