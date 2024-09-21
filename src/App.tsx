import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';  // Include your modernized styles

interface Movie {
  id: string;
  movie: string;  // Movie title
  rating: number;
  imdb_url: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);  // Assuming `data` is an array of movies
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if the fetch fails
  }

  return (
    <div>
      <h1>Movie Database</h1>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
}

export default App;
