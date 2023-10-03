import { useState } from 'react';
import { useQuery } from 'react-query';
import { getWatched } from '../../../pages/api/trakt';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import { ShowRow } from './ShowRow';
import { ShowProps } from './show-type';

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

export function ShowsTable({ userNameValue }: { userNameValue: string }) {
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
    queryFn: () => getWatched(userNameValue, 'shows', 'full'),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      updateShows(data);
    }
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="m-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center"> Name </TableHead>
                <TableHead className="text-center"> Status </TableHead>
                <TableHead className="text-center"> Network </TableHead>
                <TableHead className="text-center"> Year </TableHead>
                <TableHead className="text-center"> Rating </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{shows?.map((show) => <ShowRow key={show.tmdbId} show={show} />)}</TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
