// src/components/MovieItem.tsx
import React from 'react';

// Define the type for the movie prop
interface MovieItemProps {
  movie: {
    id: string;
    movie: string;  // Movie title
    rating: number;
    imdb_url: string;
  };
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <div className="movie-item">
      <h2>{movie.movie}</h2>
      <p>Rating: {movie.rating}</p>
      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="imdb-link">
        View on IMDb
      </a>
    </div>
  );
};

export default MovieItem;
