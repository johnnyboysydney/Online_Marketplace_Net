import React, {Component} from 'react'
import Card, {CardHeader, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {read, listRelated} from './api-product.js'
import {Link} from 'react-router-dom'
import Suggestions from './../product/Suggestions'
import AddToCart from './../cart/AddToCart'

const styles = theme => ({})

class Product extends Component {
    constructor({match}) {
        super()
        this.state = {
          product: {shop: {}},
          suggestions: [],
          suggestionTitle: 'Related Products'
        }
        this.match = match
    }
    loadProduct = (productId) => {
        read({ productId: productId }).then((data) => {
            if (data.error) {
               this.state({ error: data.error })
            } else {
               this.setState({ product: data })
               listRelated({ productId: data._id })
               .then((data) => {
                   if (data.error) {
                       console.log(data.error)
                   } else {
                       this.setState({ suggestions: data })
                   }
               })
            }
        })
    }
    
    componentDidMount = () => {
        this.loadProduct(this.match.params.productId)
    }
    
    componentWillReceiveProps = (props) => {
        this.loadProduct(props.match.params.productId)
    }
    
    render() {
        const imageUrl = this.state.product._id
            ? `/api/product/image/${this.state.product._id}?${new Date().getTime()}`
            : '/api/product/defaultphoto'
        const {classes} = this.props
        return (
            <div className={ classes.root } >
                <Grid container spacing = {40} >
                    <Grid className={classes.card} >
                        <Card>
                            <CardHeader
                                title={ this.state.product.name }
                                subheader={ this.state.product.quantity > 0 ? 'In Stock' : 'Out of Stock' }
                                action={
                                    <span className = { classes.action } >
                                        <AddToCart cartStyle = { classes.addCart } item = { this.state.product } />
                                    </span>
                                }
                            />
                            <div className = { classes.flex } >
                                <CardMedia 
                                className = { classes.media }
                                image = { imageUrl }
                                title = { this.state.product.name }
                                 />
                                <Typography component = "p" type = "subheading" className = { classes.subheading } >
                                    { this.state.product.description }<br/>
                                    <span className = { classes.price}>$ { this.state.product.price } </span>
                                    <Link to = { '/shops/' + this.state.product.shop._id } className = { classes.link } >
                                        <span>
                                            <Icon className = { classes.icon } >shopping_basket</Icon> { this.state.product.shop.name }
                                        </span>
                                    </Link>
                                </Typography>
                            </div>                        
                        </Card>
                    </Grid>
                    { this.state.suggestions.length > 0 && 
                       (<Grid item xs = {5} sm = {5} >
                           <Suggestions products = { this.state. suggestions } title = 'Related Products' />
                       </Grid>)}
                </Grid>
            </div>
        )
    }
}


Product.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Product)