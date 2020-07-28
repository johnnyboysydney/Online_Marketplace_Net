import React, {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({}))

export default function EditShop ({}) {
  const classes = useStyles()
  const [auction, setAuction] = useState({
    itemName: '',
    description: '',
    image: '',
    bidStart: '',
    bidEnd: '',
    startingBid: 0,
  })
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')
  const getDateString = (date) => {
    let year = date.getFullYear()
    let day = date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate()
    let month = date.getMonth().toString().length == 1 ? '0' + (date.getMonth()+1) : date.getMonth() + 1
    let hours = date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours()
    let minutes = date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes()
    let dateString = `${year}-${month}-${day}T${hours}:${minutes}`
    return dateString
  }
  const jwt = auth.isAuthenticated()
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    read({
      auctionId: match.params.auctionId
    }, signal).then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        data.bidEnd = getDateString(new Date(data.bidEnd))
        data.bidStart = getDateString(new Date(data.bidStart))
        setAuction(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  
}