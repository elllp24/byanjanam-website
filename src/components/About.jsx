export default function About() {
  return (
    <section id="about" className="py-24 bg-orange-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-red-600 font-semibold text-lg">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Bringing Taste & Celebration Together
          </h2>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Byanjanam Catering & Events provides premium catering and
            event management services across Odisha. We specialize in
            weddings, receptions, birthdays, and corporate events with
            delicious food, elegant presentation, and professional service.
          </p>

          <button className="mt-8 bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700">
            Learn More
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-5xl font-bold text-red-600">500+</h3>
            <p className="mt-3 text-gray-700">Events Completed</p>
          </div>

          <div className="bg-red-600 text-white p-10 rounded-3xl shadow-xl text-center mt-10">
            <h3 className="text-5xl font-bold">10+</h3>
            <p className="mt-3">Years Experience</p>
          </div>

          <div className="bg-yellow-100 p-10 rounded-3xl shadow-xl text-center -mt-10">
            <h3 className="text-5xl font-bold text-red-600">50+</h3>
            <p className="mt-3 text-gray-700">Menu Varieties</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <h3 className="text-5xl font-bold text-red-600">100%</h3>
            <p className="mt-3 text-gray-700">Customer Satisfaction</p>
          </div>

        </div>

      </div>

    </section>
  );
}