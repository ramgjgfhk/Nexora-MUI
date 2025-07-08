import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Loader from '../Components/Loader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function GlobalLoader() {
  const isFetching = useIsFetching();
  return isFetching ? <Loader /> : null;
}

export default function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLoader />
      <Toaster position="top-right" />
      {children}
    </QueryClientProvider>
  );
}
