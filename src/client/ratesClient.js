function fetchRates(base, currencySymbol) {
  return window
    .fetch(
      `https://api.exchangerate.host/latest?base=${base}&symbols=${currencySymbol}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      },
    )
    .then(async response => {
      const data = await response.json()
      if (response.ok) {
        if (data) {
          return {
            symbol: currencySymbol,
            rate: data.rates[currencySymbol],
          }
        } else {
          return Promise.reject(new Error(`Something went wrong`))
        }
      } else {
        const error = {
          message: data?.errors?.map(e => e.message).join('\n'),
        }
        return Promise.reject(error)
      }
    })
}

export {fetchRates}
