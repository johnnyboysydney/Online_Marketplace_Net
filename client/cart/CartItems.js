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

    }

    handleChange = index => event => {

    }

    getTotal() {

    }

    removeItem = index => event => {

    }

    openCheckout = () => {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


export default withStyles(styles)(CartItems)