import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Rating from 'react-rating-stars-component';

const MovieCard = ({ id, title, description, postalUrl, rating }) => {

    return (
        <Col md={4}>

            <Card style={{ width: '100%', marginBottom: 30 }} className='shadowBox' bg='Light'>
                <Card.Img variant="top" src={postalUrl ? postalUrl : './images/default.jpg'} />
                <Card.Body>
                    <Card.Title> {title ? title : '...'} </Card.Title>
                    <Rating style={{ marginTop: -10 }}
                        count={5}
                        size={24}
                        value={rating}
                        color="#e6e6e6"
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <Card.Text>{description ? (description.length > 50 ? description.slice(0, 50) + '...' : description) : '...'}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MovieCard