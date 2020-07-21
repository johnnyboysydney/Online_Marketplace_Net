import React, {Component} from 'react'
import auth from './../auth/auth-helper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'

const styles = theme => ({})

class EditProduct extends Component {
    constructor({match}) {
        super()
        this.state = {
          name: '',
          description: '',
          image: '',
          category: '',
          quantity: '',
          price: '',
          redirect: false,
          error: ''
        }
        this.match = match
    }

    componentDidMount = () => {

    }

    clickSubmit = () => {

    }

    handleChange = name => event => {

    }

    render() {
        const imageUrl = this.state.id
            ? `/api/product/image/${this.state.id}?${new Date().getTime()}`
            : '/api/product/defaultphoto'
        if (this.state.redirect) {
            return (<Redirect to={'/seller/shop/edit/'+this.match.params.shopId}/>)
        }
        const {classes} = this.props
        return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Edit Product
                    </Typography><br/>
                </CardContent>
            </Card>
        </div>
        )
    }
    
}