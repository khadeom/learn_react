import React from 'react'
import { useState, redirect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginComp = (props) => {
    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')    
    const navigate = useNavigate();
    console.log('LoginComp props=', props);
    const handleSubmit = (event)=>{
        event.preventDefault()
        // const [username, password] = 
        const username = event.target.username.value
        const password = event.target.password.value

        if (!localStorage.getItem(username)){
            alert(`Username does not exist`);
        }else{
            const stored_password=localStorage.getItem(username)
            if (password==stored_password){
                localStorage.setItem('isLoggedIn', true)
                
                if (typeof props.onLogin === 'function') {
                try {
                    props.onLogin()
                } catch (e) {
                    // ignore
                }
                }
                alert('Login Successful')   
                navigate('/home')
            }else{
              alert('Invalid Password')
            }
            // redirect to login page
            // redirect('/')
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
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
export default LoginComp



