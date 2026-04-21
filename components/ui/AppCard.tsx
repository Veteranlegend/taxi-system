import { ReactNode } from "react";

type AppCardProps = {
  children: ReactNode;
};

export default function AppCard({ children }: AppCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:rounded-[1.75rem] sm:p-6">
      {children}
    </div>
  );
}