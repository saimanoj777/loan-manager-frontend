import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png';

export default function VerifierDashboard() {
  const [stats, setStats] = useState({
    loans: 0,
    borrowers: 0,
    cashDisbursed: 0,
    savings: 0,
    repaidLoans: 0,
    otherAccounts: 0,
    cashReceived: 0,
    totalLoans: 0,
  });
  const [recentLoans, setRecentLoans] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://loan-manager-backend.onrender.com/api/statistics'); // Use Render URL
        const data = await response.json();
        setStats({
          loans: data.totalApplications,
          borrowers: 100,
          cashDisbursed: 550000,
          savings: 450000,
          repaidLoans: 30,
          otherAccounts: 10,
          cashReceived: 1000000,
          totalLoans: 50,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    const fetchRecentLoans = async () => {
      try {
        const response = await fetch('https://loan-manager-backend.onrender.com/api/user-applications'); // Use Render URL
        const data = await response.json();
        setRecentLoans(data);
      } catch (error) {
        console.error('Error fetching recent loans:', error);
      }
    };

    fetchStats();
    fetchRecentLoans();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-green-900 text-white p-4">
        <div className="flex items-center mb-6">
          <img
            src={avatar}
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium">John Okoh</p>
            <p className="text-sm">Verifier</p>
          </div>
        </div>
        <nav>
          <a href="#/dashboard" className="block py-2 px-4 bg-green-700 rounded-md mb-2 font-medium">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Borrowers</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Loans</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Repayments</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Loan Parameters</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Accounting</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Reports</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Collateral</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Access Configuration</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Savings</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Other Payoff</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Expenses</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">E-Signatures</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Investor Accounts</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Calendar</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Settings</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md font-medium">Sign Out</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Loans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Loans</p>
              <p className="text-2xl font-bold text-gray-800">{stats.loans}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Borrowers</p>
              <p className="text-2xl font-bold text-gray-800">{stats.borrowers}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">₦</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Cash Disbursed</p>
              <p className="text-2xl font-bold text-gray-800">₦ {stats.cashDisbursed.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">💰</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Savings</p>
              <p className="text-2xl font-bold text-gray-800">₦ {stats.savings.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">🔄</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Repaid Loans</p>
              <p className="text-2xl font-bold text-gray-800">{stats.repaidLoans}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">🏦</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Other Accounts</p>
              <p className="text-2xl font-bold text-gray-800">{stats.otherAccounts}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">₦</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Cash Received</p>
              <p className="text-2xl font-bold text-gray-800">₦ {stats.cashReceived.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-md mr-4">
              <span className="text-xl">📜</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Loans</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalLoans}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Recent Loans</h3>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800 font-medium">Sort</button>
              <button className="text-gray-600 hover:text-gray-800 font-medium">Filter</button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="p-4 font-medium">User details</th>
                <th className="p-4 font-medium">Recent Contact Email Not Linked</th>
                <th className="p-4 font-medium">Customer name</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Action</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {recentLoans.map((loan, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 flex items-center">
                    <img
                      src={avatar}
                      alt="User"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Contact Email Not Linked</p>
                      <p className="text-sm text-gray-500">Updated 1 day ago</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{loan.email}</td>
                  <td className="p-4 text-gray-700">{loan.name}</td>
                  <td className="p-4 text-gray-700">{new Date(loan.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        loan.status === 'verified'
                          ? 'bg-teal-100 text-teal-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-gray-600 hover:text-gray-800">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center">
            <p className="text-gray-600 text-sm">Rows per page: 7</p>
            <p className="text-gray-600 text-sm">1-7 of 1420</p>
          </div>
        </div>
      </div>
    </div>
  );
}