import { Star } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MediaTypeTMDB, getDetails } from '../../../pages/api/tmdb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { ShowHoverCardProps, ShowProps } from '../../types/show-type';

export function ShowCard({ show }: { show: ShowProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCardDetails, setHoverCardDetails] = useState<ShowHoverCardProps | null>(null);

  useQuery({
    queryKey: ['getDetails', isHovered, show.tmdbId],
    queryFn: () => getDetails(MediaTypeTMDB.TV, show.tmdbId),
    refetchOnWindowFocus: false,
    enabled: isHovered,
    onSuccess: (data) => {
      setHoverCardDetails(data);
    }
  });

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card
          className="h-full text-left hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardHeader>
            <CardTitle className="text-lg"> {show.title} </CardTitle>
            <CardDescription className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {show.rating}
            </CardDescription>
            <CardContent className="p-0">
              <div className="text-sm text-gray-500 mb-5">
                {show.year} - {show.network}
              </div>
              <div className="text-sm text-gray-500 font-bold">{show.status}</div>
            </CardContent>
          </CardHeader>
        </Card>
      </HoverCardTrigger>

      <HoverCardContent className="mx-4 p-0 w-fit">
        {!hoverCardDetails ? (
          <div>Loading...</div>
        ) : (
          <div className="flex">
            <img
              className="h-60 w-52 rounded-l-md"
              src={`https://image.tmdb.org/t/p/original/${hoverCardDetails.poster_path}`}
              alt={hoverCardDetails.name}
            />
            <div className="flex flex-col m-4 justify-around items-center">
              <div className="flex text-base text-center font-semibold">
                {hoverCardDetails.name}
              </div>

              <div className="flex">
                {hoverCardDetails.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="text-sm text-gray-500 mr-1 border-2 rounded-full p-1.5"
                  >
                    {genre.name}
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-500 flex items-center">
                {hoverCardDetails.number_of_seasons} seasons, {hoverCardDetails.number_of_episodes}{' '}
                episodes
              </div>

              <div className="text-sm text-gray-500">
                {hoverCardDetails.first_air_date.replace(/-/g, '/')} -{' '}
                {hoverCardDetails.last_air_date.replace(/-/g, '/')}
              </div>
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
