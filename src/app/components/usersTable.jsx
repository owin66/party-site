import React from 'react';
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = ({users, onSort, selectedSort, ...rest}) => {
    const columns = {
        name: {iter: 'name', name: 'Имя'},
        qualities: {name: 'Качества'},
        professions: {iter: 'profession.name', name: 'Профессия'},
        completedMeetings: {iter: 'completedMeetings', name: 'Встретился, раз'},
        rate: {iter: 'rate', name: 'Оценка'},
        bookmark: {iter: 'bookmark', name: 'Избранное'},
        delete: {}
    }

    return (
            <table className="table">
                <TableHeader {...{onSort, selectedSort, columns}}/>
                <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id}/>
                ))}
                </tbody>
            </table>
    );
};

export default UserTable;
