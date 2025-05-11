import { useState } from 'react';

export default function LoanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    tenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: 'user@example.com',
          loanAmount: parseInt(formData.loanAmount, 10),
          tenure: parseInt(formData.tenure, 10),
          employmentStatus: formData.employmentStatus,
          reason: formData.reason,
          employmentAddress: formData.employmentAddress,
          purpose: formData.reason,
        }),
      });
      const responseText = await response.text();
        console.log('Response status:', response.status);
        console.log('Response text:', responseText);
      if (response.ok) {
        setMessage('Application submitted successfully!');
        setFormData({
          fullName: '',
          loanAmount: '',
          tenure: '',
          employmentStatus: '',
          reason: '',
          employmentAddress: '',
        });
        // Redirect to Dashboard after submission
        setTimeout(() => {
          window.location.hash = '/dashboard';
        }, 1000); // Delay to show the success message briefly
      } else {
        setMessage('Error submitting application.');
      }
    } catch (error) {
        console.error('Fetch error:', error)
      setMessage('Server error.'+ error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Full name as it appears on bank account</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">How much do you need?</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="$0.00"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Loan tenure (in months)</label>
            <input
              type="number"
              name="tenure"
              value={formData.tenure}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Months"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Employment status</label>
            <input
              type="text"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Employment status"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Reason for loan</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Reason for loan"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Employment address</label>
            <textarea
              name="employmentAddress"
              value={formData.employmentAddress}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              placeholder="Employment address"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" required className="mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
          <label className="text-gray-600 text-sm">
            I have read the important information and accept that by completing the application, I will be bound by the terms.
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" required className="mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
          <label className="text-gray-600 text-sm">
            Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus, or other credit reporting agencies.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-200 font-medium"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
    </div>
  );
}