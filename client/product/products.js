import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'

const styles = theme => ({

})

class Products extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div>
                    <GridList>
                        <GridListTile>
                            <Link to = {"/product/" + product._id}><img className = {classes.image} src={'/api/product/image' + product._id} alt = {product.name} /></Link>
                                <GridListTileBar>
                                    title={}
                                    subtitle={}
                                    actionIcon={
                                        <AddToCart item = {product} />
                                    }
                                </GridListTileBar>
                        </GridListTile>
                    </GridList>
                </div>
            </div>
        )
    }
}

Products.propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    searched: PropTypes.bool.isRequired
}
  
export default withStyles(styles)(Products)
  