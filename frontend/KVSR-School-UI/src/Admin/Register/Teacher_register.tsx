import { useState } from 'react';
import './Teacher_register.css'; 
import { Link } from 'react-router-dom';

const Teacher_register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = (e:any) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !subject || !password) {
      setError('All fields are required.');
      return;
    }

    // Simulate registration process (replace with your API call)
    const newTeacher = { name, email, subject, password };
    console.log('New Teacher Registration:', newTeacher);
    
    // Clear form fields
    setName('');
    setEmail('');
    setSubject('');
    setPassword('');
    setError('');
  };

  return (
    <div className="registration-container">
      <div className="text-center mt-4">
        <Link to="/teacher-dashboard" className="text-sm text-blue-900 hover:underline">
        Back
          </Link>
        </div>
      <h2 className="text-center">New Teacher Registration</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleRegistration} className="registration-form">

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter the subject you will teach"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Teacher_register;