import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Settings from "./Settings"
import Homepage from "./Homepage"
import Preview  from "./Preview"

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/settings").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App