import { Star } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MediaTypeTMDB, getDetails } from '../../../pages/api/tmdb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { MovieHoverCardProps, MovieProps } from '../../types/movie-type';

export function MovieCard({ movie }: { movie: MovieProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCardDetails, setHoverCardDetails] = useState<MovieHoverCardProps | null>(null);

  useQuery({
    queryKey: ['getDetails', isHovered, movie.tmdbId],
    queryFn: () => getDetails(MediaTypeTMDB.MOVIE, movie.tmdbId),
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
            <CardTitle className="text-lg"> {movie.title} </CardTitle>
            <CardDescription className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {movie.rating}
            </CardDescription>
            <CardContent className="p-0">
              <div className="text-sm text-gray-500 mb-5">
                {movie.year} - {movie.certification}
              </div>
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
              alt={hoverCardDetails.title}
            />
            <div className="flex flex-col m-4 justify-around items-center">
              <div className="flex text-base text-center font-semibold">
                {hoverCardDetails.title}
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
                {hoverCardDetails.runtime} minutes
              </div>

              <div className="text-sm text-gray-500">
                {hoverCardDetails.release_date.replace(/-/g, '/')}
              </div>
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
