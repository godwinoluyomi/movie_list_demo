import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MovieCard from './MovieCard';
// import movies from '../movies';

const MovieList = ({ movieList }) => {
    return (
        <Container>
            <Row>
                {
                    movieList.map((movie) => <MovieCard key={movie.id} {...movie} />)
                }
            </Row>
        </Container>
    )
}

export default MovieList