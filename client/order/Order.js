import React, {Component} from 'react'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import {withStyles} from 'material-ui/styles'

const styles = theme => ({

})

class Order extends Component {
    constructor({match}) {
      super()
      this.state = {
        order: {products:[], delivery_address:{}},
      }
      this.match = match
    }

    componentDidMount = () => {
        read({
          orderId: this.match.params.orderId
        })
        .then((data) => {
          if (data.error) {
            this.setState({error: data.error})
          } else {
            this.setState({order: data})
          }
        })
    }
}

Order.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Order)
  