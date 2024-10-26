import './ImageMessage.scss'

const ImageMessage = (props : {base64 : string}) => {
    
    return (
        <div className='image_cont'>
            <img className='image_message' src={props.base64} alt='image' />        

        </div>
    );
};

export default ImageMessage;