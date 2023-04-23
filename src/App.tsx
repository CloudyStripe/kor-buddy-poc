import { useEffect, useState } from 'react'
import './App.css'
import { chat } from './ChatService/ChatService'

function App() {

  const [inquiry, setInquiry] = useState<string>('')
  const [response, setResponse] = useState<string>('')


  const sendInquiry = async () => {
    const chatResponse = await chat(inquiry)
    const responseMessage = chatResponse.data.choices[0].message
    if(responseMessage){
      setResponse(responseMessage.content)
    }
  }

  return (
    <div className="contentContainer text-center flex flex-col items-center">
      <h1 className="text-4xl my-28">KorBuddy</h1>
      <textarea className="w-[500px] h-[200px] text-black p-2 m-2" value={inquiry} onChange={(e) => setInquiry(e.target.value)}></textarea>
      <button onClick={sendInquiry} className="ml-5 border-2 border-white w-28">Submit</button>
      <textarea className="text-black w-[500px] h-[200px] p-2 m-2" readOnly value={response}></textarea>
    </div>
  )
}

export default App
