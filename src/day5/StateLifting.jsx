import React from 'react'

export const StateLifting = ({ setText }) => {
  return (
    <div>
        <h1>StateLifting</h1>
        <input type="text" onChange={e => setText(e.target.value)} />
    </div>
  )
}
