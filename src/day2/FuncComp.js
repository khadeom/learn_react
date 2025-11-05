import React, { useState } from 'react'

export const FuncComp2 = () => {

    const [name, editName] = useState('om')
    const [state, editState] = useState(true)
    var temp = 'om'
    function updateTemp() {
        name = 'Ok'
    }

  return (
    <div>
        <h1>FuncComp {name}</h1>
        <h2>Value: {temp}</h2>
        <button onClick={()=>editName('Lk')}>Update Value</button>
        <h1>Current Status: {state?<span>Login</span>:<span>Logout</span>}</h1>
        <button onClick={()=>editState(!state)}>{state?<h1>Logout</h1>:<h1>Login</h1>}</button>

    </div>
    
  )
}

export default FuncComp2