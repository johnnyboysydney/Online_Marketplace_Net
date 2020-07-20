import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'

const styles = theme => ({ 
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
})

class Signin extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    }
    clickSubmit = () => {
        const user = {
          email: this.state.email || undefined,
          password: this.state.password || undefined
        }
    
        signin(user).then((data) => {
          if (data.error) {
            this.setState({error: data.error})
          } else {
            auth.authenticate(data, () => {
              this.setState({redirectToReferrer: true})
            })
          }
        })
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }
    render() {
        const {classes} = this.props
        const {from} = this.props.location.state || {
            from: {
                pathname: '/'
            }
        }
        const {redirectToReferrer} = this.state
        if (redirectToReferrer) {
            return (<Redirect to ={from}/>)
        }
    }
  
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Signin)