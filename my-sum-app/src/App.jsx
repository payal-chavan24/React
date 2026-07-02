
import { useState } from 'react'
import './App.css'
import Sum from './Sum'

function App() {
  let [name, setName] = useState("")
  const handleDefault = () => {
    setName("default name")
  }
  const handleChange = (e) => {
    console.log("from input =" + e.target.value);

    setName(e.target.value)
  }

  return (
    <>
      <h1>welcom to app.jsx</h1>
      <button onClick={handleDefault}>
        Set Default Name
      </button>
      <h3>Enter user name</h3><input type="text" onChange={handleChange} />
      <h1>hello...{name}</h1>
      <Sum />

    </>
  )
}

export default App
