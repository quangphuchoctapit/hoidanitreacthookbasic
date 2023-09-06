import { useParams } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams()
    console.log('check useParam: ', id)
    return (
        <div>
            Hello blog with id={id}
        </div>
    )
}

export default DetailBlog