import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import auth from './../auth/auth-helper'
import cart from './cart-helper.js'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {create} from './../order/api-order.js'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  subheading: {
    color: 'rgba(88, 114, 128, 0.87)',
    marginTop: "20px",
  },
  checkout: {
    float: 'right',
    margin: '20px 30px'
  },
  error: {
    display: 'inline',
    padding: "0px 10px"
  },
  errorIcon: {
    verticalAlign: 'middle'
  },
  StripeElement: {
    display: 'block',
    margin: '24px 0 10px 10px',
    maxWidth: '408px',
    padding: '10px 14px',
    boxShadow: 'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
    borderRadius: '4px',
    background: 'white'
  }
}))

// Commented out hardcoding stripe elements.
/*   
    var stripe = require('stripe')('sk_test_51H6E6yEV0d7rwUXNpphZoFt42839vrqg8xgsdAnQcAuSrlxUS1GPRMrwP0gvdaqhgS9PpeESEwZtEorIo5cvaG95003wMGphVr');
  
    stripe.tokens.create(
      {
        card: {
          number: '4242424242424242',
          exp_month: 7,
          exp_year: 2022,
          cvc: '314',
        },
      },
      function(err, token) {
        // asynchronously called
        console.log(err)
        console.log(token)
      }
    );
 */

// Commentining out Stripe, although working, I still need more time to get the stripe to return the token and the OAuth

const PlaceOrder = (props) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    order: {},
    error: '',
    redirect: false,
    orderId: ''
  })

  const placeOrder = ()=>{
    props.stripe.createToken().then(payload => {
      if(payload.error){
        setValues({...values, error: payload.error.message})
      }else{
        const jwt = auth.isAuthenticated()
        create({userId:jwt.user._id}, {
          t: jwt.token
        }, props.checkoutDetails, payload.token.id).then((data) => {
          if (data.error) {
            setValues({...values, error: data.error})
          } else {
            cart.emptyCart(()=> {
              setValues({...values, 'orderId':data._id,'redirect': true})
            })
          }
        })
      }
  })
}
  //post to server with cart data
  //server turns this into an order
  //returns order id to post request
  //client then goes to order/orderid
  //server dynamically displays that page

  if (values.redirect) {
    return (<Redirect to={'/order/' + values.orderId}/>)
  }
  return (
  <span>
    <Typography type="subheading" component="h3" className={classes.subheading}>
      Card details
    </Typography>
    <CardElement
      className={classes.StripeElement}
        {...{style: {
                      base: {
                        color: '#424770',
                        letterSpacing: '0.025em',
                        fontFamily: 'Source Code Pro, Menlo, monospace',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    }
        }}
    />
    <div className={classes.checkout}>
      { values.error &&
        (<Typography component="span" color="error" className={classes.error}>
          <Icon color="error" className={classes.errorIcon}>error</Icon>
            {values.error}
        </Typography>)
      }
      <Button color="secondary" variant="contained" onClick={placeOrder}>Place Order</Button>
    </div>
  </span>)

}
PlaceOrder.propTypes = {
checkoutDetails: PropTypes.object.isRequired
}

export default injectStripe(PlaceOrder)
