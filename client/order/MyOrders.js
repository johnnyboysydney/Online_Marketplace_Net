import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const styles = theme => ({})
class MyOrders extends Component {
    state = {
        orders: []
    }

    loadOrders = () => {

    }

    componentDidMount = () => {
        this.loadOrders()
    }

    render() {

    }
}

MyOrders.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(MyOrders)
  