import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Information from './components/Information/Information';
import Resume from './components/resume/Resume';
import Contact from './components/Contact/Contact';
import Achivements from './components/Achivements/Achivements';

const App = () => {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/achievements" element={<Achivements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App