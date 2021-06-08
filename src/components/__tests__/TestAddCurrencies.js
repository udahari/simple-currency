import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddCurrencies from '../AddCurrencies'

test('can choose currency', async () => {
  const addCurrency = jest.fn()
  const setShowDropdown = jest.fn()

  render(
    <AddCurrencies
      activeCurrencies={[]}
      addCurrency={addCurrency}
      setShowDropdown={setShowDropdown}
    />,
  )
  const select = screen.getByTestId('select-currency')
  userEvent.click(select)
  userEvent.click(screen.getByTestId('currency-CAD'))

  expect(screen.getByText('CAD')).toBeVisible()
  userEvent.click(screen.getByText('Submit'))

  expect(setShowDropdown).toHaveBeenCalledTimes(1)
  expect(addCurrency).toHaveBeenCalledTimes(1)
  expect(addCurrency).toHaveBeenCalledWith('CAD')
})

test("can't select currency if all selected", async () => {
  let activeCurrencies = [
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
  ]
  render(<AddCurrencies activeCurrencies={activeCurrencies} />)
  expect(screen.getByText('All the currencies have been selected'))
})
