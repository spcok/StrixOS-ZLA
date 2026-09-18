import type { QueryClient } from '@tanstack/react-query';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { ShieldCheck } from 'lucide-react';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 text-slate-100">
      <header className="flex h-14 items-center justify-between border-b border-slate-800 px-6 bg-slate-900/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-amber-500" />
          <span className="font-semibold text-lg tracking-tight">StrixOS ZLA</span>
          <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400 border border-amber-500/20">
            2027 SSSMZP
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            to="/"
            className="text-slate-300 hover:text-white transition-colors [&.active]:text-amber-400"
          >
            Overview
          </Link>
        </nav>
      </header>

      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}