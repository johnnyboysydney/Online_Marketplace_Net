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
        const {classes} = this.props
        return (
        <div>
          <Paper className={classes.root} elevation={4}>
            <Typography type="title" className={classes.title}>
              Orders in {this.match.params.shop}
            </Typography>
            <List dense >
              {this.state.orders.map((order, index) => {
                return   <span key={index}>
                  <ListItem button onClick={this.handleClick(index)}>
                    <ListItemText primary={'Order # '+order._id} secondary={(new Date(order.created)).toDateString()}/>
                    {this.state.open == index ? <ExpandLess /> : <ExpandMore />}
                  </ListItem><Divider/>
                  <Collapse component="li" in={this.state.open == index} timeout="auto" unmountOnExit>
                    <ProductOrderEdit shopId={this.match.params.shopId} order={order} orderIndex={index} updateOrders={this.updateOrders}/>
                    <div className={classes.customerDetails}>
                      <Typography type="subheading" component="h3" className={classes.subheading}>
                        Deliver to:
                      </Typography>
                      <Typography type="subheading" component="h3" color="primary"><strong>{order.customer_name}</strong> ({order.customer_email})</Typography>
                      <Typography type="subheading" component="h3" color="primary">{order.delivery_address.street}</Typography>
                      <Typography type="subheading" component="h3" color="primary">{order.delivery_address.city}, {order.delivery_address.state} {order.delivery_address.zipcode}</Typography>
                      <Typography type="subheading" component="h3" color="primary">{order.delivery_address.country}</Typography><br/>
                    </div>
                  </Collapse>
                  <Divider/>
                </span>})}
            </List>
          </Paper>
        </div>)
      }

}

ShopOrders.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(ShopOrders)