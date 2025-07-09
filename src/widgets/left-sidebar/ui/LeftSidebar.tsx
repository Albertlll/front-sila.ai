import type { IChat } from "@features/messages-history";
import {
	Layers3,
	MessageCircle,
	MessagesSquare,
	Search,
	Sidebar,
	User,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSideBarStore } from "../model/leftSidebarStore";
import s from "./LeftSidebar.module.scss";
import logo from "./logo.svg";

function LeftPanel() {
	const {
		setLastChats,
		lastChats,

		isSideBarOpened,
		toggleSideBar,
	} = useSideBarStore();

	useEffect(() => {
		setLastChats([
			{
				chat_id: 1,
				last_message: {
					sender: "John Doe",
					content: "Привет!",
					timestamp: "2022-01-15T10:30:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},

			{
				chat_id: 2,
				last_message: {
					sender: "Jane Doe",
					content: "Привет, как дела?",
					timestamp: "2022-01-15T10:35:00",
				},
			},
		]);

		//   httpClient.get('/last/' + uuid).then((response) => {
		//     setLastChats(response.data)
		//   })
	}, [setLastChats]);

	// const addNewChat = () => {
	// 	httpClient
	// 		.get("/chat-create", {
	// 			params: {
	// 				user_id: uuid,
	// 			},
	// 		})
	// 		.then((response) => {
	// 			addСhat({
	// 				chat_id: response.data.chat_id,
	// 				last_message: {
	// 					sender: "Bot",
	// 					content: "Новый чат!",
	// 					timestamp: "2022-01-15T10:30:00",
	// 				},
	// 			});

	// 			setNowChatIndex(lastChats.length - 1);
	// 		});
	// };

	// const setDialog = (index: number) => {
	// 	httpClient
	// 		.get("/chat_history/", {
	// 			params: {
	// 				chat_id: lastChats[index].chat_id,
	// 			},
	// 		})
	// 		.then((response) => {
	// 			const newHistory: Array<MessageProps> = [];
	// 			response.data.messages.map((data: MessageProps) => {
	// 				switch (data.type) {
	// 					case "text":
	// 						newHistory.push({
	// 							type: "text",
	// 							sender: data.sender,
	// 							content: {
	// 								text: data.content.text,
	// 							},
	// 						});
	// 				}
	// 			});

	// 			setMessages(newHistory);
	// 			setNowChatIndex(index);
	// 		});
	// };

	return (
		<div className={isSideBarOpened ? s.left_panel : s.left_panel_closed}>
			<div className={s.top_segment}>
				{isSideBarOpened && <img src={logo} alt="" />}

				<button
					className={s.close_sidebar}
					type="button"
					onClick={() => toggleSideBar()}
				>
					<Sidebar color="white" />
				</button>
			</div>

			{isSideBarOpened && (
				<button
					className={s.new_chat_btn}
					type="button"
					// onClick={() => addNewChat()}
				>
					<Search className={s.zoomer} color="white" />
					{isSideBarOpened && <div>Новый чат</div>}
				</button>
			)}

			<div className={s.tools_list}>
				<Link to="/chat" className={s.link}>
					<MessageCircle className={s.icon} color="white" />
					{isSideBarOpened && <h3>Чат</h3>}
				</Link>

				<Link to="/chat" className={s.link}>
					<User className={s.icon} color="white" />
					{isSideBarOpened && <h3>Профиль</h3>}
				</Link>

				<Link to="knowlege-base" className={s.link}>
					<Layers3 className={s.icon} color="white" />
					{isSideBarOpened && <h3>База знаний</h3>}
				</Link>

				{/* <button type="button">
					<MessagesSquare className={s.icon} color="white" />
					{isSideBarOpened && <h3>Чаты</h3>}link
				</button> */}
			</div>
			{isSideBarOpened && (
				<>
					<div className={s.splitter} />

					<div className={s.message_branches_label}>
						<h3>Недавние чаты</h3>
					</div>

					{/* <div className={s.chats}>
						{lastChats.map((chat: IChat) => (
							<Link
								to={""}
								type="button"
								key={chat.chat_id}
								// тут запрос на изменение диалога

								// onClick={
								//   () => setDialog(index)
								// }
								className={s.chat_link}
							>
								{chat.last_message.content}
							</Link>
						))}
					</div> */}
				</>
			)}
		</div>
	);
}

export default LeftPanel;
