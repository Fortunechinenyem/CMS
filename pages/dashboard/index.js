import Layout from "@/app/components/Layout";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-gray-600">
          Here you can manage your content, users, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Content Created
          </h2>
          <p className="text-2xl font-semibold text-indigo-600">12 items</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Published Content
          </h2>
          <p className="text-2xl font-semibold text-green-600">8 items</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Drafts</h2>
          <p className="text-2xl font-semibold text-yellow-600">4 items</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/content">
          <div className="p-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">Manage Content</h2>
            <p className="text-sm">
              Create, edit, and publish your content effortlessly.
            </p>
          </div>
        </Link>

        <Link href="/users">
          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">User Management</h2>
            <p className="text-sm">Manage roles and permissions with ease.</p>
          </div>
        </Link>

        <Link href="/analytics">
          <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p className="text-sm">
              View insights and data to grow your platform.
            </p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
