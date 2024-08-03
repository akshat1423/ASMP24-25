import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Team from './components/Team/Team'

import Navbar from './components/Navbar/Navbar'
import TestimonialSlider from './components/TestimonialSlider/Testimonial'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Register from './components/register.jsx';
import Login from './components/login.jsx';

function App() {

  return (
    
     <>
      <Home />
      <About/>
      <Team />
      
      <Navbar></Navbar>
      <div style={{height:'30vh'}}></div>
      <TestimonialSlider></TestimonialSlider>
   
    <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  </>
  )
}

export default App
