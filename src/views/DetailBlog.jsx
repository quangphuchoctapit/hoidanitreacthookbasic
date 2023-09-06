import { useParams, useHistory } from "react-router-dom"
import useFetch from "../customize/fetch"

const DetailBlog = () => {
    let { id } = useParams()
    let backData = useHistory()
    console.log('check useParam: ', id)
    const handleBackData = () => {
        backData.push('/blog')
    }
    let { data, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)
    return (
        <>
            <div><span style={{ backgroundColor: '#ccc', padding: '5px 10px', borderRadius: '5px', color: 'black', cursor: 'pointer' }} onClick={handleBackData}>&lt;-- Back</span></div>
            {isLoading === true &&
                <div>Loading...</div>
            }
            {isLoading === false && <div className='container' style={{ border: '1px solid grey', borderRadius: '5px', margin: '20px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                {data &&
                    <>
                        <div className="title" style={{ fontWeight: '500', fontSize: '25px', marginBottom: '10px' }}>{data.title}</div>
                        <div className="body" style={{ display: 'flex', alignSelf: 'start' }}>{data.body}</div>
                    </>
                }
            </div>}

        </>
    )
}

export default DetailBlog