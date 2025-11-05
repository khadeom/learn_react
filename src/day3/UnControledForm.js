import React, { useRef, useState } from 'react'

function UnControledForm() {
    const name = useRef('')
    const [error, setError] = useState('')
    const [_, forceUpdate] = useState(0)
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`Form submitted with value: ${name.current.value}`)
        console.log(`Name: ${event.target.name.value}`)

        const value = name.current.value

        if (value.trim() == ""){
            setError("Name is required.")
        }else if (value.trim().length < 3){
            setError( "Min length needs to be 3.")
        }else {
            setError( "")
        }


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
    <div>
        <h1>ControledForm</h1>

    <form onSubmit={handleSubmit}> 
        <lable htmlFor='name'>Name:</lable>
        <input type='text' id='name' ref={name}></input>
        <p style={{color: "red"}}>{error}</p>
        <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default UnControledForm
