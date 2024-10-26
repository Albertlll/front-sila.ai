import logo from './logo.svg';
import { Layers3, MessageCircle, Search, Sidebar, User } from 'lucide-react';
import './LeftPanel.scss'
function LeftPanel() {
    return (
        <div className="left_panel">

            <div className='top_segment'>
                <img src={logo} alt="" />
        
                <button className='close_sidebar'>
                    <Sidebar color='white'/>
                </button>
        
            </div>

            <button className='new_chat_btn'>
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

                <a className='chat_link'>это чатик от нейронки номер раз</a>
                <a className='chat_link'>чат</a>
                <a className='chat_link'>чат</a>
                <a className='chat_link'></a>


            </div>




        </div>
    );
}

export default LeftPanel;