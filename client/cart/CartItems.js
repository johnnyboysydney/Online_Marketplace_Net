import React, {Component} from 'react'
import auth from './../auth/auth-helper'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import cart from './cart-helper.js'
import {Link} from 'react-router-dom'

const styles = theme => ({

})

class CartItems extends Component {
    state = {
      cartItems: [],
    }

    componentDidMount = () => {
        this.setState({cartItems: cart.getCart()})
    }

    handleChange = index => event => {
        let cartItems = this.state.cartItems
        if(event.target.value == 0){
          cartItems[index].quantity = 1
        }else{
          cartItems[index].quantity = event.target.value
        }
        this.setState({cartItems: cartItems})
        cart.updateCart(index, event.target.value)
    }

    getTotal() {
        return this.state.cartItems.reduce((a, b) => {
            return a + (b.quantity*b.product.price)
        }, 0)
    }

    removeItem = index => event => {
        let cartItems = cart.removeItem(index)
        if(cartItems.length == 0){
          this.props.setCheckout(false)
        }
        this.setState({cartItems: cartItems})
    }

    openCheckout = () => {
        this.props.setCheckout(true)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


export default withStyles(styles)(CartItems)