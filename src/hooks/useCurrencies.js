import React from 'react'

function currenciesReducer(state, {type, value}) {
  switch (type) {
    case 'add': {
      return [...state, value]
    }
    case 'remove': {
      return state.filter(currency => currency !== value)
    }
    default:
      return state
  }
}

export function useCurrencies() {
  const [state, dispatch] = React.useReducer(currenciesReducer, [])
  return [state, dispatch]
}
