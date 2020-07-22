import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardMedia} from 'material-ui/Card'

const styles = theme => ({

})
class MyProducts extends Component {
  state = {
    products: []
  }

  loadProducts = () => {

  }

  componentDidMount = () => {
   this.loadProducts()
  }

  removeProduct = (product) => {

  }

  render() {
    const {classes} = this.props
    return (
      <Card>

      </Card>)
  }
}
MyProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  shopId: PropTypes.string.isRequired
}

export default withStyles(styles)(MyProducts)
