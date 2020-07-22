import React, {Component} from 'react'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {read} from './api-shop.js'
import Products from '../product/products.js'
import {listByShop} from './../product/api-product.js'

const styles = theme => ({})

class Shop extends Component {
    constructor({match}) {
        super()
        this.state = {
            shop: '',
            products: []
        }
        this.match = match
    }

    loadProducts = () => {

    }

    componentDidMount = () => {

    }

    render() {
        const logoUrl = this.state.shop._id
              ? `/api/shops/logo/${this.state.shop._id}?${new Date().getTime()}`
              : '/api/shops/defaultphoto'
        const {classes} = this.props
        return (<div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography type="headline" component="h2" className={classes.title}>
                    {this.state.shop.name}
                  </Typography>
                  <br/>
                  <Avatar src={logoUrl} className={classes.bigAvatar}/><br/>
                    <Typography type="subheading" component="h2" className={classes.subheading}>
                      {this.state.shop.description}
                    </Typography><br/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Card>
                <Typography type="title" component="h2" className={classes.productTitle}>Products</Typography>
                <Products products={this.state.products} searched={false}/>
              </Card>
            </Grid>
          </Grid>
        </div>)
      }
}


Shop.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Shop)
  