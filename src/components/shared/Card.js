import * as React from 'react'

function Card({children}) {
  return (
    <div className="width-400 flex flex-col border border-px border-black divide-y divide-black">
      {children}
    </div>
  )
}

function Header({children}) {
  return <div className="p-4">{children}</div>
}

function Body({children}) {
  return <div className="p-4 pr-0">{children}</div>
}

function Footer({children}) {
  return <div className="p-4">{children}</div>
}

Card.displayName = 'Card'
Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card
