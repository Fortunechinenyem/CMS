export default function Users() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition">
          + Add New User
        </button>
        <div className="mt-8">
          <p className="text-gray-600">No users added yet.</p>
        </div>
      </main>
    </div>
  );
}
