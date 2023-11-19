// src/CalendarPage.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

// ... rest of the component code


const CalendarPage = () => {
  return (
    <div className="container calendar-container">
      <h2>Calendar Page</h2>
      {/* Use the Calendar component here */}
      <Calendar />
    </div>
  );
};

export default CalendarPage;
