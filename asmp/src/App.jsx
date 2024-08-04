import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sneakpeak from './components/sneakpeak/sneakpeak';
import EventImages from './components/events/events';

function App() {
  return (
    <div className="App">
      <div className="text-primary">ASMP</div>
      <Routes>
        <Route path="/" element={<Sneakpeak />} />
        <Route path='/events' element={<EventImages/>}/>
      </Routes>
    </div>
  );
}

export default App;

