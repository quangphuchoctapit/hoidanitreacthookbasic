import { useHistory } from 'react-router-dom'
const NotFound = () => {
    const redirectpage = useHistory()
    const handleBack = () => {
        redirectpage.push('/')
    }
    return (
        <>
            <div className="not-found-container">
                <h3>This page isn't available</h3>
                <h4>The link may be broken, or the page may have been removed.</h4>
                <button className='btn btn-primary' onClick={handleBack}>Go back to Homepage</button>
            </div>
        </>
    )
}

export default NotFound