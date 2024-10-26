import './Message.scss';
import TextMessage from './messageSpicies/TextMessage/TextMessage';
import ImageMessage from './messageSpicies/ImageMessage/ImageMessage';
import silalogo from './silalogo.svg';
import { MessageProps } from './interfaces';
import { Volume2, Copy, ThumbsUp, ThumbsDown, Repeat, StopCircle } from 'lucide-react';
import { useState } from 'react';

const Message: React.FC<MessageProps> = (props) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [activeReaction, setActiveReaction] = useState<'like' | 'dislike' | null>(null); // Новое состояние для активной реакции

    const handleCopy = async () => {
        try {
            if (props.type === 'text' && props.content.text) {
                await navigator.clipboard.writeText(props.content.text);
            }
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    const speakText = (text: string) => {
        const newUtterance = new SpeechSynthesisUtterance(text);
        newUtterance.onend = () => {
            setIsSpeaking(false);
        };
        window.speechSynthesis.speak(newUtterance);
        setIsSpeaking(true);
    };

    const handleAudioClick = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel(); // Останавливаем воспроизведение
            setIsSpeaking(false);
        } else {
            if (props.type === 'text' && props.content.text) {
                speakText(props.content.text);
            }
        }
    };

    const toggleLike = () => {
        if (activeReaction === 'like') {
            setActiveReaction(null); // Сбрасываем реакцию, если лайк уже активен
        } else {
            setActiveReaction('like'); // Устанавливаем лайк
        }
    };

    const toggleDislike = () => {
        if (activeReaction === 'dislike') {
            setActiveReaction(null); // Сбрасываем реакцию, если дизлайк уже активен
        } else {
            setActiveReaction('dislike'); // Устанавливаем дизлайк
        }
    };

    return (
        <div className={props.sender === 'bot' ? 'message_left' : 'message_right'}>
            {props.sender === 'bot' && <img src={silalogo} alt="Логотип" />}

            {props.type === 'text' ? (
                <TextMessage text={props.content.text} />
            ) : props.type === 'image' ? (
                <ImageMessage url={props.content.url} />
            ) : (
                <div>Audio message is not supported.</div>
            )}

            {props.sender === 'bot' && (
                <div className="actions">
                    <button onClick={handleAudioClick}>
                        {isSpeaking ? <StopCircle size={16} /> : <Volume2 size={16} />}
                    </button>
                    <button onClick={handleCopy}>
                        <Copy size={16} />
                    </button>
                    {activeReaction !== 'dislike' && (
                        <button onClick={toggleLike}>
                            {activeReaction === 'like' ? <ThumbsUp fill="#fff" size={16} /> : <ThumbsUp size={16} />}
                        </button>
                    )}
                    {activeReaction !== 'like' && (
                        <button onClick={toggleDislike}>
                            {activeReaction === 'dislike' ? <ThumbsDown fill="#fff" size={16} /> : <ThumbsDown size={16} />}
                        </button>
                    )}
                    <button onClick={() => console.log('Repeat')}>
                        <Repeat size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Message;
