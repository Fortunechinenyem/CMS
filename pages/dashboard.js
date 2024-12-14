import Layout from "@/app/components/Layout";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-gray-600">
          Here you can manage your content, users, and more.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold text-lg">Content Created</h2>
          <p className="text-gray-600">12 items</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold text-lg">Published Content</h2>
          <p className="text-gray-600">8 items</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold text-lg">Drafts</h2>
          <p className="text-gray-600">4 items</p>
        </div>
        <Link href="/content">
          <div className="p-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 cursor-pointer transition">
            <h2 className="text-xl font-semibold">Manage Content</h2>
            <p className="mt-2">
              Create, edit, and publish your content effortlessly.
            </p>
          </div>
        </Link>
        <Link href="/users">
          <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer transition">
            <h2 className="text-xl font-semibold">User Management</h2>
            <p className="mt-2">Manage roles and permissions with ease.</p>
          </div>
        </Link>
        <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 cursor-pointer transition">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p className="mt-2">View insights and data to grow your platform.</p>
        </div>
      </div>
    </Layout>
  );
}
