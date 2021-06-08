import React from 'react'
import {getFullName} from '../utils/utils'
import CurrencyInfo from '../components/CurrencyInfo'
import Footer from '../components/FooterCurrency'
import {useCurrencies} from '../hooks/useCurrencies'
import Card from '../components/shared/Card'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallbackCurrency'
import {fetchRates} from '../client/ratesClient'
import {createResource} from '../client/createResource'
import LoadingFallback from '../components/LoadingFallback'

function App() {
  let base = 'USD'
  const [currentValue, setCurrentValue] = React.useState(10)
  const [activeCurrencies, dispatch] = useCurrencies()

  const changeCurrentValue = e => {
    setCurrentValue(e.target.value)
  }
  const containerRef = React.useRef()
  //https://github.com/facebook/react/issues/14536 there's bug on suspense mode
  React.useLayoutEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <Card.Header>
          <p className="font-semibold text-md italic">
            {base} - {getFullName[base]}
          </p>
          <div className="flex items-center text-lg justify-between">
            <h3>{base}</h3>
            <input
              type="text"
              className="text-xl font-bold text-right"
              value={currentValue}
              onChange={changeCurrentValue}
              data-testid="input-money"
            />
          </div>
        </Card.Header>

        <Card.Body>
          <div className="overflow-y-scroll height-400" ref={containerRef}>
            {activeCurrencies.length === 0 ? (
              <div data-testid="empty-currency">The data is empty</div>
            ) : (
              activeCurrencies.map((currencySymbol, idx) => {
                const resource = createResource(
                  fetchRates(base, currencySymbol),
                )
                return (
                  <ErrorBoundary
                    key={currencySymbol}
                    fallbackRender={({error}) => (
                      <ErrorFallback
                        error={error}
                        removeCurrency={() =>
                          dispatch({type: 'remove', value: currencySymbol})
                        }
                      />
                    )}
                    resetKeys={[currencySymbol]}
                  >
                    <React.Suspense fallback={<LoadingFallback />}>
                      <CurrencyInfo
                        currencySymbol={currencySymbol}
                        currentValue={currentValue}
                        idx={idx}
                        base={base}
                        removeCurrency={() =>
                          dispatch({type: 'remove', value: currencySymbol})
                        }
                        resource={resource}
                      />
                    </React.Suspense>
                  </ErrorBoundary>
                )
              })
            )}
          </div>
        </Card.Body>

        <Card.Footer>
          <Footer
            addCurrency={currency => dispatch({type: 'add', value: currency})}
            activeCurrencies={activeCurrencies}
          />
        </Card.Footer>
      </Card>
    </div>
  )
}

export default App
