import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import { FaBullhorn, FaCalendarAlt, FaChalkboardTeacher, FaTh, FaUserGraduate } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="mainContent">
      <aside className="sidebar">
        <div className="sidebarHeader">
          <img
            src="https://3.bp.blogspot.com/-kpyTazx0aPE/W3UlLhOvxuI/AAAAAAAAdRE/QuiH-1ee9w8R9JQKDoQOvkoWRoc6ECOfACLcBGAs/s1600/SangolliRayannaPic.jpg"
            alt="School Logo"
            className="logo"
          />
          <h2 className="schoolName">KRANTI VEER SANGOLLI RAYANNA SIKSHANA SANSTHE</h2>
        </div>
        <nav className="menu">
          {/* Sidebar links with correct paths */}
          <Link to="/dashboard" className="menuItem">
            <FaTh className="icon" /> Dashboard
          </Link>
          <Link to="/teacher-dashboard" className="menuItem">
            <FaUserGraduate className="icon" /> Teachers
          </Link>
          <Link to="/event-dashboard" className="menuItem">
            <FaChalkboardTeacher className="icon" /> Events
          </Link>
          <Link to="/gallery-photo" className="menuItem">
            <FaCalendarAlt className="icon" /> Gallery
          </Link>
          <Link to="/time-table" className="menuItem">
            <FaBullhorn className="icon" /> Time Table
          </Link>
          <Link to="/school-timing" className="menuItem">
            <FaBullhorn className="icon" /> School Timing
          </Link>
          <Link to="/Attendance" className="menuItem">
            <FontAwesomeIcon icon={faPeopleGroup} /> Attendance
          </Link>
          <Link to="/add-student" className="menuItem">
            <FontAwesomeIcon icon={faPlus} /> Add Student
          </Link>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}

export default Navbar;
