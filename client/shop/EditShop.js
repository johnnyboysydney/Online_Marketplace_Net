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

const styles = theme => ({})

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
      componentDidMount = () => {}
      clickSubmit = () => {}
      handleChange = name => event => {}

      render() {
        const logoUrl = this.state.id
            ? `/api/shops/logo/${this.state.id}?${new Date().getTime()}`
            : '/api/shops/defaultphoto'
        if (this.state.redirect) {
            return (<Redirect to={'/seller/shops'}/>)
        }
        const {classes} = this.props
        return (
            <div>
                <Grid>
                    <Grid>
                        <Card>
                            <CardContent>
                                <Typography>
                                    Edit Shop
                                </Typography>
                                <br/>
                                <Avatar />
                                <input />
                                <label>
                                    <Button>
                                        Change Logo
                                        <FileUpload />
                                    </Button>
                                </label> <span className={classes.filename}>{this.state.image ? this.state.image.name : ''}</span><br/>
                                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>

                                <Typography type="subheading" component="h4" className={classes.subheading}>
                                    Owner: {this.state.owner}
                                </Typography><br/>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Update</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <MyProducts shopId={this.match.params.shopId}/>
                    </Grid>
                </Grid>
            </div>
        )
      }
}

EditShop.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(EditShop)