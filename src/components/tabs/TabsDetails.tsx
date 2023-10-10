import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RatingChartsContainer } from '../bar-chart/RatingChartsContainer';
import { ShowCardsContainer } from '../shows/ShowCardsContainer';
import { MovieCardsContainer } from '../movies/MovieCardsContainer';

export function TabsDetails({ userNameValue }: { userNameValue: string }) {
  return (
    <Tabs defaultValue="shows" className="flex flex-col text-center">
      <TabsList className="space-x-48">
        <TabsTrigger value="shows"> Shows </TabsTrigger>
        <TabsTrigger value="movies"> Movies </TabsTrigger>
        <TabsTrigger value="ratings"> Ratings </TabsTrigger>
        <TabsTrigger value="genres"> Genres </TabsTrigger>
      </TabsList>
      <TabsContent value="shows">
        <ShowCardsContainer userNameValue={userNameValue} />
      </TabsContent>
      <TabsContent value="movies">
        <MovieCardsContainer userNameValue={userNameValue} />{' '}
      </TabsContent>
      <TabsContent value="ratings">
        <RatingChartsContainer userNameValue={userNameValue} />
      </TabsContent>
      <TabsContent value="genres"> Genres Pie Chart </TabsContent>
    </Tabs>
  );
}
