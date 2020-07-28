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
  const clickSubmit = () => {
    if(auction.bidEnd < auction.bidStart){
      setError("Auction cannot end before it starts")
    }else{
      let auctionData = new FormData()
      auction.itemName && auctionData.append('itemName', auction.itemName)
      auction.description && auctionData.append('description', auction.description)
      auction.image && auctionData.append('image', auction.image)
      auction.startingBid && auctionData.append('startingBid', auction.startingBid)
      auction.bidStart && auctionData.append('bidStart', auction.bidStart)
      auction.bidEnd && auctionData.append('bidEnd', auction.bidEnd)
      
      update({
        auctionId: match.params.auctionId
      }, {
        t: jwt.token
      }, auctionData).then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setRedirect(true)
        }
      })
    }
  }
  const handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    setAuction({...auction,  [name]: value })
  }

    const logoUrl = auction._id
          ? `/api/auctions/image/${auction._id}?${new Date().getTime()}`
          : '/api/auctions/defaultphoto'
    if (redirect) {
      return (<Redirect to={'/myauctions'}/>)
    }
}