import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemText} from 'material-ui/List'

const styles = theme => ({})

class ShopOrders extends Component {}

ShopOrders.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(ShopOrders)