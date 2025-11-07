import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditUser() {
    const { id } = useParams();
    const baseUrl = 'http://localhost:8004/users';
    const [user, setUser] = React.useState({
        'id': '',
        'name': '',
        'email': ''
    })


    useEffect(() => {
        axios.get(`${baseUrl}/${id}`)
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}/${id}`, user)
        .then(response => {
            alert('User updated successfully');
        })
        .catch(error => {
            console.error(error);
            alert('Failed to update user');
        });
        // Handle Form submission logic here
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

  return (
    <div>

        <Form onSubmit={handleSubmit}>
            <h2>Edit User</h2>
            <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" name='id' placeholder="Enter ID" value={user.id} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" value={user.name} onChange={handleOnChange} />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={user.email} placeholder="Enter email" onChange={handleOnChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    </div>
  )
}

export default EditUser