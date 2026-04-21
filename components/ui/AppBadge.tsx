type AppBadgeProps = {
  label: string;
  isActive?: boolean;
};

export default function AppBadge({ label, isActive = false }: AppBadgeProps) {
  return (
    <span
      className={`inline-block flex-shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${
        isActive
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-slate-50 text-slate-500"
      }`}
    >
      {label}
    </span>
  );
}
