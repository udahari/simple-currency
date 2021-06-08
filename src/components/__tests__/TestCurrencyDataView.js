import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddCurrencies from '../AddCurrencies'
import CurrencyDataView from '../CurrencyDataView'

test('can remove currency', async () => {
  let currency = {
    symbol: 'IDR',
    rate: 14000.99999,
  }

  const removeCurrency = jest.fn()

  render(
    <CurrencyDataView
      currency={currency}
      currentValue={10}
      base={'USD'}
      removeCurrency={removeCurrency}
    />,
  )

  userEvent.click(screen.getByTestId(`button-delete-${currency.symbol}`))
  expect(removeCurrency).toHaveBeenCalledTimes(1)
  expect(removeCurrency).toHaveBeenCalledWith(currency.symbol)
})
