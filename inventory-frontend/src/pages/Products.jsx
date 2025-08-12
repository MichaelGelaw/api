import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../Components/Navbar";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      await API.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Products</h1>
          <Link to="/products/add" className="bg-green-500 px-3 py-1 text-white rounded">
            Add Product
          </Link>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.quantity}</td>
                <td className="border p-2">{p.price}</td>
                <td className="border p-2 space-x-2">
                  <Link to={`/products/edit/${p.id}`} className="bg-blue-500 text-white px-2 py-1 rounded">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
