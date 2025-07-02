import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Desktop from '../code/Desktop';
import NoteAppp from '../noteapp/NoteAppp';
import Portfolio from '../portfolio/Portfolio';


function Home() {
  return (
    <>
     <Desktop/>
    </>
  );
}
function App() {
  return (
    <Router>
        <Routes>
          {/* Route for the Home page, renders the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/noteapp" element={<NoteAppp/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
    </Router>
  );
}

export default App;