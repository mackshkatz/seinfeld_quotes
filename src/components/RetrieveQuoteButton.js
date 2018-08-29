import React from 'react'

const RetrieveQuoteButton = (props) => {
  return (
    <button onClick={props.onUserClick}>{props.children}</button>
  )
}

export default RetrieveQuoteButton
