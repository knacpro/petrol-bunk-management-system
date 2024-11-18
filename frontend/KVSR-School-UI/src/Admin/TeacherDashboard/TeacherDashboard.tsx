import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';

interface Teacher {
    id: number;
    name: string;
    subject: string;
    contact: string;
}

const TeacherDashboard: React.FC = () => {
    const navigate = useNavigate();
    const handlepage = () => {
        navigate('/teacher-register');    
      };

    const [teachers] = useState<Teacher[]>([
        { id: 1, name: 'John Doe', subject: 'Mathematics', contact: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', subject: 'Science', contact: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', subject: 'English', contact: 'alice.johnson@example.com' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredTeachers = teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard">
            <h2>Teacher Dashboard</h2>
            <Link to="/dashboard" className="text-sm text-blue-900 hover:underline">
        Back
          </Link>
            <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <table className="teacher-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTeachers.map((teacher) => (
                        <tr key={teacher.id}>
                            <td>{teacher.name}</td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn"  onClick={handlepage}
          >Register Teacher</button>
        </div>
    );
};

export default TeacherDashboard;
