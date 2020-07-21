import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import {Link} from 'react-router-dom'
import ViewIcon from 'material-ui-icons/Visibility'
import Icon from 'material-ui/Icon'
import Divider from 'material-ui/Divider'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import AddToCart from './../cart/AddToCart'

const styles = theme => ({

})

class Suggestions extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <Paper className = { classes.root } >
                    <Typography type = "title" className = { classes.title } >
                        { this.props.title }
                    </Typography>
                </Paper>
            </div>
        )
    }
}

Suggestions.propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}
  
export default withStyles(styles)(Suggestions)