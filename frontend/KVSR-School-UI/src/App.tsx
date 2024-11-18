import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Dashboard from './Admin/Dashboard/Dashboard';
import AdminLogIn from './Admin/Login/components/Admin/AdminLogIn';
import ForgotPassword from './Admin/Login/components/Forgot-pass/ForgotPass';
import Teacher_register from './Admin/Register/Teacher_register';
import Event_register from './Admin/Event/Event_register';
import Teacher_Dashboard from './Admin/TeacherDashboard/TeacherDashboard';
import Events_Dashboard from './Admin/EventDashboard/EventDashboard';
import GalleyPhoto from './Admin/Galley/Galley_photo';
import Time_Table from './Admin/Time_Table/Time_Table';
import SchoolTiming from './Admin/SchoolTiming/SchoolTiming';
import Attendance from './Admin/Attendance/Attendance';
import Basic from './Admin/Add-Student/Basic';
import ContactInfo from './Admin/Add-Student/ContactInfo';
import InstituteInfo from './Admin/Add-Student/InstituteInfo';
import Navbar from './Admin/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Authentication Route */}
        <Route path="/login" element={<AdminLogIn />} />

        {/* Routes wrapped with Navbar */}
        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="teacher-register" element={<Teacher_register />} />
          <Route path="event-register" element={<Event_register />} />
          <Route path="teacher-dashboard" element={<Teacher_Dashboard />} />
          <Route path="event-dashboard" element={<Events_Dashboard />} />
          <Route path="gallery-photo" element={<GalleyPhoto />} />
          <Route path="time-table" element={<Time_Table />} />
          <Route path="school-timing" element={<SchoolTiming />} />
          <Route path="attendance" element={<Attendance />} />

          {/* Nested Add Student routes */}
          <Route path="add-student" element={<Basic />} />
          <Route path="contact-info" element={<ContactInfo />} />
          <Route path="institute-info" element={<InstituteInfo />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
