import { useEffect } from 'react'
import './App.scss'
import MainPage from './pages/MainPage'
import Chat from './components/ui/Chat';

import { httpClient } from './httpClient';
import { useChatStore } from './store/chatStore';
function App() {


  const {setUuid} = useChatStore()
  const {uuid} = useChatStore()
  useEffect(
    
  () => {
      if (uuid) {return}
      // setUuid('хехехех')
     httpClient.post('/user', {}).then((response) => {
       setUuid(response.data.user_id)
    })
      

       
  }, []);

  return (
    <>
     <Chat />
     {/* <MainPage/> */}
    </>
  )
}

export default App
