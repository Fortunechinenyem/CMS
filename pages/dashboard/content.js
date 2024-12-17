import { useState, useEffect } from "react";
import axios from "axios";

export default function ContentManagement() {
  const [contentList, setContentList] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data } = await axios.get("/api/content");
    setContentList(data.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.patch("/api/content", { id: editingId, ...formData });
    } else {
      await axios.post("/api/content", formData);
    }

    setFormData({ title: "", body: "" });
    setEditingId(null);
    fetchContent();
  };

  const handleEdit = (content) => {
    setEditingId(content._id);
    setFormData({ title: content.title, body: content.body });
  };

  const handleDelete = async (id) => {
    await axios.delete("/api/content", { data: { id } });
    fetchContent();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          {editingId ? "Update Content" : "Create Content"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentList.map((content) => (
          <div key={content._id} className="p-6 border rounded shadow">
            <h2 className="text-2xl font-semibold">{content.title}</h2>
            <p className="mt-2 text-gray-700">{content.body}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(content)}
                className="px-4 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(content._id)}
                className="px-4 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
