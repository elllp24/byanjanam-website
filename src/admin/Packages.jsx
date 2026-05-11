import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function Packages() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [packages, setPackages] = useState([]);

  // LIVE BACKEND URL
  const API = "https://byanjanam-backend.onrender.com";

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

      setTitle("");
      setPrice("");
      setDescription("");

      fetchPackages();

    } catch (error) {

      console.log(error);

      alert("Error Adding Package");

    }

  };

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Manage Packages
        </h1>

        {/* FORM */}

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
                {pkg.price}
              </p>

              <p className="text-gray-600 mt-4">
                {pkg.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}