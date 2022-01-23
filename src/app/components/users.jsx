import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {paginate} from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import api from '../api'

const Users = ({users: allUsers, ...rest}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState()
    const count = allUsers.length;
    const pageSize = 4;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
    }, [])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (params) => {
    }
    console.log(professions)
    const usersCrop = paginate(allUsers, currentPage, pageSize);
    return (
        <>
            {professions && <GroupList items={professions}
                                       valueProperty='_id'
                                       contentProperty='name'
                                       onItemSelect={handleProfessionSelect}/>}

            {count > 0 && (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Провфессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {usersCrop.map((user) => (
                        <User {...rest} {...user} key={user._id}/>
                    ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
