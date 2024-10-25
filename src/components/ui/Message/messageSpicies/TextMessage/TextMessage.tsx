import './TextMessage.scss'

const TextMessage = (props : {text : string }) => {
    
    return (
        <div className="text_message">

            {props.text}

        </div>  
    );
};

export default TextMessage;