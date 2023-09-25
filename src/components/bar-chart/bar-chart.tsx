'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 1,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 2,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 3,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 4,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 5,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 6,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 7,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 8,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 9,
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 10,
    total: Math.floor(Math.random() * 5000) + 1000
  }
];

export function Overview() {
  return (
    <ResponsiveContainer width="90%" height={500}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#2f9e44" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
