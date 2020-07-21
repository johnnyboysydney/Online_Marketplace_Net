import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'

class NewShop extends Component {}

NewShop.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(NewShop)