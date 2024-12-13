import Link from "next/link";

export default function ContentList() {
  const contents = [
    { id: 1, title: "First Post", status: "Published" },
    { id: 2, title: "Second Post", status: "Draft" },
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Content</h1>
        <Link
          href="/content/create"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Create Content
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left">Title</th>
            <th className="border-b py-2 text-left">Status</th>
            <th className="border-b py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content.id}>
              <td className="border-b py-2">{content.title}</td>
              <td className="border-b py-2">{content.status}</td>
              <td className="border-b py-2 text-right">
                <Link
                  href={`/content/edit/${content.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
