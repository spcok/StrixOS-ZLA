import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: DashboardOverview,
});

function DashboardOverview() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Compliance Overview</h1>
        <p className="text-sm text-slate-400">
          Kent Owl Academy — Executive Zoo Licensing Act 1981 &amp; SSSMZP Governance Engine
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Next Statutory Deadline
          </span>
          <p className="mt-2 text-2xl font-semibold text-white">1 March</p>
          <p className="mt-1 text-xs text-slate-400">Annual Stock &amp; Conservation Returns</p>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            48hr Handling Rest
          </span>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">Compliant</p>
          <p className="mt-1 text-xs text-slate-400">No active specimen lockout violations</p>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Raptor Flying Mandate
          </span>
          <p className="mt-2 text-2xl font-semibold text-white">5 Days/Wk</p>
          <p className="mt-1 text-xs text-slate-400">Tethered birds active log tracking</p>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Tree Surveys
          </span>
          <p className="mt-2 text-2xl font-semibold text-amber-400">18-Month Cycle</p>
          <p className="mt-1 text-xs text-slate-400">Arboricultural survey scheduler</p>
        </div>
      </div>
    </div>
  );
}