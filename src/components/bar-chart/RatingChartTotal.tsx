import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChartDataType } from './bar-chart-type';

export function RatingChartTotal({
  totalBarChartData
}: {
  totalBarChartData: BarChartDataType[] | undefined;
}) {
  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle> Total Rating Distribution </CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer>
          <BarChart data={totalBarChartData}>
            <XAxis
              dataKey="name"
              type="category"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="#888888" type="number" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip formatter={(value) => value} />
            <Bar dataKey="total" fill="#2f9e44" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
