import React, {Component} from 'react'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'

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
        return (
            <div>
                
            </div>
        )
    }
}


Shop.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Shop)
  