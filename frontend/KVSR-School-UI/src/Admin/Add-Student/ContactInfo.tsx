


import { useNavigate } from 'react-router-dom';
import './ContactInfo.css'; // Separate CSS file for Contact Info styling

const ContactInfo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/add-student'); // Navigate back to the Basic Info page
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    navigate('/institute-info'); // Navigate to the Institute Info page
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <div className="progress-bar">
        <div className="step completed">1 Basic Info</div>
        <div className="step active">2 Contact Info</div>
        <div className="step">3 Institute Info</div>
        <div className="step">4 Batch Info</div>
      </div>

      <form className="form" onSubmit={handleNext}>
        <label>
          Text Number
          <input type="text" placeholder="Text Number" />
        </label>
        <label>
          WhatsApp
          <input type="text" placeholder="WhatsApp" />
        </label>
        <label>
          Address
          <input type="text" placeholder="Address" />
        </label>

        <div className="button-group">
          <button type="button" className="back-button" onClick={handleBack}>Back</button>
          <button type="submit" className="next-button">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
