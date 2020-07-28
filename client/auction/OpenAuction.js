import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {listOpen} from './api-auction.js'
import Auctions from './Auctions'

const useStyles = makeStyles(theme => ({

}))

export default function OpenAuctions(){
  const classes = useStyles()
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listOpen(signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true)
      } else {
        setAuctions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  const removeAuction = (auction) => {
    const updatedAuctions = [...auctions]
    const index = updatedAuctions.indexOf(auction)
    updatedAuctions.splice(index, 1)
    setAuctions(updatedAuctions)
  }
    return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          All Auctions
        </Typography>
        <Auctions auctions={auctions} removeAuction={removeAuction}/>
      </Paper>
    </div>)
}