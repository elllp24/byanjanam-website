import Sidebar from "./Sidebar";

export default function Bookings() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Customer Bookings
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <p>No bookings yet.</p>

        </div>

      </div>

    </div>
  );
}