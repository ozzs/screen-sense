import { useEffect, useState } from 'react';
import { DetailedRatingChart } from './detailed-rating-chart';
import { TotalRatingChart } from './total-rating-chart';
import { getUserStats } from '../../../pages/api/trakt';
import { Skeleton } from '../ui/skeleton';

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
  const [isLoading, setIsLoading] = useState(true);

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

  // Fetch the ratings data
  useEffect(() => {
    getUserStats(userNameValue)
      .then((userStats) => {
        updateDetailedChartData(userStats);
        updateTotalChartData(userStats);
      })
      // Set the loading state to false
      .then(() => setIsLoading(false))
      // Catch any errors
      .catch((error) => console.error(error));
  }, [userNameValue]);

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
