import { useState } from 'react'
import axios from 'axios'

const AddBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = async () => {
        if (!title) {
            alert('empty title!')
            return
        }
        if (!content) {
            alert('empty content!')
            return
        }

        let data = {
            title: title,
            body: content,
            id: 1,
            userId: 101
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
            // console.log('>> check res: ', res.data)
        }
        // console.log('>> check submit: ', title, content)
    }
    return (
        <>
            <div className="container" style={{ width: '100% !important', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', padding: '20px', border: '1px solid grey' }}>
                <div className='content-container' style={{ textAlign: 'start', margin: '10px 0', width: '100%' }}>
                    <div className="title-container" style={{ margin: '10px 0' }}>
                        <label htmlFor="title">Title: </label>
                        <input id='title' type="text" style={{ width: '100%' }}
                            value={title} onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="content-container" style={{ textAlign: 'start', margin: '10px 0', width: '100%' }}>
                        <label htmlFor="content">Content: </label>
                        <input id='content' type="text" style={{ width: '100%' }}
                            value={content} onChange={(e) => setContent(e.target.value)}

                        />
                    </div>
                </div>
                <div><button
                    onClick={() => handleSubmit()}
                    style={{ cursor: 'pointer', padding: '10px', borderRadius: '5px' }}>Submit</button></div>
            </div>
        </>
    )
}

export default AddBlog