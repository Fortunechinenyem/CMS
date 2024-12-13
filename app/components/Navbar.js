import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
