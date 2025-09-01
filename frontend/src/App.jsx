import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Profile from "./components/Profile"
// import LoginPage from "./components/LoginPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Profile />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
