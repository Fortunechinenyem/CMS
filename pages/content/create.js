import { useState } from "react";

export default function CreateContent() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/content/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    alert("Content created successfully");
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Create Content</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
