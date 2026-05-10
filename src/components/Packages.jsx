const packages = [
  {
    name: "Silver Package",
    price: "₹499 / Plate",
    features: [
      "Welcome Drink",
      "Starter",
      "Main Course",
      "Dessert",
      "Buffet Setup",
    ],
  },
  {
    name: "Gold Package",
    price: "₹799 / Plate",
    features: [
      "Premium Starters",
      "Multi Cuisine Buffet",
      "Live Counters",
      "Desserts",
      "Decoration Support",
    ],
  },
  {
    name: "Platinum Package",
    price: "₹1299 / Plate",
    features: [
      "Luxury Buffet",
      "Live BBQ",
      "Premium Decoration",
      "Unlimited Desserts",
      "Complete Event Support",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-red-600 font-semibold text-lg">
            Catering Packages
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Choose Your Perfect Package
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl shadow-2xl p-10 hover:scale-105 transition"
            >

              <h3 className="text-3xl font-bold text-red-600">
                {item.name}
              </h3>

              <p className="text-4xl font-bold mt-6">
                {item.price}
              </p>

              <ul className="mt-8 space-y-4">

                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg"
                  >
                    ✅ {feature}
                  </li>
                ))}

              </ul>

              <a href="#booking">

                <button className="mt-10 w-full bg-red-600 text-white py-4 rounded-2xl text-lg hover:bg-red-700 transition">
                  Book Now
                </button>

              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}