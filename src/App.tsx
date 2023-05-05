import { useState } from 'react'
import './App.scss'
import { chat } from './ChatService/ChatService'
import { MaterialInput } from './Components/Input'
import { Container, InputAdornment, Paper, Stack } from '@mui/material'
import { MaterialIconButton } from './Components/IconButton'
import { Publish } from '@mui/icons-material'

function App() {

  const [inquiry, setInquiry] = useState<string>('')
  const [messageCollection, setMessageCollection] = useState<string[]>([])

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
    setMessageCollection(prevArray => [...prevArray, inquiry])
    const chatResponse = await chat(inquiry)
    const responseMessage = chatResponse.data.choices[0].message
    if (responseMessage) {
      setMessageCollection(prevArray => [...prevArray, responseMessage.content])
    }
    else {
      const error = "We're sorry, there was a problem constructing the reponse. Please try again."
      setMessageCollection(prevArray => [...prevArray, error])
    }
  }

  return (
    <Container className="contentContainer bg-white text-center flex flex-col items-center">
      <h1 className="text-4xl h-[100px] text-black pt-7">KorBuddy</h1>
      <Stack className="conversationContainer">
        {messageCollection.map((x, i) => {
          return (
            <Paper className='conversationCard'>{x}</Paper>
          )
        })}
      </Stack>
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
    </Container>
  )
}

export default App
