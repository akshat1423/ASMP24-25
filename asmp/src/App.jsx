import "./App.css";
import Team from "./components/Team/Team";
import TestimonialSlider from "./components/TestimonialSlider/Testimonial";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Register from './components/register.jsx';
import Login from './components/login.jsx';import React from 'react';
import './App.css';
// import Sneakpeak from './components/sneakpeak/sneakpeak';
// import EventImages from './components/events/events';
import Profile from './components/Profile'
import Navbar from './components/Navbar/Navbar.jsx'
import Homee from './components/UltimateHome/Homee.jsx';
import Toggle from './components/Toggle'
import Line from "./components/Line/Line.jsx";
import Fakeheader from "./Fakeheader/Fakeheader.jsx";
import Sneakpeak from './components/sneakpeak/sneakpeak';
import EventImages from './components/events/events';

function App() {
  return (
    
     <>
      <Navbar></Navbar>
      
      {/* <Line></Line> */}
    
    <Router>
    <Routes>
    <Route path='' element={<Homee></Homee>}></Route>
      <Route path='/team' element={<Team />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/events" element={<EventImages />} /> 
      <Route path="/sneakpeak" element={<Sneakpeak/>} /> 



    </Routes>
  </Router>

    
    </>
  );
}
export default App;
