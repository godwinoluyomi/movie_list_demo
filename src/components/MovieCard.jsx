import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

// Render each movie in card
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
                    <Link to={`movie/${id}`}>
                        <Button variant="outline-primary"> Watch Trailer </Button></Link>
                    <Card.Text>{description ? (description.length > 50 ? description.slice(0, 50) + '...' : description) : '...'}</Card.Text>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default MovieCard