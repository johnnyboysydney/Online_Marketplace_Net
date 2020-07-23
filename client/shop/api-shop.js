const create = (params, credentials, shop) => {
  return fetch('/api/shops/by/'+ params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: shop
    })
    .then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
}

const list = () => {
  return fetch('/api/shops', {
    method: 'GET',
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const listByOwner = (params, credentials) => {

}

const read = (params, credentials) => {

}

const update = (params, credentials, shop) => {

}

const remove = (params, credentials) => {

}

export {
  create,
  list,
  listByOwner,
  read,
  update,
  remove
}
