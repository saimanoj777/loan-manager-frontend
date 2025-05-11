import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoanForm from './components/LoanForm';
import Dashboard from './components/Dashboard';
import VerifierDashboard from './components/VerifierDashboard';

function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/dashboard'); // Changed default to /dashboard

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.slice(1) || '/dashboard');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <Navbar />
      {route === '/form' ? (
        <LoanForm />
      ) : route === '/dashboard' ? (
        <Dashboard />
      ) : (
        <VerifierDashboard />
      )}
    </div>
  );
}

export default App;