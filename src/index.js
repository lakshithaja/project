import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <div className="leave-request-form">
<h2>Leave Request</h2>
<form onSubmit={handleSubmit}>
  <label htmlFor="studentID">Student ID:</label>
  <input
    type="text"
    id="studentID"
    value={studentID}
    onChange={(e) => setStudentID(e.target.value)}
    required
  />
  <label htmlFor="studentName">Student Name:</label>
  <input
    type="text"
    id="studentName"
    value={studentName}
    onChange={(e) => setStudentName(e.target.value)}
    required
  />
  <label htmlFor="courseName">Course Name:</label>
  <input
    type="text"
    id="courseName"
    value={courseName}
    onChange={(e) => setCourseName(e.target.value)}
    required
  />
  <label htmlFor="headOfDepartment">Head of Department:</label>
  <input
    type="text"
    id="headOfDepartment"
    value={headOfDepartment}
    onChange={(e) => setHeadOfDepartment(e.target.value)}
    required
  />
  <label htmlFor="leaveDuration">Leave Duration (days):</label>
  <input
    type="number"
    id="leaveDuration"
    value={leaveDuration}
    onChange={(e) => setLeaveDuration(e.target.value)}
    required
  /> */}
//   <label htmlFor="messageForLeave">Message for Leave:</label>
//   <textarea
//     id="messageForLeave"
//     value={messageForLeave}
//     onChange={(e) => setMessageForLeave(e.target.value)}
//     required
//   />
//   <button type="submit">Submit</button>
// </form>
// </div>