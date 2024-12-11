import logo from './logo.svg';
import { Layers3, MessageCircle, Search, Sidebar, User } from 'lucide-react';
import './LeftPanel.scss'
import { useEffect } from 'react';
import { httpClient } from '../../../httpClient';
import { useChatStore } from '../../../store/chatStore';
import { IChat } from '../../../store/interfaces';
import { MessageProps } from '../Message/interfaces';
function LeftPanel() {


    const {uuid, setLastChats, lastChats, setMessages, setNowChatIndex, addСhat, isSideBarOpened, toggleSideBar} = useChatStore();

    useEffect(() => {

        setLastChats([
            {
                chat_id: 1,
                last_message: {
                    sender: 'John Doe',
                    content: 'Привет!',
                    timestamp: '2022-01-15T10:30:00'
                }

            },
            {
                chat_id: 2,
                last_message: {
                    sender: 'Jane Doe',
                    content: 'Привет, как дела?',
                    timestamp: '2022-01-15T10:35:00'
                }
            }
        ])


    //   httpClient.get('/last/' + uuid).then((response) => {
    //     setLastChats(response.data)
    //   })
    
    }, [])


    const addNewChat = () => {



        httpClient.get('/chat-create', {
            params: {
                user_id : uuid
            }
        }).then((response) => {
            addСhat({
                chat_id: response.data.chat_id,
                last_message: {
                    sender: 'Bot',
                    content: 'Новый чат!',
                    timestamp: '2022-01-15T10:30:00'
                }
            })

            setNowChatIndex(lastChats.length - 1)


            
        })

    }



    const setDialog = (index : number) => {

        httpClient.get('/chat_history/', {
            params: {
              chat_id: lastChats[index].chat_id
            }
          }).then((response) => {

            const newHistory : Array<MessageProps> = [];
            response.data.messages.map((data : MessageProps) => {

                switch (data.type) {
                    case "text" :
                        newHistory.push({
                            type: 'text',
                            sender: data.sender,
                            content: {
                                text: data.content.text,
                            },
                        })
                }
            })
            
            setMessages(newHistory)
            setNowChatIndex(index)
       })

    }


    return (
        <div className={ isSideBarOpened ? "left_panel" : "left_panel_closed"}>

            <div className='top_segment'>

                {
                    isSideBarOpened &&
                        <img src={logo} alt="" />

                }
        
                <button className='close_sidebar' onClick={() => toggleSideBar()}>
                    <Sidebar color='white'/>
                </button>
        
            </div>

            <button className='new_chat_btn' onClick={() => addNewChat()}>
                <Search className='zoomer' color="white"/>
                {
                    isSideBarOpened &&
                    <div>Новый чат</div>
                }
            </button>



            <div className='tools_list'>

                <button>
                    <MessageCircle className="icon" color="white"/>
                    {isSideBarOpened &&
                    <h3>Чат</h3>}
                </button>

                <button>
                    <User className="icon" color="white"/>
                    {isSideBarOpened &&
                     <h3>Профиль</h3>}
                </button>

                <button>
                    <Layers3 className="icon" color="white"/>
                    {isSideBarOpened &&
                    
                    <h3>База знаний</h3>
                    }
                </button>


            </div>

            <div className='splitter'></div>

            
            {isSideBarOpened ?
            <>
            <div className='message_branches_label'>
                <Layers3 className="icon" color="white"/>
                <h3>История чатов</h3>
            </div>

            <div className='chats'>

                {

                    lastChats.map((chat : IChat, index) => (
                        <a key={index} onClick={() => setDialog(index)} className='chat_link'>{chat.last_message.content}</a>
                    ))
                
                }


            </div>
            </>

            : 
            
            "fd"

}



        </div>
    );
}

export default LeftPanel;