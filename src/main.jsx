// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Login from './login';
// import Signup from './Signup';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login'; 
// import Signup from './Signup'; 

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
