import './AdminLogIn.css'; // Import your custom CSS file
import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';


const AdminLogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Replace these with your actual login credentials for checking
  const correctEmail = "abhi@example.com";
  const correctPassword = "1234";

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      navigate('/dashboard'); 
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 bg-opacity-80 relative">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')", opacity: 0.2 }}
      />

      {/* Admin panel login box */}
      <div className="z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        {/* Image added above Admin Panel */}
        <div className="flex justify-center mb-4">
        <img
            src="https://static.vecteezy.com/system/resources/previews/000/455/459/original/vector-students-playing-in-front-of-school.jpg"
            alt="Students playing in front of school"
            className="w-32 h-32 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Admin panel icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-blue-900">Admin Panel</h1>
        </div>

        {/* Welcome message */}
        <div className="bg-red-600 text-white text-center py-2 px-4 mb-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-red-600 transform -skew-x-12 -ml-2" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-red-600 transform skew-x-12 -mr-2" />
          <h2 className="text-xl font-bold">WELCOME</h2>
          <p className="text-sm">Please Login</p>
        </div>

        {/* Login form */}
        <form className="space-y-4">
        <input 
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        className="input-field"
      />
      <input 
        type="password" 
        placeholder="Enter password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="input-field"
      />
          <button className="btn"  onClick={handleLogin}
          >Login</button>
        </form>

        {/* Forgot password link */}
        <div className="text-center mt-4">
        <Link to="/forgot-password" className="text-sm text-blue-900 hover:underline">
        Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogIn;




















