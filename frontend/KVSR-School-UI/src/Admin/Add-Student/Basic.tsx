
import { useNavigate } from 'react-router-dom';
import './Basic.css';

const Basic = () => {
  const navigate = useNavigate();

  const handleNext = (e :any) => {
    e.preventDefault(); // Prevents the form from submitting
    navigate('/contact-info'); // Navigates to the ContactInfo page
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <div className="progress-bar">
        <div className="step active">1 Basic Info</div>
        <div className="step">2 Contact Info</div>
        <div className="step">3 Institute Info</div>
        <div className="step">4 Batch Info</div>
      </div>
      
      <div className="profile-icon">
        <img src="profile-placeholder.png" alt="Profile" />
      </div>

      <form className="form" onSubmit={handleNext}>
        <label>
          Student Name
          <input type="text" placeholder="Student Name" />
        </label>
        <label>
          Father Name
          <input type="text" placeholder="Father Name" />
        </label>
        <label>
          Mother Name
          <input type="text" placeholder="Mother Name" />
        </label>
        <label>
          Date of Birth
          <input type="date" />
        </label>
        <label>
          Gender
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
};

export default Basic;
