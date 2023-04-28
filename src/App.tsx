import { useEffect, useState } from 'react'
import './App.scss'
import { chat } from './ChatService/ChatService'
import { MaterialInput } from './Components/Input'
import { InputAdornment } from '@mui/material'
import { MaterialIconButton } from './Components/IconButton'
import { Publish } from '@mui/icons-material'

function App() {

  const [inquiry, setInquiry] = useState<string>('')
  const [response, setResponse] = useState<string>('')

  const inputCustomization = {
    fieldset: {
      border: "2px solid black"
    },
    div: {
      color: "black"
    },
    input: {
      '::placeholder': {
        opacity: .7
      }
    },
  }


  const sendInquiry = async () => {
    const chatResponse = await chat(inquiry)
    const responseMessage = chatResponse.data.choices[0].message
    if (responseMessage) {
      setResponse(responseMessage.content)
    }
  }

  return (
    <div className="contentContainer bg-white text-center flex flex-col items-center">
      <h1 className="text-4xl my-28">KorBuddy</h1>
      <button className="ml-5 border-2 border-white w-28">Submit</button>
      <textarea className="text-black w-[500px] h-[200px] p-2 m-2" readOnly value={response}></textarea>
      <MaterialInput
        className="inquiryInput mb-16 w-2/4"
        placeholder='Ask a question'
        value={inquiry}
        onChange={(e) => setInquiry(e.target.value)}
        sx={inputCustomization}
        InputProps={{
          endAdornment:
            <InputAdornment position='end'>
              <MaterialIconButton onClick={sendInquiry}> 
                <Publish className='submitButton'></Publish>
              </MaterialIconButton>
            </InputAdornment>
        }}
      />
    </div>
  )
}

export default App
