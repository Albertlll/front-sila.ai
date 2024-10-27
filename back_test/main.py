
@router.post(
async def new_user():

        # Генерация нового UUID
        new_uuid = str(uuid.uuid4())         
        return UserResponse(user_id=new_user.user_id))

@router.get("/last/{user_id}", response_model=List[ChatWithLastMessageResponse])
async def get_last_five_chat_by_id(
        user_id: str
):
        return chats_with_messages

@router.post("/send_message", response_model=SendMessageResponse)
async def send_message(
    request: SendMessageRequest
):
photos_info.append(PhotoInfo(
                        chapter=chapter_num,
                        image_number=image_num,
                        base64_data=encoded_string
                    ))

return SendMessageResponse(
        user_message=combined_message,
        bot_answer=bot_answer,
        photos=photos_info
    )


# app/schemas/chat.py
from pydantic import BaseModel
from datetime import datetime
from typing import List

class LastMessageSchema(BaseModel):
    sender: str
    content: str
    timestamp: datetime

class ChatWithLastMessageResponse(BaseModel):
    chat_id: int
    last_message: LastMessageSchema


# app/schemas/message.py
from pydantic import BaseModel, Field, validator
from typing import List, Dict, Optional
import base64

class MessageImage(BaseModel):
    filename: str
    data: str  # Base64-encoded image data

    @validator('data')
    def validate_base64(cls, v):
        try:
            base64.b64decode(v)
        except Exception:
            raise ValueError('Invalid base64 encoding')
        return v

class SendMessageRequest(BaseModel):
    user_id: str
    chat_id: int
    message: str
    images: Optional[List[MessageImage]] = None  # Опционально список изображений

class PhotoInfo(BaseModel):
    chapter: str
    image_number: str
    base64_data: str  # Base64-encoded image data

class SendMessageResponse(BaseModel):
    user_message: str
    bot_answer: str
    photos: List[PhotoInfo]


from pydantic import BaseModel


class UserResponse(BaseModel):
    user_id: str




import sys

import asyncio
import uvicorn
from fastapi import FastAPI

app = FastAPI()

async def main():
    config = uvicorn.Config(app)
    config.bind = ["localhost:8000"]
    server = uvicorn.Server(config)
    await server.serve()


if __name__ == "__main__":

   asyncio.run(main())