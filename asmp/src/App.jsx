import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Team from './components/Team/Team'

import Navbar from './components/Navbar/Navbar'
import TestimonialSlider from './components/TestimonialSlider/Testimonial'


function App() {

  return (
    
     <>
      <Home />
      <About/>
      <Team />
      
      <Navbar></Navbar>
      <div style={{height:'30vh'}}></div>
      <TestimonialSlider></TestimonialSlider>
    </>
  )
}

export default App
