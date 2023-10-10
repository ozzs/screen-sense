import { MovieCard } from './MovieCard';
import { MovieProps } from '../../types/movie-type';

export function MovieCardsContainer({ movies }: { movies: MovieProps[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {movies?.map((movie) => <MovieCard key={movie.tmdbId} movie={movie} />)}
    </div>
  );
}
