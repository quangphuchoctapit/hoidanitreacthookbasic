// import { useState, useEffect } from 'react'
import useFetch from '../customize/fetch'
const Users = () => {
    let { users, isLoading, isError } = useFetch(`https://jsonplaceholder.typsicode.com/users`)

    // let { name, username, website } = users
    return (
        <>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Website</th>
                    </tr>
                </thead>
                {isError === false && isLoading === false && users && users.length > 0 && users.map((user) => {
                    return (
                        <tbody key={user.id}>
                            <tr >
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.website}</td>
                            </tr>
                        </tbody>
                    )
                })}
                {isLoading === true && <tbody><tr><td colSpan='5'>Loading...</td></tr></tbody>}
                {isError === true && <tbody><tr><td colSpan='5'>Something wrongs...</td></tr></tbody>}

            </table >
        </>
    )
}

export default Users