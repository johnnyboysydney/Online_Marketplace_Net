import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import AddCartIcon from 'material-ui-icons/AddShoppingCart'
import DisabledCartIcon from 'material-ui-icons/RemoveShoppingCart'
import cart from './cart-helper.js'
import { Redirect } from 'react-router-dom'

class AddToCart extends Component {
    state = {
        redirect: false
    }
    addToCart = () => {

    }
    render() {
        
    }
}

AddToCart.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    cartStyle: PropTypes.string
}
  
export default withStyles(styles)(AddToCart)
  