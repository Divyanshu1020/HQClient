import MainContainer from '@/components/reusables/mainContainer'
import Headline from './components/headline'
import { useState } from 'react'

export default function Chats() {
  const [isAddChatOpen, setIsAddChatOpen] = useState(false)
  return (
    <MainContainer>
      { isAddChatOpen && <AddChat setIsAddChatOpen={setIsAddChatOpen}/>}

      <Headline setIsAddChatOpen={setIsAddChatOpen}/>
    </MainContainer>
  )
}

function AddChat({setIsAddChatOpen}:{setIsAddChatOpen:(value:boolean)=>void}) {

  return (
    <div onClick={() => setIsAddChatOpen(false)} className='z-5 absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 h-full w-full bg-black/30'>
        <div onClick={(e) => e.stopPropagation()} className='z-10 w-[60%] h-[60%] bg-background flex items-center '>
          h
        </div>
    </div>
  )
}
