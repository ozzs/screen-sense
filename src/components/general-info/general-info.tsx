import { useEffect, useState } from 'react';
import { CardDetails } from './card-details';
import { getUserStats } from '../../../pages/api/trakt';
import { Skeleton } from '@/components/ui/skeleton';

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

export function GeneralInfo({ userNameValue }: { userNameValue: string }) {
  const [userStats, setUserStats] = useState<StatsProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the user stats
  useEffect(() => {
    getUserStats(userNameValue)
      // Set the user stats
      .then((data) => setUserStats(data))
      // Set the loading state to false
      .then(() => setIsLoading(false))
      // Catch any errors
      .catch((error) => console.error(error));
  }, [userNameValue]);

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
          <CardDetails title="Movies" amount={userStats?.movies?.watched || 0} />
          <CardDetails title="Shows" amount={userStats?.shows?.watched || 0} />
          <CardDetails title="Episodes" amount={userStats?.episodes?.watched || 0} />
        </div>
      )}
    </>
  );
}
