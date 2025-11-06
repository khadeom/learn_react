import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const RegisterComp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = username.trim()
        const pass = password

        if (!user) {
            alert('Please enter a username')
            return
        }

        if (localStorage.getItem(user)) {
            alert(`Username: ${user} already exists`)
        } else {
            localStorage.setItem(user, pass)
            alert('Registration successful — please login')
            navigate('/login')
        }
    }

    return (
        <div>
            <h2>Register Page</h2>
            <div className="d-flex justify-content-center mt-3">
                <div style={{ width: '100%', maxWidth: 420 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="regUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="regPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
