import wedding from "../assets/images/wedding.jpg";
import buffet from "../assets/images/buffet.jpg";
import odia from "../assets/images/odia-food.jpg";
import birthday from "../assets/images/birthday.jpg";
import corporate from "../assets/images/corporate.jpg";
import outdoor from "../assets/images/outdoor.jpg";

const gallery = [
  {
    image: wedding,
    title: "Wedding Setup",
  },
  {
    image: buffet,
    title: "Buffet Counter",
  },
  {
    image: odia,
    title: "Traditional Odia Food",
  },
  {
    image: birthday,
    title: "Birthday Events",
  },
  {
    image: corporate,
    title: "Corporate Catering",
  },
  {
    image: outdoor,
    title: "Outdoor Catering",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-red-600 font-semibold text-lg">
            Our Gallery
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Delicious Food & Beautiful Events
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-2xl group"
            >

              <div className="h-80 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="bg-white p-6">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}