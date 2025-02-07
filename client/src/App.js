import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Settings from "./Settings"
import Homepage from "./Homepage"
import Preview  from "./Preview"
import Controller from "./Controller"
import Navbar from "./Navbar"

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/controller" element={<Controller />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App