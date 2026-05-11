import { useEffect, useState } from "react";
import axios from "axios";

export default function Packages() {

  const [packages, setPackages] = useState([]);

  // LIVE BACKEND
  const API = "https://byanjanam-backend.onrender.com";

  // FETCH PACKAGES
  const fetchPackages = async () => {

    try {

      const res = await axios.get(
        `${API}/api/packages/all`
      );

      console.log(res.data);

      setPackages(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPackages();

  }, []);

  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg) => (

            <div
              key={pkg._id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h3 className="text-2xl font-bold mb-3">
                {pkg.title}
              </h3>

              <p className="text-red-600 text-2xl font-bold mb-4">
                ₹ {pkg.price}
              </p>

              <p className="text-gray-600">
                {pkg.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}