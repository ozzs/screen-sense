import { ShowCard } from './ShowCard';
import { ShowProps } from '../../types/show-type';

export function ShowCardsContainer({ shows }: { shows: ShowProps[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {shows?.map((show) => <ShowCard key={show.tmdbId} show={show} />)}
    </div>
  );
}
