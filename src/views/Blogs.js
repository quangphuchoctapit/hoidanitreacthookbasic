import { useState, useEffect } from 'react'
import useFetch from '../customize/fetch'
import { Link, NavLink, useHistory } from 'react-router-dom'


const Blogs = () => {
    let redirectPage = useHistory()
    let { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, true)
    let newData = []
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 10)
        console.log('fetching data: ', newData)

    }

    const handleAddNew = () => {
        redirectPage.push('/add-blog')
        console.log('useHistory: ', redirectPage)

    }
    return (
        <>
            <div><button onClick={handleAddNew} style={{ cursor: 'pointer' }}>+ Add new blog</button></div>

            <div className='blog-container'
                style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}
            >
                {isLoading === false && newData && newData.length > 0 &&
                    newData.map((item, index) => {
                        return (
                            <div key={item.id} className='blog-body'
                                style={{ margin: '10px 10px', border: '1px solid grey', padding: '10px', maxWidth: '400px', textAlign: 'left !important' }}>
                                User {item.id}: {item.body}
                                <div><button style={{ padding: '10px 5px', borderRadius: '4px' }}><Link to={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>View Detail</Link></button></div>
                            </div>

                        )
                    })
                }
                {isLoading === true &&
                    <div style={{ textAlign: 'center' }}>Loading...</div>}
            </div>
        </>
    )
}


export default Blogs
