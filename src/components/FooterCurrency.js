import React from 'react'
import AddCurrencies from './AddCurrencies'

function FooterCurrency({addCurrency, activeCurrencies}) {
  const [showDropdown, setShowDropdown] = React.useState(false)

  return (
    <div className="flex items-center justify-evenly">
      {!showDropdown ? (
        <button
          className="w-auto"
          onClick={() => setShowDropdown(true)}
          data-testid="button-add-more-currency"
        >
          (+) Add More Currencies
        </button>
      ) : (
        <AddCurrencies
          addCurrency={addCurrency}
          activeCurrencies={activeCurrencies}
          setShowDropdown={setShowDropdown}
        />
      )}
    </div>
  )
}

export default FooterCurrency
