export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-red-600 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Book Your Event Today
          </h2>

          <p className="mt-6 text-xl text-red-100">
            Weddings, birthdays, receptions, and corporate catering across Odisha.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">

            <h3 className="text-2xl font-semibold">
              Phone
            </h3>

            <p className="mt-4 text-red-100">
              +91 XXXXX XXXXX
            </p>

          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">

            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-4 text-red-100">
              info@byanjanam.com
            </p>

          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">

            <h3 className="text-2xl font-semibold">
              Location
            </h3>

            <p className="mt-4 text-red-100">
              Odisha, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}