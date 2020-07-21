import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import GridList, { GridListTile } from 'material-ui/GridList'
import Icon from 'material-ui/Icon'
import {list} from './api-product.js'
import Products from './Products'

const styles = theme => ({


})

class Categories extends Component {
    state = {
      products: [],
      selected: ''
    }
    componentWillReceiveProps = (props) => {
      this.setState({selected: props.categories[0]})
      list({
        category: props.categories[0]
      })
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState({products: data})
        }
      })
    }

    listByCategory = category => event => {}

    render() {
        const {classes} = this.props
        return (
            <div>

            </div>
            )
    }
}

Categories.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  }
  
  export default withStyles(styles)(Categories)
  