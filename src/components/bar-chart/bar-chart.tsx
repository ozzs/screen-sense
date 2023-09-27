'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { getUserStats } from '../../../pages/api/trakt';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function RatingsChart({ userNameValue }: { userNameValue: string }) {
  const [barChartData, setBarChartData] = useState<any[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the ratings data
  useEffect(() => {
    getUserStats(userNameValue)
      .then((data) => {
        // Convert ratings distribution object to an array of objects
        const ratingsArray = Object.entries(data.ratings.distribution).map(([key, value]) => ({
          name: key,
          total: value
        }));
        setBarChartData(ratingsArray);
      })
      // Set the loading state to false
      .then(() => setIsLoading(false))
      // Catch any errors
      .catch((error) => console.error(error));
  }, [userNameValue]);

  return (
    <Card className="mx-48 h-full">
      <CardHeader>
        <CardTitle> Rating Distribution </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={barChartData}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip formatter={(value) => value} />
            <Bar dataKey="total" fill="#2f9e44" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
