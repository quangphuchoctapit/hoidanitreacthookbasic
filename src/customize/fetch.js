import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        try {
            async function fetchData() {
                try {
                    let res = await axios.get(url)
                    let data = res && res.data ? res.data : []
                    setUsers(data)
                    setIsLoading(false)
                    setIsError(false)
                }
                catch (e) {
                    setIsError(true)
                    setIsLoading(false)
                    console.log(e)
                }
            }
            fetchData();
        }
        catch (e) {
            setIsError(true)
            setIsLoading(false)
            console.log('err name: ', e.name)
            console.log('err message: ', e.message)
        }
    }, [])
    return {
        users, isLoading, isError
    }
}

export default useFetch