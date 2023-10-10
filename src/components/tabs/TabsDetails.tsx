import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useWatched from '@/hooks/useWatched';
import { RatingChartsContainer } from '../bar-chart/RatingChartsContainer';
import { MovieCardsContainer } from '../movies/MovieCardsContainer';
import { PieChartsContainer } from '../pie-chart/PieChartsContainer';
import { ShowCardsContainer } from '../shows/ShowCardsContainer';
import { Loader } from '../ui/loader';

export function TabsDetails({ userNameValue }: { userNameValue: string }) {
  const { isLoading, shows, movies } = useWatched({ userNameValue });

  return (
    <Tabs defaultValue="shows" className="flex flex-col text-center">
      <TabsList className="space-x-48">
        <TabsTrigger value="shows"> Shows </TabsTrigger>
        <TabsTrigger value="movies"> Movies </TabsTrigger>
        <TabsTrigger value="ratings"> Ratings </TabsTrigger>
        <TabsTrigger value="genres"> Genres </TabsTrigger>
      </TabsList>
      <TabsContent value="shows">
        {isLoading ? <Loader /> : <ShowCardsContainer shows={shows} />}
      </TabsContent>
      <TabsContent value="movies">
        {isLoading ? <Loader /> : <MovieCardsContainer movies={movies} />}
      </TabsContent>
      <TabsContent value="ratings">
        <RatingChartsContainer userNameValue={userNameValue} />
      </TabsContent>
      <TabsContent value="genres">
        {isLoading ? <Loader /> : <PieChartsContainer movies={movies} shows={shows} />}
      </TabsContent>
    </Tabs>
  );
}
