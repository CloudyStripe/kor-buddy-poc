import { useState } from 'react'
import './App.css'

function App() {

  const [inquiry, setInquiry] = useState('')

  return (
    <div className="contentContainer text-center">
      <h1 className="text-4xl my-28">KorBuddy</h1>
      <input type="text"></input>
      <button className="ml-5 border-2 border-white w-28">Submit</button>
    </div>
    
  )
}

export default App
