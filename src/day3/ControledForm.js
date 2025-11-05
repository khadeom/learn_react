import React, { useState } from 'react'

function ControledForm() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) =>{
        alert(`username: ${event.target.name_id.value}`)
    }

    const updateName = (event)=>{
        const value = event.target.value
        console.log('updated name', event.target.value)
        console.log(`Type of event ${event}`)
        console.dir(event)
        setName(value)
        console.log(`name is ${value}`)
        if (value.trim()==""){
            setError("Name is required.");
        }else if (value.trim().length < 3){
            setError('Min length needs to be 3.');
        }else {
            setError("")
        }

    }
  return (
    <div>
        <h1>ControledForm</h1>

    <form onSubmit={handleSubmit}> 
        <lable for='name_id'>Name:</lable>
        <input type='text' id='name_id' value={name} onChange={(event)=>updateName(event)}></input>
        <p style={{color:"red"}}>{error}</p>
        <button type='submit' disabled={!name.trim() || error}>Submit</button>
    </form>

    </div>
  )
}

export default ControledForm
