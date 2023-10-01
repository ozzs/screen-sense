import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChartDataType } from './bar-chart-type';

export function DetailedRatingChart({
  detailedBarChartData
}: {
  detailedBarChartData: BarChartDataType[] | undefined;
}) {
  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle> Detailed Rating Distribution </CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer>
          <BarChart layout="vertical" data={detailedBarChartData}>
            <XAxis
              dataKey="total"
              type="number"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip formatter={(value) => value} />
            <Bar dataKey="total" fill="#2f9e44" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
