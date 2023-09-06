import { useState, useEffect } from 'react'
import useFetch from '../customize/fetch'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddBlog from './AddBlog.jsx';


const Blogs = () => {
    const [show, setShow] = useState(false)
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, true)
    if (dataBlogs && dataBlogs.length > 0) {
        dataBlogs.slice(0, 10)
    }

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {

            setNewData(dataBlogs)
        }
    }, [dataBlogs])

    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog)
        setShow(false)

        console.log('new data: ', data)
    }

    const handleDelete = id => {
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }


    return (
        <>
            <Button className='my-3' variant='primary' onClick={handleShow}>Add New Blog</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='title'>Add New Blog</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className='blog-container'
                style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}
            >
                {isLoading === false && newData && newData.length > 0 &&
                    newData.map((item, index) => {
                        return (
                            <>
                                <div style={{ margin: '10px 10px', border: '1px solid grey', padding: '10px', minWidth: '300px', maxWidth: '400px', textAlign: 'left !important' }}>
                                    <div key={item.id} className='blog-body'
                                    >
                                        <span>User {item.id}: {item.body}</span>
                                        <div style={{ textAlign: 'start !important' }}><span style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#ccc' }} onClick={() => handleDelete(item.id)}>X</span></div>
                                    </div>
                                    <div><button style={{ padding: '10px 5px', borderRadius: '4px' }}><Link to={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>View Detail</Link></button></div>
                                </div>
                            </>
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
