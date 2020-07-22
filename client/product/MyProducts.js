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
    listByShop({
      shopId: this.props.shopId
    }).then((data)=>{
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({products: data})
      }
    })
  }

  componentDidMount = () => {
   this.loadProducts()
  }

  removeProduct = (product) => {
    const updatedProducts = this.state.products
    const index = updatedProducts.indexOf(product)
    updatedProducts.splice(index, 1)
    this.setState({shops: updatedProducts})
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
