import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'

class Shops extends Component {
    state = {
        shops:[]
    }
    loadShops = () => {}
    componentDidMount = () => {

    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

Shops.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Shops)
  