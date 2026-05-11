import { useEffect, useState } from "react";
import axios from "axios";

export default function Packages() {

  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/packages/all"
      );

      setPackages(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPackages();

  }, []);

  return (

    <section
      id="packages"
      className="py-20 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-14">
          Catering Packages
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg) => (

            <div
              key={pkg._id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <img
                src={`http://localhost:5000/uploads/${pkg.image}`}
                alt={pkg.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  {pkg.title}
                </h2>

                <p className="text-red-600 text-2xl mt-4 font-semibold">
                  {pkg.price}
                </p>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {pkg.description}
                </p>

                <button
                  className="mt-8 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
                >
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}