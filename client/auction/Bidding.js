import React, {useState, useEffect}  from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import auth from '../auth/auth-helper'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const io = require('socket.io-client')
const socket = io()

const useStyles = makeStyles(theme => ({
  bidHistory: {
      marginTop: '20px',
      backgroundColor: '#f3f3f3',
      padding: '16px'
  },
  placeForm: {
      margin: '0px 16px 16px',
      backgroundColor: '#e7ede4',
      display: 'inline-block'
  },
  marginInput: {
      margin: 16
  },
  marginBtn: {
      margin: '8px 16px 16px'
  }
}))

export default function Bidding (props) {
  const classes = useStyles()
    const [bid, setBid] = useState('')

    const jwt = auth.isAuthenticated()

    useEffect(() => {
        socket.emit('join auction room', {room: props.auction._id})
        return () => {
            socket.emit('leave auction room', {
              room: props.auction._id
            })
          }
    }, [])
    useEffect(() => {
      socket.on('new bid', payload => {
        props.updateBids(payload)
      })
      return () => {
          socket.off('new bid')
      }
  })
  const handleChange = event => {
      setBid(event.target.value)
  }
  const placeBid = () => {
    let newBid = {
        bid: bid,
        time: new Date(),
        bidder: jwt.user
    }
    socket.emit('new bid', {
        room: props.auction._id,
        bidInfo:  newBid
    })
    setBid('')
}
}
