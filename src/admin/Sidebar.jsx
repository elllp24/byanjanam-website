import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-red-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Byanjanam Admin
      </h1>

      <div className="flex flex-col gap-5 text-lg">

        <Link
          to="/admin/dashboard"
          className="hover:bg-red-600 p-3 rounded-xl transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/packages"
          className="hover:bg-red-600 p-3 rounded-xl transition"
        >
          Packages
        </Link>

        <Link
          to="/admin/events"
          className="hover:bg-red-600 p-3 rounded-xl transition"
        >
          Events
        </Link>

        <Link
          to="/admin/bookings"
          className="hover:bg-red-600 p-3 rounded-xl transition"
        >
          Bookings
        </Link>

      </div>

    </div>
  );
}