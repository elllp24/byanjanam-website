import Sidebar from "./Sidebar";

export default function Events() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Manage Events
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
            Upload Event
          </button>

        </div>

      </div>

    </div>
  );
}