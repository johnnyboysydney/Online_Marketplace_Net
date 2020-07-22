import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardMedia} from 'material-ui/Card'
import { ListItem, Divider, IconButton } from 'material-ui'
import Typography from 'material-ui/styles/typography'
import { Edit, Delete } from 'material-ui-icons'

const styles = theme => ({
  products: {
    padding: '24px'
  },
  addButton:{
    float:'right'
  },
  leftIcon: {
    marginRight: "8px"
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  subheading: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  cover: {
    width: 110,
    height: 100,
    margin: '8px'
  },
  details: {
    padding: '10px'
  },
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
        <List dense>
          {this.state.products.map((product, i) => {
            return <span key = {i}>
              <ListItem>
                  <CardMedia
                    className = { classes.cover }
                    image = { '/api/product/image' + product._id + "?" + new Date().getTime() }
                    title = { product.name }
                  />
                  <div className={classes.details} >
                    <Typography type="headline" component="h2" color="primary" className={classes.productTitle} >
                      { product.name }
                    </Typography>
                    <Typography type="subheading" component="h4" className={classes.subheading} >
                      Quantity: { product.quantity } | Price: $ {product.price}
                    </Typography>
                  </div>
                  <ListItemSecondaryAction>
                      <Link to={"/seller/"+product.shop._id+"/"+product._id+"/edit"} >
                        <IconButton aria-label="Edit" color="primary" >
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
