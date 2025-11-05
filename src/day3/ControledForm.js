import React, { useState } from 'react'

function ControledForm() {
    const [name, setName] = useState('')


    const updateName = (event)=>{
        console.log('updated name', event.target.value)
        console.log(`Type of event ${event}`)
        console.dir(event)
        setName(event.target.value)
    }
  return (
    <div>ControledForm

    <form> 
        <lable for='name_id'>Name:</lable>
        <input type='text' id='name_id' value={name} onChange={(event)=>updateName(event)}></input>
    </form>

    </div>
  )
}

export default ControledForm
