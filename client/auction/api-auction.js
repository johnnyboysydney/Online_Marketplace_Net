const create = async (params, credentials, auction) => {
  try {
    let response = await fetch('/api/auctions/by/'+ params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: auction
    })
      return response.json()
    } catch(err) { 
      console.log(err)
    }
}

export {create}