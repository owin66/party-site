import React from 'react';
import api from '../api'

const Users = () => {
    console.log(api.users.fetchAll())
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default Users;