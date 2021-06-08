import React from 'react'
import {getFullName} from '../utils/utils'

function CurrencyDataView({currency, currentValue = 0, base, removeCurrency}) {
  let {symbol, rate} = currency
  let fullName = getFullName[symbol]
  rate = parseFloat(rate).toFixed(3)
  currentValue = parseFloat(currentValue)
  let sumConvert = parseFloat(rate * currentValue)
  let totalConvert = sumConvert % 1 === 0 ? sumConvert : sumConvert.toFixed(3)

  return (
    <div
      data-testid="currency-data"
      key={symbol}
      className="p-2 flex flex-col space-y-2 border border-px border-black mb-4"
    >
      <div>
        <div className="flex justify-between">
          <p>{symbol}</p>
          <p data-testid="total-converter">{totalConvert}</p>
        </div>
        <p className="font-semibold text-md italic">
          {symbol} - {fullName}
        </p>
        <div className="flex justify-between">
          <p className="italic">
            1 {base} = {symbol}{' '}
            <span data-testid={`rate-${symbol}`}>{rate}</span>
          </p>
          <span
            onClick={() => removeCurrency(symbol)}
            className="items-center font-normal cursor-pointer"
            data-testid={`button-delete-${symbol}`}
          >
            ( - )
          </span>
        </div>
      </div>
    </div>
  )
}

export default CurrencyDataView
