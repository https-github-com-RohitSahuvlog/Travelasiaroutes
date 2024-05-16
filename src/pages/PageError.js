import React from 'react'
import '../css/PageError.css'
import { Link } from 'react-router-dom'

const PageError = () => {
    return (
        <div className="page-error">
            <h1 className="error-code">404</h1>
            <p className="error-message">Page Not Found</p>
            <Link to="/" >
                <p className="home-link">Go to Homepage</p>
            </Link>
        </div>
    )
}

export default PageError