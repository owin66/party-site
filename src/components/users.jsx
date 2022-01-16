import React, {useState} from 'react';
import api from '../api'
import Heads from "./header/Heads";
import Table from "./Table/Table";


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const userPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if(number > 4 && number < 15) return 'Человек тусанет'
            if([2,3,4].indexOf(lastOne)>=0) return 'человека тусанут'
        if(lastOne===1) return 'Человек тусанет'
            return 'Человек тусанут'
    }


    return (
        <div>
            <h2>
            <span className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}>
                {users.length > 0
                    ? `${ users.length} ${userPhrase(
                        users.length
                    )} с тобой сегодня `
                    : ' Никто с тобой не встретится '}

            </span>
            </h2>
            {users.length > 0 &&
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.qualities.map((item) => (
                            <span className={'badge m-1 bg-' + item.color} key={item._id}>{item.name}</span>
                        ))}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}</td>
                        <td><button className={"btn btn-danger"} onClick={()=>handleDelete(user._id)}>Удалить</button></td>
                    </tr>
                ))}
                </tbody>
            </table>}
        </div>
    );
};

export default Users;