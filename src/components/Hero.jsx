import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-orange-100 to-red-100 min-h-screen flex items-center pt-24"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-red-600 font-semibold text-lg">
            Odisha’s Premium Catering Service
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mt-4 leading-tight text-gray-900">
            Delicious Food For Every Celebration
          </h1>

          <p className="mt-6 text-gray-700 text-xl leading-relaxed">
            Weddings, birthdays, receptions, corporate events,
            and outdoor catering services across Odisha.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <a href="#contact">
              <button className="bg-red-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-red-700 transition shadow-lg">
                Book Catering
              </button>
            </a>

            <a href="#services">
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-2xl text-lg hover:bg-red-50 transition">
                View Services
              </button>
            </a>

          </div>

        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="bg-white h-56 rounded-3xl shadow-xl flex items-center justify-center text-center p-4 text-2xl font-semibold hover:scale-105 transition">
            Wedding Catering
          </div>

          <div className="bg-red-600 text-white h-72 rounded-3xl shadow-xl flex items-center justify-center text-center p-4 text-2xl font-semibold mt-10 hover:scale-105 transition">
            Buffet Setup
          </div>

          <div className="bg-yellow-100 h-72 rounded-3xl shadow-xl flex items-center justify-center text-center p-4 text-2xl font-semibold -mt-10 hover:scale-105 transition">
            Odia Cuisine
          </div>

          <div className="bg-white h-56 rounded-3xl shadow-xl flex items-center justify-center text-center p-4 text-2xl font-semibold hover:scale-105 transition">
            Outdoor Events
          </div>

        </motion.div>

      </div>

    </section>
  );
}