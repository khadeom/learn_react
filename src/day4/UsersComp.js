// User component
import React, { useState } from 'react';
import axios from 'axios';//npm  install axios
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const UsersComp = () => {
    const [users, setUsers] = useState([]);

    const baseUrl = 'http://localhost:8004/users';

    
    useEffect(() => {
        axios.get(baseUrl)
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    const handleDelete = (id) => {
        axios.delete(`${baseUrl}/${id}`)
        .then(() => {
            setUsers(users.filter(user => user.id !== id));
        })
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>User List</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <Link to="/adduser">
                <button className="btn btn-primary">Add Users</button>
                </Link>
            </div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <i className="fa-solid fa-trash" onClick={() => handleDelete(user.id)}></i>&nbsp;
                                <Link to={`/users/${user.id}`}><i className="fa-solid fa-pen"></i></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersComp;