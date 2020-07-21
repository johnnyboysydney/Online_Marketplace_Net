import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import PlaceOrder from './PlaceOrder'
import {Elements} from 'react-stripe-elements'

const styles = theme => ({ 

})


class Checkout extends Component {
    state = {
        checkoutDetails: {
            customer_name: '',
            customer_email:'',
            delivery_address: { street: '', city: '', state: '', zipcode: '', country:''}
          },
          error: ''
    }

    componentDidMount = () => {}

    handleCustomerChange = nanme => event => {

    }

    handleAddressChnage = name => event => {

    }

    render() {
        const {classes} = this.props
        return (
            <div>

            </div>
        )
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Checkout)