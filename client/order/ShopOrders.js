import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Collapse from 'material-ui/transitions/Collapse'
import Divider from 'material-ui/Divider'

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 5
    }),
})

class ShopOrders extends Component {
    constructor({match}) {
        super()
        this.state = {
          open: 0,
          orders:[]
        }
        this.match = match
    }

    loadOrders = () => {

    }
    
    componentDidMount = () => {
        this.loadOrders()
    }

    handleClick = index => event => {
        this.setState({ open: index })
    }

    updateOrders = () => {

    }

    render() {
        const { classes } = this.props
        return (
            <div>
                
            </div>
        )
    }

}

ShopOrders.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(ShopOrders)