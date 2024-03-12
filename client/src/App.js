import React, { useState, useEffect } from "react"
import Settings from "./Settings"

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
    <div>
      
      {/* {(typeof data.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user, i) => (
          <p key={i}> {user}</p>
        ))
      )} */}

      <Settings />
    </div>
  )
}

export default App