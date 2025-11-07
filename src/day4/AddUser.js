import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    // navigator = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8004/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            if (response.ok) {
                setMessage('User added successfully!');
                setName('');
                setEmail('');
            } else {
                setMessage('Failed to add user.');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
        // navigator('/users');

    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddUser;