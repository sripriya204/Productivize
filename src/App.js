
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //import Productivize from './Productivize';
// import LoginPage from '/Users/siri/Productivize/src/LoginPage.js'; // Adjust the path based on your actual file structure
// import SignUpPage from '/Users/siri/Productivize/src/SignUp.js'; // Adjust the path based on your actual file structure
// import CalendarPage from '/Users/siri/Productivize/src/CalendarPage.js'; // Adjust the path based on your actual file structure


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/calendar" element={<Calendar />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; // Adjust the path based on your actual file structure
import SignUpPage from './SignUp'; // Adjust the path based on your actual file structure
import CalendarPage from './CalendarPage'; // Adjust the path based on your actual file structure

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
