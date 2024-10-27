import logo from './logo.svg';
import { Layers3, MessageCircle, Search, Sidebar, User } from 'lucide-react';
import './LeftPanel.scss'
import { useEffect } from 'react';
import { httpClient } from '../../../httpClient';
import { useChatStore } from '../../../store/chatStore';
import { IChat } from '../../../store/interfaces';
import { MessageProps } from '../Message/interfaces';
function LeftPanel() {


    const {uuid, setLastChats, lastChats, setMessages, nowChatIndex, setNowChatIndex, addСhat} = useChatStore();


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
            response.data.messages.map((data) => {
                newHistory.push({
                    sender: data.sender,
                    type: 'text',
                    content: {
                        text: data.content,
                    },
                })
            })
            
            setMessages(newHistory)
            setNowChatIndex(index)
       })

    }


    return (
        <div className="left_panel">

            <div className='top_segment'>
                <img src={logo} alt="" />
        
                <button className='close_sidebar'>
                    <Sidebar color='white'/>
                </button>
        
            </div>

            <button className='new_chat_btn' onClick={() => addNewChat()}>
                <Search className='zoomer' color="white"/>
                <div>Новый чат</div>
            </button>



            <div className='tools_list'>

                <button>
                    <MessageCircle className="icon" color="white"/>
                    <h3>Чат</h3>
                </button>

                <button>
                    <User className="icon" color="white"/>
                    <h3>Профиль</h3>
                </button>

                <button>
                    <Layers3 className="icon" color="white"/>
                    <h3>База знаний</h3>
                </button>


            </div>

            <div className='splitter'></div>

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




        </div>
    );
}

export default LeftPanel;