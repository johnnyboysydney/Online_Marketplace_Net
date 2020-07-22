const create = () => {
  return fetch('/api/orders/'+params.userId, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    },
    body: JSON.stringify({order: order, token:token})
  })
  .then((response) => {
    return response.json()
  })
  .catch((err) => console.log(err))
}

const listByShop = () => {
  return fetch('/api/orders/shop/'+params.shopId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  })
  .then((response) => {
    return response.json()
  })
  .catch((err) => {
    console.log(err)
  })
}

const update = () => {}

const cancelProduct = () => {}

const processCharge = () => {}

const getStatusValues = () => {}

const listByUser = () => {}

const read = () => {}

export {
    create,
    listByShop,
    update,
    cancelProduct,
    processCharge,
    getStatusValues,
    listByUser,
    read
  }
