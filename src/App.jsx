import React from 'react'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewMovie from './components/NewMovie';
import './App.css'
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import movies from './movies';
import useMovieFilter from './hooks/useMovieFilter';
import { Route, Routes } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import NotFound from './components/NotFound';
import SingleMovieWrapper from './components/SingleMovieWrapper';


function App() {
  // Movielist and filter states
  const [movieList, setMovieList] = React.useState(movies);
  const [filter, setFilter] = React.useState({});

  // Add new movie function
  const handleAddMovie = (newMovie) => {
    setMovieList([newMovie, ...movieList]);
    // setMovieList([...movieList, newMovie]);
  };

  // Set filter function
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    console.log(newFilter);
  }

  // Filter movie hook
  const filteredMovies = useMovieFilter(movieList, filter);

  // console.log(movieList);

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<div>
            <Container>
              <Row>
                <Col md={4}> <NewMovie onAddMovie={handleAddMovie} /> </Col>
                <Col md={8}>
                  <Row>
                    <Col md={12}> <Filter onFilterChange={handleFilterChange} /> </Col>
                  </Row>
                  <Row>
                    <Col md={12}> <MovieList movieList={filteredMovies} /> </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          } />

          <Route path='/movie/:movieid' element={<SingleMovieWrapper movieList={movieList} />}></Route>

          {/* <Route path='/movie/:movieid' element={<SingleMovie movieList={filteredMovies} />}></Route> */}

          {/* 404 route - should be the last one */}
          <Route path='*' element={<NotFound />}></Route>
        </Route>

      </Routes>

    </>
  )
}

export default App
