import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <Link to="/products" className="mr-4">Products</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </nav>
  );
}
