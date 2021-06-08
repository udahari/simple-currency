import React from 'react'
import CurrencyDataView from './CurrencyDataView'

function CurrencyInfo({currentValue, base, removeCurrency, resource}) {
  const [currency] = React.useState(() => resource.read())
  return (
    <CurrencyDataView
      base={base}
      currency={currency}
      currentValue={currentValue}
      removeCurrency={removeCurrency}
    />
  )
}

export default CurrencyInfo
