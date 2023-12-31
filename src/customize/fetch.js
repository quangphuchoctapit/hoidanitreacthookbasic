import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url, dataUsers) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token
                })
                let data = res && res.data ? res.data : []
                setData(data)
                setIsLoading(false)
                setIsError(false)
            }
            catch (e) {

                console.log(e)

                if (axios.isCancel(e)) {
                    console.log('request canceled: ' + e.message)
                }
                else {
                    setIsError(true)
                    setIsLoading(false)
                }
            }
        }
        setTimeout(() => {
            fetchData();

        }, 2000)

        return () => {
            ourRequest.cancel('Request canceled by the user')
        }
    }, [url])
    return {
        data, isLoading, isError
    }
}

export default useFetch