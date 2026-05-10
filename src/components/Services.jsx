const services = [
  {
    title: "Wedding Catering",
    desc: "Premium wedding catering with traditional Odia and multi-cuisine menus.",
  },
  {
    title: "Birthday Parties",
    desc: "Complete food and event setup for birthdays and private celebrations.",
  },
  {
    title: "Corporate Events",
    desc: "Professional catering for meetings, conferences, and office events.",
  },
  {
    title: "Outdoor Catering",
    desc: "Outdoor buffet and live counter setup for large gatherings and festivals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-red-600 font-semibold text-lg">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Catering For Every Occasion
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >

              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}