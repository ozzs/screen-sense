import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUserStats } from '../../../pages/api/trakt';
import { Skeleton } from '../ui/skeleton';
import { DetailedRatingChart } from './DetailedRatingChart';
import { TotalRatingChart } from './TotalRatingChart';

interface UserStats {
  movies: {
    ratings: number;
  };
  shows: {
    ratings: number;
  };
  seasons: {
    ratings: number;
  };
  episodes: {
    ratings: number;
  };
  ratings: {
    distribution: Record<string, number>;
  };
}

export function RatingChartsContainer({ userNameValue }: { userNameValue: string }) {
  const [totalBarChartData, setTotalBarChartData] = useState<any[] | undefined>(undefined);
  const [detailedBarChartData, setDetailedBarChartData] = useState<any[] | undefined>(undefined);

  // Update the detailed bar chart data
  const updateDetailedChartData = (userStats: UserStats) => {
    const { movies, shows, seasons, episodes } = userStats;
    const detailedData = [
      { name: 'Movies', total: movies.ratings },
      { name: 'Shows', total: shows.ratings },
      { name: 'Seasons', total: seasons.ratings },
      { name: 'Episodes', total: episodes.ratings }
    ];
    setDetailedBarChartData(detailedData);
  };

  // Update the total bar chart data
  const updateTotalChartData = (userStats: UserStats) => {
    const totalData = Object.entries(userStats.ratings.distribution).map(([key, value]) => ({
      name: key,
      total: value
    }));
    setTotalBarChartData(totalData);
  };

  const { isLoading } = useQuery({
    queryKey: ['getUserStats'],
    queryFn: () => getUserStats(userNameValue),
    onSuccess: (data) => {
      updateDetailedChartData(data);
      updateTotalChartData(data);
    }
  });

  return (
    <div className="grid grid-cols-2 gap-4 m-4">
      {isLoading ? (
        <>
          <Skeleton className="h-96" />
          <Skeleton className="h-96" />
        </>
      ) : (
        <>
          <TotalRatingChart totalBarChartData={totalBarChartData} />
          <DetailedRatingChart detailedBarChartData={detailedBarChartData} />
        </>
      )}
    </div>
  );
}
