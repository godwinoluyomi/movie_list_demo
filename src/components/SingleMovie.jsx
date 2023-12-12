import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import YouTubeVideo from './YouTubeVideo';

const SingleMovie = ({ movie }) => {

    // const movie_id = useParams().movieid;

    const { title, description, postalUrl, trailerUrl } = movie;

    // console.log(title, movie.description, movie.postalUrl, movie.trailerUrl);
    // console.log(movie);

    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={6}>

                        <Link to={'/'}>
                            <Button variant="primary" className='mb-3'> Back to Movies </Button></Link>
                        <Card style={{ width: '100%', marginBottom: 30 }} className='shadowBox' bg='Light'>

                            <YouTubeVideo videoUrl={trailerUrl} />

                            {/* <Card.Img variant="top" src={postalUrl ? postalUrl : './images/default.jpg'} /> */}
                            <Card.Body>
                                <Card.Title> {title ? title : '...'} </Card.Title>
                                <Card.Text>{description ? description : '...'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                    </Col>

                </Row>
            </Container>
        </>
        // <div>SingleMovie {movieID.movieid} </div>


    )
}

export default SingleMovie