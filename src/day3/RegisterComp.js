import React, { useState } from 'react'
import { redirect } from 'react-router-dom'

export const RegisterComp = () => {
    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')    

    const handleSubmit = (event)=>{
        // const [username, password] = 
        const username = event.target.username.value
        const password = event.target.password.value
        
        if (localStorage.getItem(username)){
            alert(`Username: ${username} already exists`);
        }else{
            localStorage.setItem(username, password)
            // redirect to login page
            redirect('/login')
        }

    }

  return (
    <div>
        <h2>Register Page</h2>

        <form onSubmit={handleSubmit}>
            <lable htmlFor='username'>Username: </lable>
            <input type='text' name='username' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
            <lable htmlFor='password'>Password: </lable>
            <input type='text' name='password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}
