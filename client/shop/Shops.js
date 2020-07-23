import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import {list} from './api-shop.js'
import {Link} from 'react-router-dom'
const styles = theme => ({

})
class Shops extends Component {
  state = {
      shops:[]
  }
  loadShops = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({shops: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadShops()
  }
  render() {
    const {classes} = this.props
    return (
    <div>
      <Paper className={classes.root} elevation={4}>

      </Paper>
    </div>)
  }
}
Shops.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Shops)
