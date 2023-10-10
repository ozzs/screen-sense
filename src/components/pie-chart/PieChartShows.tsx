import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export function PieChartShows({ genres }: { genres: Record<string, number> }) {
  const data = Object.entries(genres).map(([name, value]) => ({ name, value }));

  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle> Shows Genres Distribution </CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" outerRadius="90%">
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
