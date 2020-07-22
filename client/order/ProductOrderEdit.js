import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import auth from './../auth/auth-helper'
import {getStatusValues, update, cancelProduct, processCharge} from './api-order.js'

const styles = theme => ({
    nested: {
      paddingLeft: theme.spacing.unit * 4,
      paddingBottom: 0
    },
    listImg: {
      width: '70px',
      verticalAlign: 'top',
      marginRight: '10px'
    },
    listDetails: {
      display: "inline-block"
    },
    listQty: {
      margin: 0,
      fontSize: '0.9em',
      color: '#5f7c8b'
    },
    textField: {
      width: '160px',
      marginRight: '16px'
    },
    statusMessage: {
      position: 'absolute',
      zIndex: '12',
      right: '5px',
      padding: '5px'
    }
  })

class ProductOrderEdit extends Component {
    state = {
        open: 0,
        statusValues: [],
        error: ''
    }

    loadStatusValues = () => {

    }

    componentDidMount = () => {
        this.loadStatusValues()
    }

    handleStatusChange = product => event => {

    }

    render() {
        const { classes } = this.props
        return (
            <div>

            </div>
        )
    }
}

export default withStyles(styles)(ProductOrderEdit)