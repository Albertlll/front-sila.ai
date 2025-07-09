import Chat from "@widgets/chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./pagesLayout.scss";
import LeftPanel from "@widgets/left-sidebar/ui/LeftSidebar";
import KnowlwgeBase from "./KnowlegeBase/KnowlegeBase";
function MainPage() {
	// вывод главной страницы
	return (
		<div className="main_page">
			<BrowserRouter basename="/front-sila.ai">
				<LeftPanel />

				<div className="page_cont">
					<Routes>
						<Route path="/chat" element={<Chat />} />
						<Route path="/knowlege-base" element={<KnowlwgeBase />} />
					</Routes>
				</div>

				{/* <Route path="/profile" element={}/> */}
			</BrowserRouter>
		</div>
	);
}

export default MainPage;
