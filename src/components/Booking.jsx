export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-red-600 font-semibold text-lg">
            Booking Inquiry
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Plan Your Event With Us
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Fill out the form and our team will contact you shortly.
          </p>

        </div>

        <form className="grid md:grid-cols-2 gap-8">

          {/* Name */}
          <div>
            <label className="block mb-3 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-3 font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-3 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block mb-3 font-semibold">
              Event Type
            </label>

            <select
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            >
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate Event</option>
              <option>Reception</option>
              <option>Outdoor Catering</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-3 font-semibold">
              Number of Guests
            </label>

            <input
              type="number"
              placeholder="Approx guest count"
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-3 font-semibold">
              Event Date
            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">

            <label className="block mb-3 font-semibold">
              Additional Details
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about your event..."
              className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-red-500"
            ></textarea>

          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center">

            <button
              type="submit"
              className="bg-red-600 text-white px-10 py-4 rounded-2xl text-lg hover:bg-red-700 transition"
            >
              Submit Inquiry
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}