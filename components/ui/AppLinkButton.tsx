import Link from "next/link";

type AppLinkButtonProps = {
  href: string;
  label: string;
};

export function AppLinkButton({ href, label }: AppLinkButtonProps) {
  return (
    <Link
      href={href}
      className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
    >
      {label}
    </Link>
  );
}