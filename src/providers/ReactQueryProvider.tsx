import { ReactNode } from 'react';
import { DefaultOptions, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


export interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryConfig: DefaultOptions = {
  queries: {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
    useErrorBoundary: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env['NODE_ENV'] !== 'test' && <ReactQueryDevtools />}
      {children}
    </QueryClientProvider>
  );
};
