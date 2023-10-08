'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Home from '../../pages/home/home';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
