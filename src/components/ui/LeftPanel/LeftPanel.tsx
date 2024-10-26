import logo from './logo.png';
import { Search } from 'lucide-react';
function LeftPanel() {
    return (
        <div className="left_panel">
            <div>
                <img src={logo} alt="" />
            </div>

            <button className='new_chat_btn'>
                <Search color="white"/>
                Новый чат
            </button>

        </div>
    );
}

export default LeftPanel;