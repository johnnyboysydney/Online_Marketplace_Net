import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import {list} from './api-product.js'
import Products from './Products'

const styles = theme => {

}
class Search extends Component {
    state= {
        category: '',
        search: '',
        results: [],
        searched: false
    }

    handleChange = name => {
        this.setState({
            [name]: event.target.value,
        })
    }

    search = () => {
        if (this.state.search) {
            list({})
        }
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
}
  
export default withStyles(styles)(Search)