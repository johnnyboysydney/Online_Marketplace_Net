import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import auth from './../auth/auth-helper'
import {remove} from './api-product.js'
class DeleteProduct extends Component {
    state = {
      open: false
    }
    clickButton = () => {
      this.setState({open: true})
    }
    DeleteProduct = () => {

    }
    handleRequestClose = () => {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

DeleteProduct.propTypes = {
    shopId: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
  }
  export default DeleteProduct
  