import './ImageMessage.scss'

const ImageMessage = (props : {url : string}) => {
    
    return (
        <div className='image_cont'>
            <img className='image_message' src={props.url} alt='image' />        

        </div>
    );
};

export default ImageMessage;