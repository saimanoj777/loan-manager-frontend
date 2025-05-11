export default function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        {/* <img src="/path-to-logo.png" alt="Logo" className="h-8 mr-2" />  */}
        <h1 className="text-xl font-bold text-green-800">Credit App</h1>
      </div>
      <div className="flex space-x-4">
        <a href="#/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</a>
        <a href="#/form" className="text-gray-600 hover:text-gray-800">Apply</a>
        {/* <a href="#/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</a> */}
        <a href="#/verifier" className="text-gray-600 hover:text-gray-800">Verifier</a>
        <div className="relative">
          {/* <span className="text-gray-600 hover:text-gray-800 cursor-pointer">User</span> */}
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
            <a href="#/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profile</a>
            <a href="#/logout" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}