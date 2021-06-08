import React from 'react'

function AddCurrencies({addCurrency, activeCurrencies, setShowDropdown}) {
  let inActiveCurrencies = [
    'CAD',
    'CHF',
    'GBP',
    'IDR',
    'INR',
    'JPY',
    'KRW',
    'MYR',
    'SGD',
    'USD',
  ].filter(currencySymbol => !activeCurrencies.includes(currencySymbol))

  const [choosenCurrency, setChoosenCurrency] = React.useState(
    inActiveCurrencies[0],
  )

  if (inActiveCurrencies.length === 0) {
    return (
      <p data-testid="all-currencies-selected" className="add-more-button">
        All the currencies have been selected
      </p>
    )
  }

  return (
    <React.Fragment>
      <select
        data-testid="select-currency"
        className="border width-250 height-30 border-px rounded-sm border-black bg-white"
        onChange={e => setChoosenCurrency(e.target.value)}
        value={choosenCurrency}
      >
        {inActiveCurrencies.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          addCurrency(choosenCurrency)
          setShowDropdown(false)
        }}
        className={'px-4 rounded '}
        data-testid="button-submit-currency"
      >
        Submit
      </button>
    </React.Fragment>
  )
}

export default AddCurrencies
