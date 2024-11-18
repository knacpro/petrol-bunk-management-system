
import { useNavigate } from 'react-router-dom';
import './InstituteInfo.css'; // Assuming you have a separate CSS file for styling

const InstituteInfo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/contact-info'); // Navigate back to the Contact Info page
  };

  const handleNext = (e:any) => {
    e.preventDefault();
    navigate('/batch-info'); // Navigate to the Batch Info page (make sure this route is defined)
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <div className="progress-bar">
        <div className="step completed">1 Basic Info</div>
        <div className="step completed">2 Contact Info</div>
        <div className="step active">3 Institute Info</div>
        <div className="step">4 Batch Info</div>
      </div>

      <form className="form" onSubmit={handleNext}>
        <label>
          School Name
          <input type="text" placeholder="School Name" defaultValue="vcnbbb" />
        </label>
        <label>
          Roll Number
          <input type="text" placeholder="Roll Number" />
        </label>
        <label>
          Standard
          <input type="text" placeholder="Standard" />
        </label>
        <label>
          Aadhar Number
          <input type="text" placeholder="Aadhar Number" />
        </label>
        <label>
          Caste
          <input type="text" placeholder="Caste" />
        </label>

        <div className="button-group">
          <button type="button" className="back-button" onClick={handleBack}>Back</button>
          <button type="submit" className="next-button">Next</button>
        </div>
      </form>
    </div>
  );
};

export default InstituteInfo;
