import Modal from "@shared/ui/Modal";
import { ArrowRight } from "lucide-react";
import type { ChangeEvent } from "react";
import { useImageStore } from "../model/imageStore";
import s from "./AddImageModal.module.scss";

function AddImageModal() {
	const { image, setImgMessage, isOpen, close } = useImageStore();

	const handleSend = async () => {
		// Отправка сообщения

		// httpClient
		// 	.post("/send_message", {
		// 		user_id: uuid,
		// 		chat_id: lastChats[nowChatIndex].chat_id,
		// 		message: imgMessage,
		// 		images: [rewriteFile(image)],
		// 	})
		// 	.then((response) => {
		// 		addMessage({
		// 			sender: "user",
		// 			type: "text",
		// 			content: {
		// 				text: response.data.bot_answer,
		// 			},
		// 		});

		// 		response.data.photos.map(
		// 			(photo: {
		// 				chapter: string;
		// 				image_number: string;
		// 				path: string;
		// 			}) => {
		// 				addMessage({
		// 					sender: "bot",
		// 					type: "image",
		// 					content: {
		// 						url: photo.path,
		// 						text: "",
		// 					},
		// 				});
		// 			},
		// 		);
		// 	})
		// 	.catch(() => {
		// 		console.log("ошибка запроса, вывод тестовых данных");

		// 		addMessage({
		// 			sender: "user",
		// 			type: "image",
		// 			content: {
		// 				url: image,
		// 				text: imgMessage,
		// 			},
		// 		});
		// 	});

		// addMessage(
		//     {
		//         sender: 'user',
		//         type: 'image',
		//         content: {
		//             url: image,
		//             text: ''
		//         }
		//     }
		// )

		// addMessage (
		//     {
		//         sender: 'user',
		//         type: 'text',
		//         content: {
		//             text: imgMessage
		//         }
		//     }
		// )

		// addMessage (
		//     {
		//         sender: 'bot',
		//         type: 'text',
		//         content: {
		//             text: "Как же я задолбался"
		//         }
		//     }
		// )

		close();
	};

	return (
		<Modal isOpen={isOpen} modalClose={close}>
			<div className={s.popup_cont}>
				<div className={s.image_box}>
					<img src={image} alt="pinned_image" />
				</div>

				<div className={s.imagetextinp}>
					<input
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setImgMessage(e.target.value);
						}}
						type="text"
						placeholder="Сообщение к картинке..."
					/>

					<button
						type="button"
						className={s.send_btn}
						onClick={() => {
							handleSend();
						}}
					>
						<ArrowRight color="white" />
					</button>
				</div>
			</div>
		</Modal>
	);
}

export default AddImageModal;
