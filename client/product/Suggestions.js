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
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        color: theme.palette.openTitle,
        fontSize: '1.1em'
    }
})

class Suggestions extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <Paper className = { classes.root } elevation={4}>
                    <Typography type = "title" className = { classes.title } >
                        { this.props.title }
                    </Typography>
                    {this.props.products.map((item, i) => {
                        return 
                          <span key = {i}>
                            <Card className = { classes.Card } >
                                <CardMedia />
                                <div className = { classes.details }>
                                    <CardContent className = { classes.content }>
                                        <Link></Link>
                                        <Link>
                                            <Typography></Typography>
                                        </Link>
                                        <Typography>
                                            Added on
                                        </Typography>
                                    </CardContent>
                                    <div className = { classes.controls }>
                                        <Typography></Typography>
                                            <span>
                                                <Link>
                                                <IconButton>
                                                    <ViewIcon />
                                                </IconButton>
                                                </Link>
                                                <AddToCart />
                                            </span>
                                    </div>
                                </div>
                            </Card>
                            <Divider />
                          </span>
                    })},
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