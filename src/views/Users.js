import { useState } from 'react'
import useFetch from '../customize/fetch'
const Users = (props) => {
    const [isOpenUsers, setIsOpenUsers] = useState(false)

    let { data: users, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/users`, true)
    // const toggleUsers = () => {
    //     props.toggleUsers()
    // }

    const toggleUsers = () => {
        setIsOpenUsers(!isOpenUsers)
    }
    return (
        <>
            {isOpenUsers === true ?
                <button onClick={toggleUsers}>Close</button> :
                <button onClick={toggleUsers}>Users data</button>
            }
            {isOpenUsers &&
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

                </table >}
        </>
    )
}

export default Users