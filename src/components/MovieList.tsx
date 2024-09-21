// src/components/MovieList.tsx
import React from 'react';
import MovieItem from './MovieItem';

// Define the type for the movies prop
interface MovieListProps {
  movies: {
    id: string;
    movie: string;
    rating: number;
    imdb_url: string;
  }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
