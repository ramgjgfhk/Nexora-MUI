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
      staleTime: 5 * 60 * 1000, // cache for 5 minutes
      cacheTime: 15 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
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
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
    </QueryClientProvider>
  );
}
