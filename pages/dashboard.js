import Layout from "@/app/components/Layout";

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
      </div>
    </Layout>
  );
}
