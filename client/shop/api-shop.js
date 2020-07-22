const create =(params, credentials, shop) => {
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
      })
      .catch((err) => console.log(err))
}

const list = () => {}

const listByOwner = () => {}

const read = () => {}

const update = () => {}

const remove = () => {}

export {create, list, listByOwner, read, update, remove}
