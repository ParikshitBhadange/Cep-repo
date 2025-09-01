import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
import Homepage from "./components/HomePage"
import Profile from "./components/Profile"
import Connections from './components/Connections'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Connections" element={<Connections />} />
       
      </Routes>
    </Router>
  )
}

export default App
