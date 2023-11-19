// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Productivize/Calendar.css';


const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="container">
      <h1>Calendar Example</h1>
      <Calendar onChange={onChange} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
