import React from 'react'
import { useState, useEffect } from 'react';
import User from './User';
import './Users.css';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .then(()=>setLoading(false))
        .catch(err => console.error("error is " + err));
    }, [])
    console.log(users);
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        <div className='usersContainer'>
            {
                users.map((user) => <User key={user.id} login={user.login} avatar_url={user.avatar_url}/>)
            }
        </div>
    </div>
    
  )
}

export default Users;
