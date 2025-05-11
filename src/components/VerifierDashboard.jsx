import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.jpg'

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
        const response = await fetch('http://localhost:3000/api/statistics');
        const data = await response.json();
        setStats({
          loans: data.totalApplications,
          borrowers: 100, // Static for demo
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
        const response = await fetch('http://localhost:3000/api/user-applications');
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
    <div className="flex">
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
          <a href="#/dashboard" className="block py-2 px-4 bg-green-700 rounded-md mb-2">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Borrowers</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Loans</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Repayments</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Loan Parameters</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Accounting</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Reports</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Collateral</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Access Configuration</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Savings</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Other Payoff</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Expenses</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">E-Signatures</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Investor Accounts</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Calendar</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Settings</a>
          <a href="#" className="block py-2 px-4 hover:bg-green-700 rounded-md">Sign Out</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Loans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <p className="text-gray-600">Loans</p>
              <p className="text-2xl font-bold">{stats.loans}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <p className="text-gray-600">Borrowers</p>
              <p className="text-2xl font-bold">{stats.borrowers}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">₦</span>
            </div>
            <div>
              <p className="text-gray-600">Cash Disbursed</p>
              <p className="text-2xl font-bold">₦ {stats.cashDisbursed.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">💰</span>
            </div>
            <div>
              <p className="text-gray-600">Savings</p>
              <p className="text-2xl font-bold">₦ {stats.savings.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">🔄</span>
            </div>
            <div>
              <p className="text-gray-600">Repaid Loans</p>
              <p className="text-2xl font-bold">{stats.repaidLoans}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">🏦</span>
            </div>
            <div>
              <p className="text-gray-600">Other Accounts</p>
              <p className="text-2xl font-bold">{stats.otherAccounts}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">₦</span>
            </div>
            <div>
              <p className="text-gray-600">Cash Received</p>
              <p className="text-2xl font-bold">₦ {stats.cashReceived.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-md mr-4">
              <span className="text-xl">📜</span>
            </div>
            <div>
              <p className="text-gray-600">Loans</p>
              <p className="text-2xl font-bold">{stats.totalLoans}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">Recent Loans</h3>
            <div className="flex space-x-2">
              <button className="text-gray-600">Sort</button>
              <button className="text-gray-600">Filter</button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="p-4">User details</th>
                <th className="p-4">Recent Contact Email Not Linked</th>
                <th className="p-4">Customer name</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {recentLoans.map((loan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src={avatar}
                      alt="User"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">Contact Email Not Linked</p>
                      <p className="text-sm text-gray-500">Updated 1 day ago</p>
                    </div>
                  </td>
                  <td className="p-4">{loan.email}</td>
                  <td className="p-4">{loan.name}</td>
                  <td className="p-4">{new Date(loan.created_at).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        loan.status === 'verified'
                          ? 'bg-teal-100 text-teal-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-gray-600">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-between items-center">
            <p className="text-gray-600">Rows per page: 7</p>
            <p className="text-gray-600">1-7 of 1420</p>
          </div>
        </div>
      </div>
    </div>
  );
}