import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function Packages() {

  // API URL FROM .env
  const API = import.meta.env.VITE_API_URL;

  // FORM STATES
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // PACKAGE LIST
  const [packages, setPackages] = useState([]);

  // FETCH PACKAGES
  const fetchPackages = async () => {

    try {

      const res = await axios.get(
        `${API}/api/packages/all`
      );

      setPackages(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // LOAD PACKAGES ON PAGE LOAD
  useEffect(() => {

    fetchPackages();

  }, []);

  // ADD PACKAGE
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${API}/api/packages/add`,
        {
          title,
          price,
          description,
        }
      );

      alert("Package Added Successfully");

      // CLEAR FORM
      setTitle("");
      setPrice("");
      setDescription("");

      // RELOAD PACKAGES
      fetchPackages();

    } catch (error) {

      console.log(error);

      alert("Error Adding Package");

    }

  };

  // DELETE PACKAGE
  const deletePackage = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this package?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `${API}/api/packages/delete/${id}`
      );

      alert("Package Deleted Successfully");

      fetchPackages();

    } catch (error) {

      console.log(error);

      alert("Error Deleting Package");

    }

  };

  return (

    <div className="flex">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Manage Packages
        </h1>

        {/* ADD PACKAGE FORM */}

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mb-10">

          <form onSubmit={handleSubmit}>

            {/* TITLE */}

            <div className="mb-5">

              <label className="block mb-2 font-semibold">
                Package Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded-xl"
                placeholder="Wedding Package"
                required
              />

            </div>

            {/* PRICE */}

            <div className="mb-5">

              <label className="block mb-2 font-semibold">
                Price
              </label>

              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-3 rounded-xl"
                placeholder="₹50,000"
                required
              />

            </div>

            {/* DESCRIPTION */}

            <div className="mb-5">

              <label className="block mb-2 font-semibold">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-3 rounded-xl"
                rows="5"
                placeholder="Package details..."
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700"
            >
              Add Package
            </button>

          </form>

        </div>

        {/* PACKAGE LIST */}

        <div className="grid md:grid-cols-3 gap-6">

          {packages.map((pkg) => (

            <div
              key={pkg._id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >

              <h2 className="text-2xl font-bold">
                {pkg.title}
              </h2>

              <p className="text-red-600 text-xl mt-3">
                ₹ {pkg.price}
              </p>

              <p className="text-gray-600 mt-4">
                {pkg.description}
              </p>

              {/* DELETE BUTTON */}

              <button
                onClick={() => deletePackage(pkg._id)}
                className="mt-5 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800"
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}