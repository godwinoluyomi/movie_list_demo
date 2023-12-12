import React from 'react'
import SingleMovie from './SingleMovie';
import NotFound from './NotFound';
import { useParams } from 'react-router-dom';

const SingleMovieWrapper = ({ movieList }) => {

    // Extract the movieid from the URL
    const { movieid } = useParams();

    // Find the specific movie in the movieList
    const selectedMovie = movieList.find(movie => String(movie.id) === movieid);

    console.log(movieList);

    // Render the SingleMovie component with the selected movie
    return selectedMovie ? <SingleMovie movie={selectedMovie} /> : <NotFound />;
}

export default SingleMovieWrapper