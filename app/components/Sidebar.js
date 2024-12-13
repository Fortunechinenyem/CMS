import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="block p-2 hover:bg-gray-700 rounded-md"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/create"
          className="block p-2 hover:bg-gray-700 rounded-md"
        >
          Create Content
        </Link>
        <Link
          href="/dashboard/manage"
          className="block p-2 hover:bg-gray-700 rounded-md"
        >
          Manage Content
        </Link>
      </nav>
    </aside>
  );
}
