import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.jpg'

export default function Dashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user-applications');
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Credit App</h2>
        <button
          onClick={() => (window.location.hash = '/form')} // Redirect to /form
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200 font-medium"
        >
          Get a Loan
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow-md flex items-center">
          <div className="bg-green-600 text-white p-3 rounded-md mr-4">
            <span className="text-xl">₦</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm font-medium">Deficit</p>
            <p className="text-2xl font-bold text-gray-800">₦ 0.0</p>
          </div>
        </div>
        <button className="bg-white p-4 rounded-md shadow-md text-gray-600 hover:bg-gray-100 transition duration-200 font-medium">
          Borrow Cash
        </button>
        <button className="bg-white p-4 rounded-md shadow-md text-gray-600 hover:bg-gray-100 transition duration-200 font-medium">
          Deposit Cash
        </button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for loans"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        />
      </div>
      <div className="bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Applied Loans</h3>
          <div className="flex space-x-2">
            <button className="text-gray-600 hover:text-gray-800 font-medium">Sort</button>
            <button className="text-gray-600 hover:text-gray-800 font-medium">Filter</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-4 font-medium">Loan Officer</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Date Applied</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 flex items-center">
                  <img
                    src={avatar}
                    alt="Officer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">John Okoh</p>
                    <p className="text-sm text-gray-500">Updated 1 day ago</p>
                  </div>
                </td>
                <td className="p-4 text-gray-700">₦ {app.loan_amount.toLocaleString()}</td>
                <td className="p-4 text-gray-700">{new Date(app.created_at).toLocaleDateString()}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === 'approved'
                        ? 'bg-green-100 text-green-600'
                        : app.status === 'rejected'
                        ? 'bg-red-100 text-red-600'
                        : app.status === 'verified'
                        ? 'bg-teal-100 text-teal-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-gray-600 hover:text-gray-800">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}