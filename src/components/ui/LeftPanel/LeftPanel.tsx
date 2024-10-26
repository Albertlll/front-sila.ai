import logo from './logo.svg';
import { Search, Sidebar } from 'lucide-react';
import './LeftPanel.scss'
function LeftPanel() {
    return (
        <div className="left_panel">

            <div className='top_segment'>
                <img src={logo} alt="" />
        
                <button className='closeSidebar'>
                    <Sidebar color='white'/>
                </button>
        
            </div>

            <div className='toolslist'>



            </div>

            <button className='new_chat_btn'>
                <Search className='zoomer' color="white"/>
                <div>Новый чат</div>
            </button>

        </div>
    );
}

export default LeftPanel;