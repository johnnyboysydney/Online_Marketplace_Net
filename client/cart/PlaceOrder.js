import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {create} from './../order/api-order.js'
import {Redirect} from 'react-router-dom'

const styles = theme => ({})

class PlaceOrder extends Component {
    state = {
      order: {},
      error: '',
      redirect: false
    }
    placeOrder = ()=>{}

    render() {
        const {classes} = this.props
        return (
            <div>

            </div>
        )
        }    
}

PlaceOrder.propTypes = {
    classes: PropTypes.object.isRequired,
    checkoutDetails: PropTypes.object.isRequired
  }
  
  export default injectStripe(withStyles(styles)(PlaceOrder))