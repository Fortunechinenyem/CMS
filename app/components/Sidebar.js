import Link from "next/link";
import { useState } from "react";
import { FiHome, FiEdit, FiGrid, FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white h-screen p-4 flex flex-col justify-between transition-all duration-300`}
    >
      <div className="flex justify-end mb-4">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md transition"
        >
          <FiHome size={20} />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link
          href="/content/create"
          className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md transition"
        >
          <FiEdit size={20} />
          {isOpen && <span>Create Content</span>}
        </Link>
        <Link
          href="/content"
          className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md transition"
        >
          <FiGrid size={20} />
          {isOpen && <span>Manage Content</span>}
        </Link>
      </nav>

      <div className="mt-8">
        <p className={`text-xs text-gray-400 ${isOpen ? "text-center" : ""}`}>
          {isOpen ? "Powered by Fortune" : "©"}
        </p>
      </div>
    </aside>
  );
}
