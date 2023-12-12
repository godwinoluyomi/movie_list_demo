import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='display-1 text-info fw-bold' style={{ fontSize: 250 }}> 404</h1>
            <h3> Page Not Found </h3>
            <Link to={'/'}> <Button variant='primary'> Home </Button></Link>

        </div>
    )
}

export default NotFound