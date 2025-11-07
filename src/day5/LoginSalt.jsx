import { Label, Input, Button } from '@salt-ds/core';
import React from 'react'

function LoginSalt() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = username.trim();
        const pass = password;
        
        if (!localStorage.getItem(user)) {  
            alert(`Username does not exist`);
        } else {
            const stored_password = localStorage.getItem(user);
            if (pass === stored_password) {
                localStorage.setItem('isLoggedIn', 'true');
                alert('Login Successful');
            } else {
                alert('Invalid Password');
            }
        }
    };
  return (
    <div>
        <div>

        <form onSubmit={handleSubmit}>
            <Label style={{ width: "256px", height: "50px" }} htmlFor="usernameInput">Username:</Label>
            <Input defaultValue="Om" style={{ width: "256px" }} /> 
            <Label style={{ width: "256px", height: "50px" }} htmlFor="userPassword">Password:</Label>
            <Input defaultValue="123" style={{ width: "256px" }} /> 
            <Button type="submit" sentiment="accented" appearance="solid">
            Submit
            </Button>
        </form>
        </div>

    </div>
  )
}

export default LoginSalt