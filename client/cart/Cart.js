import React, {Component} from 'react'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import CartItems from './CartItems'
import {StripeProvider} from 'react-stripe-elements'
import config from './../../config/config'
import Checkout from './Checkout'



class Cart extends Component {
    state = {
      checkout: false,
      stripe: null
    }
    
    componentDidMount = () => {
     

    }

    setCheckout = val => {

    }

    render() {
        return
        <div>

        </div>
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Cart)
  