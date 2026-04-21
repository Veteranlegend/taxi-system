import Link from "next/link";

export default function OtherAreasCard() {
  return (
    <li className="flex h-full list-none">
      <Link
        href="/request"
        className="group flex h-full w-full flex-col rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-label="Request a ride from other areas in Lebanon"
      >
        <div className="flex h-full flex-col rounded-[1.5rem] border border-sky-200/80 bg-sky-50/50 p-4 shadow-sm transition hover:shadow-md sm:rounded-[1.75rem] sm:p-6">
          <div className="flex flex-1 flex-col justify-between gap-5">

            <div>
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-100/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600">
                All of Lebanon
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Other areas
              </h3>

              <p className="mt-2.5 text-sm leading-7 text-slate-500">
                Not in these cities? You can still request a ride from anywhere
                in Lebanon — get a price estimate and send your request directly.
              </p>
            </div>

            <div className="flex w-full items-center justify-center rounded-2xl bg-sky-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-sky-800">
              Request from your location
            </div>

          </div>
        </div>
      </Link>
    </li>
  );
}
