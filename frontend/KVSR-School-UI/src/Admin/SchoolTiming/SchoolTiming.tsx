
import React, { useState } from 'react';
import './SchoolTiming.css';
import { Link } from 'react-router-dom';

const SchoolTiming: React.FC = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Initialize timings state with localStorage data or default values
  const [timings, setTimings] = useState(() => {
    const savedTimings = localStorage.getItem("schoolTimings");
    return savedTimings
      ? JSON.parse(savedTimings)
      : daysOfWeek.map(() => ({ startTime: "08:00", endTime: "14:00" }));
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => setEditMode(true);

  const handleSaveClick = () => {
    setEditMode(false);
    localStorage.setItem("schoolTimings", JSON.stringify(timings));
    alert("School timings saved successfully!");
  };

  // Update start or end time for a specific day
  const handleChange = (
    dayIndex: number,
    timeType: "startTime" | "endTime",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTimings = [...timings];
    newTimings[dayIndex][timeType] = event.target.value;
    setTimings(newTimings);
  };

  return (
    <div className="school-timing">
      <h2>School Timings</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day, dayIndex) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                {editMode ? (
                  <input
                    type="time"
                    value={timings[dayIndex].startTime}
                    onChange={(event) => handleChange(dayIndex, "startTime", event)}
                  />
                ) : (
                  timings[dayIndex].startTime
                )}
              </td>
              <td>
                {editMode ? (
                  <input
                    type="time"
                    value={timings[dayIndex].endTime}
                    onChange={(event) => handleChange(dayIndex, "endTime", event)}
                  />
                ) : (
                  timings[dayIndex].endTime
                )}
              </td>
              <td>
                {editMode ? (
                  <button className="save-btn" onClick={handleSaveClick}>Submit</button>
                ) : (
                  <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                )}
              </td>
            </tr>
          ))}
           <Link to="/dashboard" className="back-button">
       Back
      </Link>
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTiming;
