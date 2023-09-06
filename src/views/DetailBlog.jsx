import { useParams, useHistory } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams()
    let backData = useHistory()
    console.log('check useParam: ', id)
    const handleBackData = () => {
        backData.push('/blog')
    }
    return (
        <>
            <div><span style={{ backgroundColor: '#ccc', padding: '5px 10px', borderRadius: '5px', color: 'black', cursor: 'pointer' }} onClick={handleBackData}>&lt;-- Back</span></div>
            <div>Hello blog with id={id}</div>
        </>
    )
}

export default DetailBlog