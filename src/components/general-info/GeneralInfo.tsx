import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUserStats } from '../../../pages/api/trakt';
import { CardDetails } from './CardDetails';

type StatsProps = {
  movies: {
    watched: number;
  };
  shows: {
    watched: number;
  };
  episodes: {
    watched: number;
  };
};

export const GeneralInfo = ({ userNameValue }: { userNameValue: string }) => {
  const [userStats, setUserStats] = useState<StatsProps | null>(null);

  const { isLoading } = useQuery({
    queryKey: ['getUserStats'],
    queryFn: () => getUserStats(userNameValue),
    onSuccess: (data) => {
      setUserStats(data);
    }
  });

  return (
    <>
      {isLoading ? (
        <div className="flex justify-evenly items-stretch">
          <Skeleton className="m-4 h-48 flex-grow text-center flex flex-col justify-center items-center" />
          <Skeleton className="m-4 h-48 flex-grow text-center flex flex-col justify-center items-center" />
          <Skeleton className="m-4 h-48 flex-grow text-center flex flex-col justify-center items-center" />
        </div>
      ) : (
        <div className="flex justify-evenly items-stretch">
          <CardDetails title="Movies" amount={userStats?.movies?.watched.toLocaleString() || '0'} />
          <CardDetails title="Shows" amount={userStats?.shows?.watched.toLocaleString() || '0'} />
          <CardDetails
            title="Episodes"
            amount={userStats?.episodes?.watched.toLocaleString() || '0'}
          />
        </div>
      )}
    </>
  );
};
