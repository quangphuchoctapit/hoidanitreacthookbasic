import { useState, useEffect } from 'react'
import axios from 'axios'
const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(async () => {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        let data = res && res.data ? res.data : []
        setUsers(data)
    }, [])

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
                {users && users.length > 0 && users.map((user) => {
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
            </table >
        </>
    )
}

export default Users