import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Overview } from '../bar-chart/bar-chart';

export function TabsDetails() {
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
        <Overview />
      </TabsContent>
      <TabsContent value="genres"> Genres Pie Chart </TabsContent>
    </Tabs>
  );
}