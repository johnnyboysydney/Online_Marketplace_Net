import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'
import Typography from 'material-ui/styles/typography'

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