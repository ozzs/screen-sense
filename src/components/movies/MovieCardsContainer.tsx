import { useState } from 'react';
import { useQuery } from 'react-query';
import { getWatched } from '../../../pages/api/trakt';
import { MediaTypeTRAKT } from '../../../pages/api/trakt';
import { MovieProps } from './movie-type';
import { MovieCard } from './MovieCard';

type MovieRawProps = {
  movie: {
    ids: { tmdb: number };
    title: string;
    year: number;
    rating: number;
    certification: string;
  };
};

export function MovieCardsContainer({ userNameValue }: { userNameValue: string }) {
  const [movies, setMovies] = useState<MovieProps[] | null>(null);

  const updateMovies = (data: MovieRawProps[]) => {
    const moviesData = data.map((movie) => ({
      tmdbId: movie.movie.ids.tmdb,
      title: movie.movie.title,
      year: movie.movie.year,
      rating: movie.movie.rating,
      certification: movie.movie.certification
    }));
    setMovies(moviesData);
  };

  const { isLoading } = useQuery({
    queryKey: ['getWatchedMovies'],
    queryFn: () => getWatched(userNameValue, MediaTypeTRAKT.MOVIES, 'full'),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      updateMovies(data);
    }
  });

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen mt-10">
          <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 m-4">
          {movies?.map((movie) => <MovieCard key={movie.tmdbId} movie={movie} />)}
        </div>
      )}
    </>
  );
}
