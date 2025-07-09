import type { AxiosResponse } from "axios";
import { httpClient } from "src/httpClient";
import { messageToDTO } from "../model/converters";
import type * as types from "../model/types";

export const sendMessage = (
	message: types.MessageProps,
): Promise<AxiosResponse<types.MessageResponseDTO>> => {
	return httpClient.post<
		types.MessageSendDTO,
		AxiosResponse<types.MessageResponseDTO>
	>("/send_message", messageToDTO(message));
};
