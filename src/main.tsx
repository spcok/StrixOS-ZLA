import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Import auto-generated route manifest from TanStack Router Vite plugin
import { routeTree } from './routeTree.gen';

// 1. Initialise TanStack Query client with deterministic audit caching defaults
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes fresh data window
      gcTime: 1000 * 60 * 30, // 30 minutes garbage collection cache
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// 2. Instantiate TanStack Router with Query context for type-safe route loaders
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

// 3. Register the router instance across TanStack Router's module registry
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// 4. Mount application
const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {import.meta.env.DEV && (
          <>
            <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
            <TanStackRouterDevtools router={router} position="bottom-right" />
          </>
        )}
      </QueryClientProvider>
    </StrictMode>
  );
}