import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TotalRatingChart } from '../bar-chart/total-rating-chart';
import { DetailedRatingChart } from '../bar-chart/detailed-rating-chart';
import { RatingChartsContainer } from '../bar-chart/rating-charts-container';

export function TabsDetails({ userNameValue }: { userNameValue: string }) {
  return (
    <Tabs defaultValue="shows" className="flex flex-col text-center">
      <TabsList className="space-x-48">
        <TabsTrigger value="shows"> Shows </TabsTrigger>
        <TabsTrigger value="movies"> Movies </TabsTrigger>
        <TabsTrigger value="ratings"> Ratings </TabsTrigger>
        <TabsTrigger value="genres"> Genres </TabsTrigger>
      </TabsList>
      <TabsContent value="shows"> Shows List </TabsContent>
      <TabsContent value="movies"> Movies List </TabsContent>
      <TabsContent value="ratings">
        <RatingChartsContainer userNameValue={userNameValue} />
      </TabsContent>
      <TabsContent value="genres"> Genres Pie Chart </TabsContent>
    </Tabs>
  );
}
