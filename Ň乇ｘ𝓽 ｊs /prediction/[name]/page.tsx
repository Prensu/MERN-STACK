"use client";

interface Params {
  params: { name: string };
}

const Prediction = ({ params }: Params) => {
  // Set the name directly from the params prop
  const name = params.name;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Personal Information
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">Name:</p>
            <p className="text-lg font-medium text-indigo-600">{name}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">Age:</p>
            <p className="text-lg font-medium text-indigo-600">25</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">Gender:</p>
            <p className="text-lg font-medium text-indigo-600">Male</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">Nationality:</p>
            <p className="text-lg font-medium text-indigo-600">USA</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
