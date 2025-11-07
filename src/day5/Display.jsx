import React from 'react'

// we have to pass ({text}) if we want to pass one variable and (props) if we want to use like props.text
export const Display = ({text}) => {
  return (
    <div>
        <h2>Text is {text}</h2>
    </div>
  )
}
