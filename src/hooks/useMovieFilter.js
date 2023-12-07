import React from "react";

function useMovieFilter(movies, filter) {
  const [filteredMovies, setFilteredMovies] = React.useState(movies);

  React.useEffect(() => {
    const titleFilter = filter.title ? filter.title.toLowerCase() : "";
    const ratingFilter = filter.rating ? parseInt(filter.rating) : 0;

    const filtered = movies.filter((movie) => {
      const titleMatch =
        !titleFilter || movie.title.toLowerCase().includes(titleFilter);
      const ratingMatch = !ratingFilter || movie.rating >= ratingFilter;

      return titleMatch && ratingMatch;
    });

    setFilteredMovies(filtered);
  }, [movies, filter]);

  return filteredMovies;
}

export default useMovieFilter;
