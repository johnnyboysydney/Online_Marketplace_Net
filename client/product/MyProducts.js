import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardMedia} from 'material-ui/Card'
import { ListItem, Divider, IconButton } from 'material-ui'
import Typography from 'material-ui/styles/typography'
import { Edit, Delete } from 'material-ui-icons'

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
        <Typography type="title" className={classes.title}>
          Products
          <span className={classes.addButton}>
            <Link to={"/seller/"+this.props.shopId+"/products/new"}>
              <Button color="primary" variant="raised">
                <Icon className={classes.leftIcon}>add_box</Icon>  New Product
              </Button>
            </Link>
          </span>
        </Typography>
        <List>
          {this.state.products.map((product) => {
            return <span key = {i}>
              <ListItem>
                  <CardMedia
                    className = { classes.cover }
                    image = { '/api/product/image' + product._id + "?" + new Date().getTime() }
                    title = { product.name }
                  />
                  <div>
                    <Typography>
                      { product.name }
                    </Typography>
                    <Typography>
                      Quantity: { product.quantity } | Price: $ {product.price}
                    </Typography>
                  </div>
                  <ListItemSecondaryAction>
                      <Link>
                        <IconButton>
                          <Edit />
                        </IconButton>
                      </Link>
                      <DeleteProduct
                      product = { product }
                      shopId = { this.props.shopId }
                      onRemove = { this.removeProduct } />
                  </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </span>
          })}
        </List>
      </Card>)
  }
}
MyProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  shopId: PropTypes.string.isRequired
}

export default withStyles(styles)(MyProducts)
