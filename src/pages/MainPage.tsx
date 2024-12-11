import Chat from "../components/ui/Chat/Chat";
import LeftPanel from "../components/ui/LeftPanel/LeftPanel";

import './MainPage.scss'
function MainPage() {

    // вывод главной страницы
    return (
        <div className="main_page">

            <LeftPanel/>

            <Chat/>

        </div>
    );
}

export default MainPage;