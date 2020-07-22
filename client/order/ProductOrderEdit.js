import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

const styles = theme => ({

})

class ProductOrderEdit extends Component {
    state = {
        open: 0,
        statusValues: [],
        error: ''
    }

    loadStatusValues = () => {

    }

    componentDidMount = () => {
        this.loadStatusValues()
    }

    handleStatusChange = product => event => {

    }

    render() {
        const { classes } = this.props
        return (
            <div>

            </div>
        )
    }
}

export default withStyles(styles)(ProductOrderEdit)