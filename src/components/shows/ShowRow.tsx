import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ShowProps } from './show-type';

export function ShowCard({ show }: { show: ShowProps }) {
  return (
    <Card className="h-full text-left">
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
  );
}

//https://image.tmdb.org/t/p/original/lNpkvX2s8LGB0mjGODMT4o6Up7j.jpg
