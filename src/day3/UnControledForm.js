import React, { useRef, useState } from 'react'

function UnControledForm() {
    const name = useRef('')
    const [_, forceUpdate] = useState(0)
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`Form submitted with value: ${name.current.value}`)
        console.log(`Name: ${event.target.name.value}`)
        // as we are using uncontroled form the dom is not updated and p tag is not updated
        // we use a dummy state to do that, and so that we can update the dom
        // this aslo only works if the value of _ is changed,
        // so we can't use forceUpdate(1) --> as this won't refresh the dom
        forceUpdate(x=>x+1)
    }

    const updateName = (event)=>{
        console.log('updated name', event.target.value)
        console.log(`Type of event ${event}`)
        console.dir(event)
    }
  return (
    <div>ControledForm

    <form onSubmit={handleSubmit}> 
        <lable htmlFor='name'>Name:</lable>
        <input type='text' id='name' ref={name}></input>
        <p>Your Name: {name.current.value}</p>
        <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default UnControledForm
