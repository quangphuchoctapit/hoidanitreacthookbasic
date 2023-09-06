import { useState } from 'react'
const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = () => {
        console.log('>> check submit: ', title, content)
    }
    return (
        <>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: '40vw', padding: '20px', border: '1px solid grey' }}>
                <div className='title'>Add New Blog</div>
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