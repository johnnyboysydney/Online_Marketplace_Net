import React, {Component} from 'react'
import auth from './../auth/auth-helper'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {read, update} from './api-shop.js'
import {Redirect} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import MyProducts from './../product/MyProducts'

const styles = theme => ({

})

class EditShop extends Component {
  constructor({match}) {
    super()
    this.state = {
      name: '',
      description: '',
      image: '',
      redirect: false,
      error: ''
    }
    this.match = match
  }

  componentDidMount = () => {
    this.shopData = new FormData()
    const jwt = auth.isAuthenticated()
    read({
      shopId: this.match.params.shopId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({id: data._id, name: data.name, description: data.description, owner: data.owner.name})
      }
    })
  }
  clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    update({
      shopId: this.match.params.shopId
    }, {
      t: jwt.token
    }, this.shopData).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({'redirect': true})
      }
    })
  }
  handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    this.shopData.set(name, value)
    this.setState({ [name]: value })
  }

  render() {
    const logoUrl = this.state.id
          ? `/api/shops/logo/${this.state.id}?${new Date().getTime()}`
          : '/api/shops/defaultphoto'
    if (this.state.redirect) {
      return (<Redirect to={'/seller/shops'}/>)
    }
    const {classes} = this.props

    </div>)
  }
}

EditShop.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditShop)
