import { useState } from 'react';
import { useQuery } from 'react-query';
import { getWatched } from '../../../pages/api/trakt';
import { ShowCard } from './ShowCard';
import { ShowProps } from './show-type';
import { MediaTypeTRAKT } from '../../../pages/api/trakt';

type ShowRawProps = {
  show: {
    ids: { tmdb: number };
    title: string;
    status: string;
    network: string;
    year: number;
    rating: number;
  };
};

export function ShowCardsContainer({ userNameValue }: { userNameValue: string }) {
  const [shows, setShows] = useState<ShowProps[] | null>(null);

  const updateShows = (data: ShowRawProps[]) => {
    const showsData = data.map((show) => ({
      tmdbId: show.show.ids.tmdb,
      title: show.show.title,
      status: show.show.status,
      network: show.show.network,
      year: show.show.year,
      rating: show.show.rating
    }));
    setShows(showsData);
  };

  const { isLoading } = useQuery({
    queryKey: ['getWatchedShows'],
    queryFn: () => getWatched(userNameValue, MediaTypeTRAKT.SHOWS, 'full'),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      updateShows(data);
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
          {shows?.map((show) => <ShowCard key={show.tmdbId} show={show} />)}
        </div>
      )}
    </>
  );
}
