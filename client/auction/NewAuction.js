import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import auth from '../auth/auth-helper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-auction.js'
import {Link, Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({}))

const getDateString = (date) => {
  let year = date.getFullYear()
  let day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate()
  let month = date.getMonth().toString().length === 1 ? '0' + (date.getMonth()+1) : date.getMonth() + 1
  let hours = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours()
  let minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes()
  let dateString = `${year}-${month}-${day}T${hours}:${minutes}`
  return dateString
}

export default function NewAuction() {
  const classes = useStyles()
  const currentDate = new Date()
  const defaultStartTime = getDateString(currentDate)
  const defaultEndTime = getDateString(new Date(currentDate.setHours(currentDate.getHours()+1)))
  
  const [values, setValues] = useState({
      itemName: '',
      description: '',
      image: '',
      bidStart: defaultStartTime,
      bidEnd: defaultEndTime,
      startingBid: 0,
      redirect: false,
      error: ''
  })
  const jwt = auth.isAuthenticated()
  
  const handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    setValues({...values, [name]: value })
  }
}



