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
    loadProduct = (productId) => {

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
            <div>
                
            </div>
        )
    }
}


Product.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Product)