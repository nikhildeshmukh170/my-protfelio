import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Information from './components/Information/Information';
import Resume from './components/resume/Resume';

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/achievements" element={""} />
        <Route path="/contact" element={""} />
      </Routes>
    </Router>
  )
}

export default App