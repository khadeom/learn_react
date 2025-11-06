import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginComp = (props) => {
    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')    
    const navigate = useNavigate();
    console.log('LoginComp props=', props);
    const handleSubmit = (event)=>{
        event.preventDefault()
        // const [username, password] = 
                const user = username.trim()
                const pass = password

        if (!localStorage.getItem(user)){
            alert(`Username does not exist`);
        }else{
            const stored_password=localStorage.getItem(user)
            if (pass==stored_password){
                localStorage.setItem('isLoggedIn', 'true')
                
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
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            {/* center the form and constrain width so inputs don't stretch edge-to-edge */}
            <div className="d-flex justify-content-center mt-3">
                <div style={{ width: '100%', maxWidth: 420 }}>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
    </div>
  )
}
export default LoginComp



