import { signOut } from "next-auth/react";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white shadow px-6 py-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white transition"
        >
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          {/* <FiMenu size={24} /> */}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 text-center shadow-md lg:shadow-none lg:relative lg:block lg:w-auto`}
      >
        <ul className="lg:flex items-center gap-6">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded lg:inline lg:bg-transparent lg:px-0"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded lg:inline lg:bg-transparent lg:px-0"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded lg:inline lg:bg-transparent lg:px-0"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        <FiLogOut size={20} />
        <span className="hidden lg:inline">Logout</span>
      </button>
    </div>
  );
}
