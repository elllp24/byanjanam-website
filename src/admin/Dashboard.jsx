export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">Packages</h2>
          <p className="mt-4 text-gray-600">
            Manage catering packages
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">Events</h2>
          <p className="mt-4 text-gray-600">
            Upload event gallery
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">Bookings</h2>
          <p className="mt-4 text-gray-600">
            View customer bookings
          </p>
        </div>

      </div>

    </div>
  );
}