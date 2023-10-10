import { CommonProps } from '@/types/common-type';
import { MovieProps } from '@/types/movie-type';
import { ShowProps } from '@/types/show-type';
import { PieChartMovies } from './PieChartMovies';
import { PieChartShows } from './PieChartShows';

function countGenres<T extends CommonProps>(items: T[]): Record<string, number> {
  const genreCounts: Record<string, number> = {};

  items.forEach((item) => {
    item.genres.forEach((genre) => {
      if (genreCounts[genre]) {
        genreCounts[genre] += 1;
      } else {
        genreCounts[genre] = 1;
      }
    });
  });

  return genreCounts;
}

export function PieChartsContainer({
  movies,
  shows
}: {
  movies: MovieProps[];
  shows: ShowProps[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 m-4">
      <PieChartMovies genres={countGenres(movies)} />
      <PieChartShows genres={countGenres(shows)} />
    </div>
  );
}
