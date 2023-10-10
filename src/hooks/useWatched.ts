import { useQueries } from 'react-query';
import { MediaTypeTRAKT, getWatched } from '../../pages/api/trakt';
import { useState } from 'react';
import { ShowProps } from '@/types/show-type';
import { MovieProps } from '@/types/movie-type';

type ShowRawProps = {
  show: {
    ids: { tmdb: number };
    title: string;
    status: string;
    network: string;
    year: number;
    rating: number;
    genres: string[];
  };
};

type MovieRawProps = {
  movie: {
    ids: { tmdb: number };
    title: string;
    year: number;
    rating: number;
    certification: string;
    genres: string[];
  };
};

export default function useWatched({ userNameValue }: { userNameValue: string }) {
  const [shows, setShows] = useState<ShowProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const updateShows = (data: ShowRawProps[]) => {
    const showsData = data.map((show) => ({
      tmdbId: show.show.ids.tmdb,
      title: show.show.title,
      status: show.show.status,
      network: show.show.network,
      year: show.show.year,
      rating: show.show.rating,
      genres: show.show.genres
    }));
    setShows(showsData);
  };

  const updateMovies = (data: MovieRawProps[]) => {
    const moviesData = data.map((movie) => ({
      tmdbId: movie.movie.ids.tmdb,
      title: movie.movie.title,
      year: movie.movie.year,
      rating: movie.movie.rating,
      certification: movie.movie.certification,
      genres: movie.movie.genres
    }));
    setMovies(moviesData);
  };

  const results = useQueries([
    {
      queryKey: 'shows',
      queryFn: () => getWatched(userNameValue, MediaTypeTRAKT.SHOWS),
      refetchOnWindowFocus: false,
      onSuccess: (data: ShowRawProps[]) => {
        updateShows(data);
      }
    },
    {
      queryKey: 'movies',
      queryFn: () => getWatched(userNameValue, MediaTypeTRAKT.MOVIES),
      refetchOnWindowFocus: false,
      onSuccess: (data: MovieRawProps[]) => {
        updateMovies(data);
      }
    }
  ]);
  const isLoading = results.some((query) => query.isLoading);

  return { isLoading, shows, movies };
}
