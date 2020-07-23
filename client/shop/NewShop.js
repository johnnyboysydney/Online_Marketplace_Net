import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import auth from './../auth/auth-helper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {create} from './api-shop.js'
import {Link, Redirect} from 'react-router-dom'

const styles = theme => ({

})

class NewShop extends Component {
  state = {
      name: '',
      description: '',
      image: '',
      redirect: false,
      error: ''
  }
  componentDidMount = () => {
    this.shopData = new FormData()
  }
  handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    this.shopData.set(name, value)
    this.setState({ [name]: value })
  }
  clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    create({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, this.shopData).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({error: '', redirect: true})
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/seller/shops'}/>)
    }
    const {classes} = this.props
    return (<div>

    </div>)
  }
}

NewShop.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewShop)
