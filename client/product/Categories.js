import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'

const styles = theme => ({


})

class Categories extends Component {
    state = {
      products: [],
      selected: ''
    }
    componentWillReceiveProps = (props) => {}

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
  