import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import {Link} from 'react-router-dom'
import AddToCart from '../cart/AddToCart'

const styles = theme => ({

})

class Products extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                {this.props.products.length > 0 ?
                    (<div className={classes.container}>
                        <GridList cellHeight={200} className={classes.gridList} cols={3}>
                            {this.props.products.map((product, i) => (
                                <GridListTile key = { i } className = { classes.tile }>
                                    <Link to = { "/product/" + product._id }><img className = { classes.image } src = { '/api/product/image' + product._id } alt = { product.name } /></Link>
                                        <GridListTileBar className = { classes.tileBar }
                                            title = {<Link to={ "/product/" + product._id } className = { classes.tileTitle }>{ product.name }</Link>}
                                            subtitle = {<span>$ {product.price}</span>}
                                            actionIcon = {
                                                <AddToCart item = {product} />
                                            }
                                            />
                                        </GridListTile>
                            ))}
                        </GridList>
                    </div>) : this.props.searched && (<Typography type = "subheading" components = "h4" className = {classes.title}>No Products found! :</Typography>)
                }
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
  