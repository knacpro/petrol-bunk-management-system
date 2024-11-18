// import { useState } from 'react';
// import './Time_Table.css';

// const Time_Table = () => {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const periods = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5"];
  
//   // Initialize timetableData state and load from localStorage if available
//   const [timetableData, setTimetableData] = useState(() => {
//     const savedData = localStorage.getItem("timetableData");
//     return savedData ? JSON.parse(savedData) : days.map(day => periods.map(() => "Subject"));
//   });
  
//   const [editMode, setEditMode] = useState(false);

//   const handleEditClick = () => setEditMode(true);

//   const handleSaveClick = () => {
//     setEditMode(false);
//     localStorage.setItem("timetableData", JSON.stringify(timetableData));
//     alert("Timetable saved successfully!");
//   };

//   const handleChange = (dayIndex, periodIndex, event) => {
//     const newData = [...timetableData];
//     newData[dayIndex][periodIndex] = event.target.value;
//     setTimetableData(newData);
//   };

//   return (
//     <div className="timetable">
//       <h2>School Timetable</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Day</th>
//             {periods.map((period, index) => (
//               <th key={index}>{period}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {days.map((day, dayIndex) => (
//             <tr key={dayIndex}>
//               <td>{day}</td>
//               {timetableData[dayIndex].map((subject, periodIndex) => (
//                 <td key={periodIndex}>
//                   {editMode ? (
//                     <input
//                       type="text"
//                       value={subject}
//                       onChange={(event) => handleChange(dayIndex, periodIndex, event)}
//                     />
//                   ) : (
//                     subject
//                   )}
//                 </td>
//               ))}
//               <td>
//                 {editMode ? (
//                   <button className="save-btn" onClick={handleSaveClick}>Submit</button>
//                 ) : (
//                   <button className="edit-btn" onClick={handleEditClick}>Edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Time_Table;

import React, { useState } from 'react';
import './Time_Table.css';
import { Link } from 'react-router-dom';

const Time_Table: React.FC = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5"];
  
  // Initialize timetableData state with localStorage data or default values
  const [timetableData, setTimetableData] = useState<string[][]>(() => {
    const savedData = localStorage.getItem("timetableData");
    return savedData ? JSON.parse(savedData) : days.map(() => periods.map(() => "Subject"));
  });
  
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditClick = () => setEditMode(true);

  const handleSaveClick = () => {
    setEditMode(false);
    localStorage.setItem("timetableData", JSON.stringify(timetableData));
    alert("Timetable saved successfully!");
  };

  const handleChange = (
    dayIndex: number,
    periodIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newData = [...timetableData];
    newData[dayIndex][periodIndex] = event.target.value;
    setTimetableData(newData);
  };

  return (
    <div className="timetable">
      <h2>School Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {periods.map((period, index) => (
              <th key={index}>{period}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td>{day}</td>
              {timetableData[dayIndex].map((subject, periodIndex) => (
                <td key={periodIndex}>
                  {editMode ? (
                    <input
                      type="text"
                      value={subject}
                      onChange={(event) => handleChange(dayIndex, periodIndex, event)}
                    />
                  ) : (
                    subject
                  )}
                </td>
              ))}
              <td>
                {editMode && dayIndex === 0 ? (
                  <button className="save-btn" onClick={handleSaveClick}>Save</button>
                ) : (
                  !editMode && dayIndex === 0 && (
                    <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard" className="back-button">
       Back
      </Link>
    </div>
  );
};

export default Time_Table;
