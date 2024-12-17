import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRoleFromToken } from "@/lib/rolecheck";

export default function AdminPage() {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = getRoleFromToken(token);

    if (userRole !== "admin") {
      alert("Access denied. Admins only.");
      router.push("/login");
    } else {
      setRole(userRole);
    }
  }, [router]);

  if (!role) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, Admin! You have full access to this page.</p>
    </div>
  );
}
