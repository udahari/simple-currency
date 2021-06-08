import React from 'react'

function LoadingFallback() {
  return (
    <div
      className="p-2 flex flex-col space-y-2 border border-px border-black mb-4"
      data-testid="loading-currency"
    >
      Loading . . .
    </div>
  )
}

export default LoadingFallback
