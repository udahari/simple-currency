import React from 'react'

function ErrorFallback({error, removeCurrency, resetErrorBoundary}) {
  return (
    <div className="p-2 flex flex-col space-y-2 border border-px border-black mb-4">
      <div className="flex justify-between">
        There was an error:{' '}
        <span
          onClick={resetErrorBoundary}
          className="items-center font-normal cursor-pointer"
        >
          Try Again
        </span>
      </div>
      <div className="flex justify-between">
        <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        <span
          onClick={() => removeCurrency()}
          className="items-center font-normal cursor-pointer"
        >
          ( - )
        </span>
      </div>
    </div>
  )
}

export default ErrorFallback
