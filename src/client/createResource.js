export function createResource(promise) {
  let status = 'pending'
  let response

  const suspense = promise.then(
    data => {
      response = data
      status = 'success'
    },
    error => {
      response = error
      status = 'error'
    },
  )
  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspense
        case 'error':
          throw response
        default:
          return response
      }
    },
  }
}
