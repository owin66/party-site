import React from 'react';
import User from "./user";

const UserTable = ({users, onSort, ...rest}) => {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={()=>onSort('name')} scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th onClick={()=>onSort('profession.name')} scope="col">Провфессия</th>
                    <th onClick={()=>onSort('completedMeetings')} scope="col">Встретился, раз</th>
                    <th onClick={()=>onSort('rate')} scope="col">Оценка</th>
                    <th onClick={()=>onSort('bookmark')} scope="col">Избранное</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
